import type { ClipAction, ClipData } from '../../types';
import { ADD_CLIP, DELETE_CLIP, UPDATE_CLIP } from './clipActions';

const findClip = function (clips: ClipData[], clipId: string) {
  return clips.find((clip: ClipData) => clip.id === clipId);
};

const updateClip = function (clips: ClipData[], clipId: string) {
  const clipToUpdate = findClip(clips, clipId);
};

const deleteClip = function (clips: ClipData[], clipId: string) {
  return clips.filter((clip: ClipData) => clip.id !== clipId);
};

const clipReducer = function (state: ClipData[], action: ClipAction): any {
  switch (action.type) {
    case ADD_CLIP:
      return [...state, action.payload.data];
    case UPDATE_CLIP:
      updateClip(state, action.payload.id);
    case DELETE_CLIP:
      deleteClip(state, action.payload.id);
    default:
      return [...state];
  }
};

export default clipReducer;
