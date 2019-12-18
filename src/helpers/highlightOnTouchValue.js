module.exports = ()=>{
 const {device} = require("tabris");
 if(device.version <= 21){
   return false;
 }else{
   return true;
 }
};
