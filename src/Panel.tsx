import React, { useState,} from "react"
import { Grid } from "./Component/Grid";


export const Panel : React.FC =  (props)=> {

    const [nodes, setNodeState] = useState();

    const mouseDown : React.MouseEventHandler<HTMLDivElement> = (event: React.MouseEvent<Element, MouseEvent>) =>
    {
        event.preventDefault();

    }

    const onPanGrid  = (event: React.MouseEvent<Element, MouseEvent>, setPanGrid : Function, canPanGrid : boolean, mouseMove : boolean) =>
    {
        event.preventDefault(); 
        if (event.button == 1)
        {
            setPanGrid(true);
        }


        if (mouseMove)
        {   
            if (!canPanGrid)
                return;
        }
        
    }

    const addNewButtonClicked = (event : any) =>
    {
        event.preventDefault();
        console.log("clicked")
    }

    return(
    <div id="Panel" className="Panel" onContextMenu={mouseDown}>
        <Grid onPanGrid={onPanGrid}/>
    </div>
    );
}


