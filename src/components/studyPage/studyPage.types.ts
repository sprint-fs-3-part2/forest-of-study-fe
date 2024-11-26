export type ReactionsType = Record<string, number>;

export interface MoreReactionProps {
  reactions: [string, number][];
  displayMore: boolean;
}

export type PasswordModalVariant =
  | 'edit'
  | 'delete'
  | 'habit'
  | 'focus'
  | undefined;

export interface PasswordModalProps {
  nickname: string;
  studyName: string;
  variant: PasswordModalVariant;
  onClose: () => void;
}

export interface ActionsProps {
  setVariant: (variant: PasswordModalVariant) => void;
}
