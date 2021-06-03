import { useEffect, useRef, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {ActionType, AppState, MemberAction, VariableState} from "../types"



export const EditingMemberContext : React.FC= (props)  =>
{
    const member = useSelector(state => state)
    const appState : AppState = useSelector((state : any) => state.appState);
    const [currentVariableState, setVariableState] = useState<VariableState>(appState.variableState);
    const variableValueInputRef = useRef(HTMLInputElement.prototype)
    const elementHolder = useRef(HTMLFormElement.prototype);

    const dispatch = useDispatch();

    const onFinishEditingVariable  = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    {
        event.preventDefault();

        let elem = elementHolder.current.elements;
        
        for (let i  = 0; i < elem.length; i++)
        {
            var c = elem[i] as HTMLInputElement;

        }
        
        dispatch<MemberAction>( {
            type: "EDITED_VARIABLE", 
            id: appState.variableState.id,
            editingVariablePayload : {
                type : "var",
                id : appState.variableState.id,
                name : "Hello",
                value: "" }} )

        dispatch<ActionType>({type : "DONE"})
    }

    useEffect(() => {
        setVariableState(appState.variableState);
    }, [appState.variableState]);


    switch (appState.appState){
        case "EDITING_VARIABLE":
            return (
            <div className="editMemberContext">
                <form ref={elementHolder} noValidate={true}>
                    <div className="header">
                        <div className="userSelectNone">Editing Variable: {currentVariableState.name}</div>
                    </div>
                    <div className="container"> 
                        <div>
                            <div  className="displayFlex justifyContentSpaceBetween mb-4">
                                <span className="userSelectNone">Name</span>
                                <span>
                                    <input defaultValue={appState.variableState.name as string } ref={variableValueInputRef} type="text" placeholder={appState.variableState.value as string}/>
                                </span>

                                 <div className="positionRelative">
                                    <span  className={currentVariableState.type + " " + "pl-0 pr-2"}>{currentVariableState.type}</span>
                                    <svg className="cursorPointer" width="22" height="22" fill="none" stroke="rgb(108 106 106)" strokeWidth="3px" strokeLinecap="butt">
                                        <path d="m 1,12 5,5 5,-5"></path>
                                    </svg>

                                    <div className="positionAbsolute displayFlex directionColumn dropDown">
                                            <span onClick={() => { setVariableState({...currentVariableState, type: "var"})}} className="var positionRelative">var</span>
                                            <span onClick={() => { setVariableState({...currentVariableState, type: "const"})}}  className="const positionRelative">const</span>
                                            <span onClick={() => {setVariableState({...currentVariableState, type: "let"})}}   className="let positionRelative">let</span>
                                    </div>
                                </div>
                            </div>
                            <div  className="displayFlex justifyContentSpaceBetween mb-4">
                                <span className="userSelectNone">Value</span>
                                <span>
                                    <input defaultValue={appState.variableState.value ? appState.variableState.value as string : ""} ref={variableValueInputRef} type="text" placeholder={appState.variableState.value as string}/>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="displayFlex justifyContentCenter mt-4 mb-3">
                        <button onClick={onFinishEditingVariable}>Close</button>
                    </div>
                </form>
            </div>
            );

        default:
            return <></>
    }
}