import React, { useRef } from "react"
import { useEffect } from "react";
import {CancelIcon, CircleIcon} from "../SVG/Icons"

interface GetVariableProps
{
    name: string;
}

interface mousePos 
{
    x: number;
    y: number;
}

export const GetVariable : React.FC<GetVariableProps> = (props : GetVariableProps) => {

    const node = useRef(HTMLDivElement.prototype);
    const nodePort  = useRef(HTMLSpanElement.prototype)
    
    let mouse : mousePos = {x: 0, y: 0};
    let mouseRel: mousePos = {x: 0, y: 0};
    let pathEndPos: mousePos = {x: 0, y: 0}
    let isNodeConnected = false;


    useEffect(()=>
    {
        node.current.addEventListener("mousedown", dragStart)
        nodePort.current.addEventListener("mousedown", tryToConnectNode)


        document.addEventListener("mouseup", () => {
            node.current.style.cursor = "default"
            document.removeEventListener("mousemove", mouseDrag)
            document.removeEventListener("mousemove", tryingToConnectNode);
        });
    })


    const tryToConnectNode = (event : MouseEvent) =>
    {   
         if (event.target !== nodePort.current.firstChild?.firstChild)
            return;

        mouse = {x: event.pageX, y: event.pageY};
        document.addEventListener("mousemove", tryingToConnectNode);
       
    }

    const tryingToConnectNode = (event : MouseEvent) =>
    {
        //console.log(event.target)

         var pos = 
        {
          x: node.current.offsetLeft + nodePort.current.offsetLeft,
          y: node.current.offsetTop + nodePort.current.offsetTop,

        };

        var offset = 
        {
            x: event.pageX - pos.x,
            y: event.pageY - pos.y
        }

  

        pathEndPos =
        {
            x: event.pageX,
            y: event.pageY
        }

        isNodeConnected = true;
        computePathElement(pathEndPos);
    }

    const computePathElement = (endPos : mousePos) =>
    {
        var el =  nodePort.current.firstChild?.firstChild as Element;
        
        var p = 
        {
            x: el.getBoundingClientRect().x,
            y: el.getBoundingClientRect().y + 3
        }

        var svgCurve =  `<svg style="position: absolute; top:-${Math.abs(node.current.offsetTop)}; left:-${node.current.offsetLeft}; overflow: visible">` + computePath(p, endPos, 3.5 ) + `</svg>`
        nodePort.current.setAttribute("fill", "black");

        var d = document.createElement("div");
        d.innerHTML = svgCurve
        if (nodePort.current.childElementCount > 1)

        {
            nodePort.current.lastChild?.remove()
                    nodePort.current.appendChild(d);
            return;
        }

        nodePort.current.appendChild(d);
    }


    const dragStart = (event : MouseEvent) =>
    {
        if (event.button)
            return;

        mouseRel.x = event.pageX - node.current.offsetLeft;
        mouseRel.y  = event.pageY - node.current.offsetTop;
        
        if (event.target !== event.currentTarget)
            return;

        document.addEventListener("mousemove", mouseDrag);
    }

    const mouseDrag = (event : MouseEvent) =>
    {
        node.current.style.cursor = "grabbing"
        node.current.style.left = (event.pageX - mouseRel.x) - ((event.pageX - mouseRel.x) % 10) + "px"
        node.current.style.top = (event.pageY -  mouseRel.y) - ((event.pageY -  mouseRel.y) % 10) + "px"

        if (isNodeConnected)
            computePathElement(pathEndPos);
    }

    const connectNode = (event : MouseEvent) =>
    {

    }

    return (
        <>
            <div ref={node} className="Node" >
                <div className="pb-2 pointerEventNone" >
                    <span className="nodeName pr-5 cursorDefault userSelectNone pointerEventNone">
                        {"Get " + props.name}
                    </span>
                    <span>
                        <CancelIcon className="cancelIcon" strokeFill="white" />
                    </span>
                </div>
                <div className="displayFlex justifyContentEnd pointerEventNone">
                    <span className="nodeVal pr-5 cursorDefault userSelectNone pointerEventNone">value</span>
                    <span ref={nodePort} className="pointerEventNone">
                        <CircleIcon className="pointerEventAll"  fill="white"/>
                    </span>
                </div>
            </div>
        </>
    )

}


const SetVariable : React.FC = () =>
{
    return (
        <></>
    )
}

/** 
*  computes the bezier curve of a node
* @returns the "d" attribute of the computed path
* @param startPos start pos of the path in relative coordinate
* @param endPos endPos of the path in absolute coordinate
* @param curveAmount amount of curve multiplier higher means less curve
*/
function computePath (startPos : mousePos, endPos : mousePos, curveAmount: number = 1) : string
{
    let path = `<path d="m ${startPos.x} ${startPos.y}, 12 0 c ${Math.abs(startPos.x - endPos.x) / curveAmount } 0, ${(endPos.x - startPos.x) - Math.abs(endPos.x - startPos.x) / curveAmount} ${endPos.y - startPos.y}, ${endPos.x - startPos.x} ${endPos.y - startPos.y} h 12" stroke="white" fill="transparent" stroke-width="5" />`
    
    return path;
}

function computePathAbs (startPos : mousePos, endPos : mousePos, curveAmount: number = 1) : string
{
    let path = `<path d="m ${startPos.x} ${startPos.y}, 12 0  c ${Math.abs(startPos.x - endPos.x) / curveAmount } 0, ${(endPos.x - startPos.x) - Math.abs(endPos.x - startPos.x) / curveAmount} ${endPos.y - startPos.y}, ${endPos.x - startPos.x} ${endPos.y - startPos.y} h 12" stroke="white" fill="transparent" stroke-width="5" />`
    
    return path;
}
 