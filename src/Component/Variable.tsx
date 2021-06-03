import { useMemo } from "react";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

interface IVaraibleProps
{
    type: "const" | "var" | "let";
    id? : string | number;
    value?: string;
    name : string;
}

export const Variable : React.FC<IVaraibleProps> = (props) =>
{

    const [id, setId ] = useState(props.id)

    const dispatch = useDispatch();
    
    const memberList = useRef(HTMLDivElement.prototype);
    let child : HTMLDivElement | null;

    useEffect(()=>
    {
       memberList.current.addEventListener("mousedown", (event) => {
        
        if (event.target != memberList.current) return;
        if (!child)
        {
      
            child = document.body.appendChild(memberList.current.cloneNode(true)) as HTMLDivElement;
            child.classList.add("drag")
            child.style.left = (event.pageX - 150).toString() + "px";
            child.style.top = (event.pageY - 21).toString() + "px";
        }
           document.addEventListener("mousemove", onElementDragged)
       });

       document.addEventListener("mouseup", (event) =>
       {
           if (child)
           {
                document.removeEventListener("mousemove", onElementDragged)
                document.body.removeChild(child as HTMLDivElement)
                child = null;
           }
            
        });
    }, []);


    const onElementDragged = (event  : MouseEvent) =>
    {
        if (!child)
        {
            child = document.body.appendChild(memberList.current.cloneNode(true)) as HTMLDivElement;
  
        }
        
        
        child.classList.add("drag");

        child.style.left = (event.pageX - 150).toString() + "px";
        child.style.top = (event.pageY - 21).toString() + "px";
    }

    return (        
            <div ref={memberList} className="memberList">
                <span className= {`${props.type}` + " " + "pointerEventNone"}>
                        {props.type}
                </span>
                <span className="cursorDefault userSelectNone">{props.name}</span>
                <div className="positionRelative">
                    <svg className="editIcon" onClick={() => dispatch({type: "EDITING_VARIABLE", payload: {appState: "EDITING_VARIABLE", variableState: {id: props.id, type: props.type, name: props.name, value: props.value} }})} xmlns="http://www.w3.org/2000/svg" width="11" height="55" version="1.1" viewBox="0 0 2.9104 14.552"><path d="m-0.018959 2.3041h2.9406v-1.8914c-0.92458-0.3586-1.9037-0.37233-2.936 5e-3zm0.04633 0.49936v9.1734l1.4504 2.5122 1.4045-2.4329v-9.2527zm0.44644 1.803h0.81096v5.8849h-0.81096z" fill="#999999"/></svg>  
                </div>   
            </div>
            )
}

