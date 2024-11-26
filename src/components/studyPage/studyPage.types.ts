export type ReactionsType = Record<string, number>;

export interface MoreReactionProps {
  reactions: [string, number][];
  displayMore: boolean;
}
