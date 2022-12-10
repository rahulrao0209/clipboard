import type { ClipAction, ClipData } from '../../types';
import {
  ADD_CLIP,
  DELETE_ALL_CLIPS,
  DELETE_CLIP,
  UPDATE_CLIP,
} from './clipActions';

const updateClip = function (clips: ClipData[], clipToUpdate: ClipData) {
  return clips.map((clip: ClipData) => {
    if (clip.id === clipToUpdate.id) {
      return {
        ...clip,
        id: Date.now(),
        title: clipToUpdate.title,
        content: clipToUpdate.content,
      };
    }
    return clip;
  });
};

const deleteClip = function (clips: ClipData[], clipId: string) {
  return clips.filter((clip: ClipData) => clip.id !== clipId);
};

const clipReducer = function (state: ClipData[], action: ClipAction): any {
  switch (action.type) {
    case ADD_CLIP:
      return [...state, action.payload.data];
    case UPDATE_CLIP:
      return updateClip(state, action.payload.data);
    case DELETE_CLIP:
      return deleteClip(state, action.payload.id);
    case DELETE_ALL_CLIPS:
      return [];
    default:
      return [...state];
  }
};

export default clipReducer;
