import {useState} from 'react';
import {Panel} from "./Panel"
import { SideMenu } from './Component/SideMenu';
import { EditingMemberContext } from './Component/EditingMember';
import { useSelector } from 'react-redux';

const App  = ()=> {
    const [editingMember, setMemberProps]  = useState({});
    const appState = useSelector((state : any) => state.appState.appState);

    return(
    <>
        <SideMenu  addNewButtonClicked={(event) => event.preventDefault( )}/>
        <div className="positionRelative">
            <Panel/>
           <EditingMemberContext/>
        </div>
    </>
  );

}

export default App;
