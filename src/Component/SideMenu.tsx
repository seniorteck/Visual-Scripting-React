import React, { useEffect, useState } from  "react"
import { useSelector, useDispatch } from "react-redux"
import { SideMenuMember } from "./SideMenuMember"
import { Variable } from "./Variable"
import {ReduxStoreState} from "../types"

interface SideMenuProps
{
    addNewButtonClicked(event : any) : void;
}

export const SideMenu : React.FC<SideMenuProps> = (props) =>
{

    const [members, setMembers]     = useState([<></>]);
    const [variableCount, setVariableCount]  = useState(0);


    const childMembers = useSelector((state: ReduxStoreState) => state.memberState);
    const dispatch = useDispatch();



    const onAddNewVariable = (event : React.MouseEvent) =>
    {
        console.log(variableCount);
        dispatch({type : "ADD_VARIABLE", payload : {memberVariable: {id: variableCount, name: "newVar_" + variableCount.toString(), type : "var"}}});
        setVariableCount(prevCount => prevCount + 1);
    }

    return (
        <div className="SideMenu">
            <div>
                <form role="search" className="positionRelative displayFlex">
                    <svg className="searchIcon" width="21" height="24" version="1.1" viewBox="0 0 5.5562 6.35"><path d="m1.8226 0.034966a1.8243 1.8243 0 0 0-1.017 0.34433 1.8243 1.8243 0 0 0-0.41128 2.5474 1.8243 1.8243 0 0 0 2.5463 0.41128 1.8243 1.8243 0 0 0 0.41234-2.5463 1.8243 1.8243 0 0 0-1.5303-0.75667zm0.072266 0.19767a1.6225 1.6225 0 0 1 1.3029 0.67271 1.6225 1.6225 0 0 1-0.36664 2.2647 1.6225 1.6225 0 0 1-2.2658-0.36558 1.6225 1.6225 0 0 1 0.36664-2.2658 1.6225 1.6225 0 0 1 0.96284-0.30607zm1.0468 3.1687 0.35817-0.26564 0.9897 1.3811-0.35817 0.26564zm0.48547 1.0321 0.68612-0.50335 1.363 1.9134-0.68612 0.50335z" fill="#000000" opacity=".997"/></svg>
                    <input className="searchInput" placeholder="Search" type="search" maxLength={20} autoCapitalize="off" autoComplete="off" autoCorrect="off" spellCheck={false} role="search"/>
                    <button className="Button sideMenuButton" onClick={props.addNewButtonClicked}> <span style={{cursor: "pointer", userSelect: "none"}}>Add New</span>  </button>
                </form>

                <SideMenuMember  memberName="Imports:"/>
                <SideMenuMember children={childMembers.memberVariables.map(el => <Variable id={el.id} key={el.id} type={el.type} name={el.name}/>)} onClick={onAddNewVariable} memberName="Variables:"/>
                <SideMenuMember memberName="Functions:"/>
            </div>
            
        </div>
    )
}






// var some =   <div className={"editMemberTypeContext " + contextHidden}>

//                             <span onClick={() => setType("const")} className="block const">const</span>
//                             <span onClick={() => setType("var")} className="block var">var</span>
//                             <span onClick={() => setType("let")} className="block let">let</span>
//                     </div>