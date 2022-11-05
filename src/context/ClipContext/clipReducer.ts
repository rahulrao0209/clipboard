import type { ClipAction, ClipData } from '../../types';
import { ADD_CLIP, DELETE_CLIP, UPDATE_CLIP } from './clipActions';

const clipReducer = function (state: ClipData[], action: ClipAction): any {
  switch (action.type) {
    case ADD_CLIP:
      return [...state, action.payload];
    case UPDATE_CLIP:
      return {};
    case DELETE_CLIP:
      return {};
    default:
      return {};
  }
};

export default clipReducer;
