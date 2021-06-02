import { MemberState, MemberAction, MemberVariable, variableType } from "../types/memberState";


export const memberReducer = (members: MemberState = { memberVariables: [], memberFunctions: [] }, action: MemberAction): MemberState => {
    switch (action.type) {
        case "ADD_VARIABLE":
            console.log("adding new variable")
            members.memberVariables.push(action.payload?.memberVariable as MemberVariable)
            console.log({ ...members, memberVariables: members.memberVariables });
            return { ...members, memberVariables: members.memberVariables };

        case "ADD_FUNCTION":
            members.memberFunctions.push(action.payload)
            return { ...members, memberFunctions: members.memberFunctions };

        case "EDITED_VARIABLE":
            console.log(action.id);
            var memberToEdit = members.memberVariables.find((el) => el.id == action.id) as MemberVariable;
            memberToEdit.name = action.editingVariablePayload?.name as string;
            memberToEdit.value = action.editingVariablePayload?.value as string;
            memberToEdit.type = action.editingVariablePayload?.type as variableType;

            members.memberVariables = members.memberVariables.map((el) => {
                if (el.id == action.id) {
                    el = memberToEdit;
                }

                return el;
            })

            return { ...members, memberVariables: members.memberVariables };

        default:
            return members;

    }

}