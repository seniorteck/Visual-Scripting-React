import {makeStyles} from "@material-ui/core/styles";
import { ModeComment } from "@material-ui/icons";

export default makeStyles(() =>({
   appBar:{
       borderRadius: 15,
       margin: "30px 0",
       display: "flex",
       flexDirection: "row",
       justifyContent: "center",
       alignItems: "center"

   } ,
   heading: {
       color: "rgba(0, 183, 255, 1)"
   },

   image:{
       marginLeft: "15px"
   }
}))


var a = class{
       public  myFunc()
    {

    }
}

console.log()

var b = () => {}

b.call(a.prototype.myFunc());
