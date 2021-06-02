
export declare interface AppState {
    appState?: "EDITING_VARIABLE" | "EDITING_FUNCTION";
    variableState: VariableState;
}


export declare interface VariableState {
    id: string | number;
    type?: "var" | "let" | "const";
    name?: string;
    value?: string;
}

//TODO: change name to more meaningful name
export declare interface ActionType {
    type: "EDITING_VARIABLE" | "EDITING_FUNCTION" | "DONE"
    payload?: AppState;
}


