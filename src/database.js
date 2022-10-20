//importamos connect del modulo mongoose
import {connect}from "mongoose";
(async()=>{
try{
//realizamos la conexion con la base de datos
const db= await connect("mongodb://localhost/27017")
console.log('DB connected to', db.connection.name)
}
catch(error){
console.error(error);
//

}
})();
