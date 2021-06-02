import { Action } from "redux";
import { AppState, ActionType } from "../types"


export const applicationAction = (appState: AppState = { variableState: { id: -1 } }, action: ActionType): AppState => {
    switch (action.type) {
        case "EDITING_VARIABLE":
            console.log(action.payload);
            return action.payload as AppState;
        case "EDITING_FUNCTION":
            return action.payload as AppState;
        case "DONE":
            return { variableState: { id: -1 } }
        default:
            console.log("returning default")
            return appState;
    }
}