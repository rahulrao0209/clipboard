import { ClipContextProvider } from './ClipContext';
import { ClipWindowContextProvider } from './ClipWindowContext';
import { ConfirmModalContextProvider } from './ConfirmModalContext';
import { SettingsContextProvider } from './SettingsContext';
import { ToastContextProvider } from './ToastContext';

export { default as ClipContext } from './ClipContext';
export { default as ClipWindowContext } from './ClipWindowContext';
export { default as ToastContext } from './ToastContext';
export { default as SettingsContext } from './SettingsContext';
export { default as ConfirmModalContext } from './ConfirmModalContext';

export const providers = {
  ClipContextProvider,
  ClipWindowContextProvider,
  SettingsContextProvider,
  ToastContextProvider,
  ConfirmModalContextProvider,
};
