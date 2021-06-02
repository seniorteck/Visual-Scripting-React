import { useRef } from "react";
import {useDispatch, useSelector} from "react-redux"
import {AppState} from "../types"



export const EditingMemberContext : React.FC= (props)  =>
{
    const member = useSelector(state => state)
    const appState : AppState = useSelector((state : any) => state.appState);

    const variableValueInputRef = useRef(HTMLInputElement.prototype)
    const dispatch = useDispatch();

    const onFinishEditingVariable  = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    {
        dispatch( {type: "EDITED_VARIABLE", id: appState.variableState.id} )
    }

    switch (appState.appState){
        case "EDITING_VARIABLE":
            return (
                <div className="editMemberContext">
                <div className="header">
                    <div className="userSelectNone">Editing Variable: {appState.variableState.name}</div>
                </div>
                <div className="container"> 
                    <div>
                        <div className="displayFlex justifyContentSpaceBetween mb-4">
                            <span className="userSelectNone">Type</span>
                            <div>
                                  <span className={appState.variableState.type + " " + "pl-0 pr-2"}>{appState.variableState.type}</span>
                                  <svg className="cursorPointer" width="22" height="22" fill="none" stroke="rgb(108 106 106)" strokeWidth="3px" strokeLinecap="butt">
                                     <path d="m 1,12 5,5 5,-5"></path>
                                    </svg>
                            </div>
                          
                        </div>
                        <div  className="displayFlex justifyContentSpaceBetween mb-4">
                            <span className="userSelectNone">Value</span>
                            <span>
                                <input ref={variableValueInputRef} type="text" placeholder={appState.variableState.value}/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="displayFlex justifyContentCenter mt-4 mb-3">
                    <button onClick={onFinishEditingVariable}>Close</button>
                </div>
            </div>
            );

        default:
            return <></>
    }
}