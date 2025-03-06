import type { Program } from './program';

export type AppState = {
  programs: Program[];
  loading: boolean;
  error: string | null;
};

export type Action =
  | { type: 'FETCH_INIT' }
  | { type: 'FETCH_SUCCESS'; payload: Program[] }
  | { type: 'FETCH_FAILURE'; payload: string };
