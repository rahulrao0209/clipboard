import { ClipContextProvider } from './ClipContext';
import { ClipWindowContextProvider } from './ClipWindowContext';
import { ToastContextProvider } from './ToastContext';

export { default as ClipContext } from './ClipContext';
export { default as ClipWindowContext } from './ClipWindowContext';
export { default as ToastContext } from './ToastContext';

export const providers = {
  ClipContextProvider,
  ClipWindowContextProvider,
  ToastContextProvider,
};
