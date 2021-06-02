

export interface MemberState {
    memberVariables: MemberVariable[];
    memberFunctions: any[];
    imports?: []
}

export interface MemberVariable {
    type: variableType;
    id: number | string;
    name: string;
    value?: any
}

export declare type variableType = "var" | "let" | "const"


export interface MemberAction {
    type: "ADD_VARIABLE" | "ADD_FUNCTION" | "ADD_CLASS" | "EDITED_VARIABLE" | "EDITED_FUNCTION" | "EDITED_FUNCTION";
    id?: string | number;
    payload?: MemberActionPayload;
    editingVariablePayload?: MemberVariable;
    editingFunctionPayload?: any;
}

export interface MemberActionPayload {
    memberVariable?: MemberVariable;
    memberFunction?: any;
}