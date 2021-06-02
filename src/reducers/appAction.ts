import { Action } from "redux";
import { AppState, ActionType } from "../types"


export const applicationAction = (appState: AppState = { variableState: {} }, action: ActionType): AppState => {
    switch (action.type) {
        case "EDITING_VARIABLE":
            return action.payload;
        case "EDITING_FUNCTION":
            return action.payload;
        case "DONE":
            return {variableState: {}}
        default:
            return appState;
    }
}