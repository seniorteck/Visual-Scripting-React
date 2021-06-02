import { AppState } from "./appState";
import { MemberState } from "./memberState";


export interface ReduxStoreState {
    memberState: MemberState;
    appState: AppState
}