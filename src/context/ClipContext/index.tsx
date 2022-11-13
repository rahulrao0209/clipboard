import { createContext, useEffect, useReducer } from 'react';
// import { useStorage } from '@plasmohq/storage/hook';
import type { ClipData } from '../../types';
import { ADD_CLIP, DELETE_CLIP, UPDATE_CLIP } from './clipActions';
import clipReducer from './clipReducer';

const ClipContext = createContext(null);

const initialState: ClipData[] = [];

export const ClipContextProvider = function (props: any) {
  // const [clips, setClips] = useStorage<ClipData[]>('clips');
  const clips = JSON.parse(localStorage.getItem('clips'));

  const [state, dispatch] = useReducer(clipReducer, clips ?? initialState);

  /* Persist the data in chrome storage */
  useEffect(() => {
    // setClips(state);
    localStorage.setItem('clips', JSON.stringify(state));
  }, [state]);

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
  const updateClip = function (clip: ClipData) {
    dispatch({
      type: UPDATE_CLIP,
      payload: {
        id: clip.id,
        data: clip,
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
