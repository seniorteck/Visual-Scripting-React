import { IconDir, PlusIcon } from "./SVG/Icons";
import react, {useState} from "react"


interface ISideMenuMember 
{
    memberName: string;
    onClick?(event : React.MouseEvent) : void;
}


export const SideMenuMember : React.FC<ISideMenuMember> = (props) =>
{
    const [members, setMembers] = useState(["Hello World"]);
    const [childrenVisible, setChildrenVisible] = useState(false);

    const onDisplayChildren = () =>
    {
        setChildrenVisible(visible => !visible);
    }

    const onAdd = (event : React.MouseEvent) =>
    {
         setChildrenVisible(true);
         var fn = props.onClick as ((event: React.MouseEvent) => void);
         fn(event);
    }

    return (
            <div>
                <div className="positionRelative memberContainer displayFlex">
                    <IconDir onClick={onDisplayChildren} childrenVisible={childrenVisible} className="iconArrow" fill="rgb(191, 191, 191);" />
                    <span className="memberText">
                        {props.memberName}
                    </span>
                    <PlusIcon onClick={onAdd} className="plusIcon"/>
                </div>
                <div className="childList" style={{display: childrenVisible ? "block" : "none"}}>
                    {
                        props.children
                    }
                </div>
                
            </div>
            )
} 

