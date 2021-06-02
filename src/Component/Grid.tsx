import { useState, useRef, useEffect } from "react";

interface GridProps
{
    onPanGrid(event : React.MouseEvent, setPanGrid: Function, canPanGrid: boolean, mouseMove : boolean) : void;
}



export const Grid : React.FC<GridProps> = (props) =>
{
    const [screenSize, setScreenSize] = useState({width: 0, height: 0,});
    const [canPanGrid, setCanPanGrid] = useState(false);
    const canvasElement = useRef(HTMLCanvasElement.prototype);
    const [mouseData, setMouseData] = useState()

    useEffect(()=>
    {
        const panel = document.getElementById("Panel");
                var [width, height] = [panel?.clientWidth, panel?.clientHeight] as [number, number]
                var canvas = canvasElement.current as HTMLCanvasElement;

                canvas.width = width;
                canvas.height = height;
                let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
                let boxWidth = 10;

                generateGrid(ctx, width, height, boxWidth);
    }, []);




    const gridStyle : React.CSSProperties =
    {
        position: "absolute",
        width: "100%",
        left:0,
        zIndex: 1,
        minWidth: "100vw",
        minHeight: "100vh",
        overflow: "unset",
        top: 0
    }

    

    const generateGrid = (ctx: CanvasRenderingContext2D, width : number, height : number, boxSize : number) =>
    {
        var data = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"> \
                     <defs> \
                        <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse"> \
                        <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgb(65, 65, 65)" stroke-width="2.5" /> \
                        </pattern> \
                        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"> \
                        <rect width="80" height="80" fill="url(#smallGrid)" /> \
                        <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgb(20, 20, 20)" stroke-width="3" /> \
                        </pattern> \
                    </defs> \
                    <rect width="100%" height="100%" fill="url(#grid)" /> \
                    </svg>';

        var DOMURL = window.URL || window.webkitURL || window;

        var img = new Image();
    
        var svg = new Blob([data], {type : "image/svg+xml;charset=utf8"})
        var url = DOMURL.createObjectURL(svg);

        img.onload = () =>
        {
            ctx?.drawImage(img, 0, 0);
            DOMURL.revokeObjectURL(url);
        }

         img.src = url;

    }

    interface mouseData
    {
        startPos : mousePosData;
        endPos: mousePosData;
    }

    interface mousePosData
    {
        x : number;
        y: number;
    }

    let mouse : mouseData;

    const onPanGrid = (event : React.MouseEvent<Element, MouseEvent>) =>
    {
        props.onPanGrid(event, setCanPanGrid, canPanGrid, false);
    }

    const onMouseUp = (event : React.MouseEvent<Element, MouseEvent>) =>
    {
        // setCanPanGrid(false);
        // console.log(canvasContext);
        // console.log(event.clientY);

        // const canvas = document.getElementById("GridCanvas") as HTMLCanvasElement;

        // canvas.style.top = event.clientY.toString() + "px";

   
       // context?.translate(100, 100);
    }

    const onMouseMove = (event : React.MouseEvent<Element, MouseEvent>) =>
    {
        if (!canPanGrid)
            return;
        props.onPanGrid(event, setCanPanGrid, canPanGrid, true);

    }

    return (
        <div onMouseDown={onPanGrid} onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
            <canvas ref={canvasElement} id="GridCanvas" style={gridStyle}> 
            </canvas>
        </div>
      
    )
}