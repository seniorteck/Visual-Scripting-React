
export declare interface AppState {
    appState?: "EDITING_VARIABLE" | "editingFunction";
    variableState: VariableState;
}


export declare interface VariableState {
    id?: string | number;
    type?: "var" | "let" | "const";
    name?: string;
    value?: string;
}

export declare interface ActionType {
    type: "EDITING_VARIABLE" | "EDITING_FUNCTION" | "DONE"
    payload: AppState;
}


