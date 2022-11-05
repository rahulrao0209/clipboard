export type ClipData = {
  id: string | number;
  title?: string;
  content: string;
};

export type ClipAction = {
  type: string;
  payload?: ClipData | string;
};

export type ClipContextProps = {
  state: ClipData[];
  addClip: (clip: ClipData) => void;
  updateClip: (clip: ClipData) => void;
  deleteClip: (clipId: string) => void;
};

export type BottomBarProps = {
  toggleAddClipWindow: () => void;
};

export type AddClipProps = {
  showAddClipWindow: boolean;
  toggleAddClipWindow: () => void;
};
