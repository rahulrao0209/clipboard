export type ClipData = {
  id: string | number;
  title?: string;
  content: string;
};

export type ClipPayload = {
  id: string | number;
  data?: ClipData;
};

export type ClipAction = {
  type: string;
  payload?: ClipPayload;
};

export type ToastProps = {
  message: string;
};

export type BottomBarProps = {
  toggleAddClipWindow: () => void;
};

export type AddClipProps = {
  showAddClipWindow: boolean;
  toggleAddClipWindow: () => void;
};

/* Context Props */
export type SettingsContextProps = {
  settingsModalOpen: boolean;
  confirmSwitchOn: boolean;
  toggleConfirmSwitch: () => void;
  toggleSettingsModal: () => void;
  closeSettingsModal: () => void;
};

export type ClipContextProps = {
  clips: ClipData[];
  addClip: (clip: ClipData) => void;
  updateClip: (clip: ClipData) => void;
  deleteClip: (clipId: string | number) => void;
  deleteAllClips: () => void;
};

export type ClipWindowContextProps = {
  clipId: string | number;
  showAddClipWindow: boolean;
  toggleAddClipWindow: () => void;
  setClipId: React.Dispatch<React.SetStateAction<string | number>>;
};

export type ToastContextProps = {
  showToast: boolean;
  toastMessage: string;
  handleToast: (show: boolean, message: string) => void;
};
