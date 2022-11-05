import { createContext, useReducer } from 'react';
import type { ClipData } from '../../types';
import { ADD_CLIP, DELETE_CLIP, UPDATE_CLIP } from './clipActions';
import clipReducer from './clipReducer';

const ClipContext = createContext(null);

const initialState: ClipData[] = [];

export const ClipContextProvider = function (props: any) {
  const [state, dispatch] = useReducer(clipReducer, initialState);

  /* 
   Functions for all Clip actions  
  */

  /* Add Clip */
  const addClip = function (clip: ClipData) {
    dispatch({
      type: ADD_CLIP,
      payload: {
        id: clip.id,
        data: clip,
      },
    });
  };

  /* Update Clip */
  const updateClip = function (clipId: string) {
    dispatch({
      type: UPDATE_CLIP,
      payload: {
        id: clipId,
      },
    });
  };

  /* Delete Clip */
  const deleteClip = function (clipId: string) {
    dispatch({
      type: DELETE_CLIP,
      payload: {
        id: clipId,
      },
    });
  };

  return (
    <ClipContext.Provider
      value={{ clips: state, addClip, updateClip, deleteClip }}>
      {props.children}
    </ClipContext.Provider>
  );
};

export default ClipContext;
