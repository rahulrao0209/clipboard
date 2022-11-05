export type ClipData = {
  id: string;
  title?: string;
  content: string;
};

export type ClipPayload = {
  id: string;
  data?: ClipData;
};

export type ClipAction = {
  type: string;
  payload: ClipPayload;
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
