import { PropsWithChildren, createContext, useEffect, useReducer } from 'react';
// import { useStorage } from '@plasmohq/storage/hook';
import type { ClipContextProps, ClipData } from '../../types';
import {
  ADD_CLIP,
  DELETE_ALL_CLIPS,
  DELETE_CLIP,
  UPDATE_CLIP,
} from './clipActions';
import clipReducer from './clipReducer';

const ClipContext = createContext<ClipContextProps>(null);

const initialState: ClipData[] = [];

export const ClipContextProvider = function (props: PropsWithChildren) {
  // const [clips, setClips] = useStorage<ClipData[]>('clips');
  const clips: ClipData[] = JSON.parse(localStorage.getItem('clips'));

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
  const deleteClip = function (clipId: string | number) {
    dispatch({
      type: DELETE_CLIP,
      payload: {
        id: clipId,
      },
    });
  };

  /* Delete All Clips */
  const deleteAllClips = function () {
    dispatch({ type: DELETE_ALL_CLIPS });
  };

  return (
    <ClipContext.Provider
      value={{ clips: state, addClip, updateClip, deleteClip, deleteAllClips }}>
      {props.children}
    </ClipContext.Provider>
  );
};

export default ClipContext;
