import * as memberState from "./memberState"
import * as reduxStoreState from "./reduxStoreState"
import * as appState from "./appState"


export declare type dispatchType = "MEMBER_DISPATCH" | "APP_DISPATCH"
export declare type ReduxStoreState = reduxStoreState.ReduxStoreState;
export declare type AppState = appState.AppState;
export declare type ActionType = appState.ActionType;
export declare type VariableState = appState.VariableState;

// memmber state refers to members declared not those included as nodes 
export declare type MemberState = memberState.MemberState;
export declare type MemberVariable = memberState.MemberVariable;
export declare type MemberAction = memberState.MemberAction;
export declare type MemberActionPayload = memberState.MemberActionPayload;
export declare type variableType = memberState.variableType;