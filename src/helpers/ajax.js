module.exports = (data,url='http://192.168.8.101:1337') =>{
  return new Promise((resolve)=>{
     const xhr = new XMLHttpRequest();
     xhr.addEventListener("load", () =>{
      resolve(JSON.parse(xhr.responseText));
     });
     xhr.addEventListener("error", () =>{
       resolve({Message:"Pas de connexion internet, veuillez réessayer."});
     });
     xhr.responseType = "text";
     xhr.open('POST',url, true);
     xhr.send(data);
  });
 };
