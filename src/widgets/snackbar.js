module.exports = (widgetToAttach,firstTextSnackbar,delayOfHidingSnackbar = 3000,secondTextSnackbar) =>{
   // Single line height = 48dp = 36px but i choose 40px
   //Multi lines height = 80dp = 60px
   return new Promise((resolve)=>{
      const {Composite,TextView} = require('tabris');
      const themeColor = require('../helpers/themeColor.js')();
      const highlightOnTouchValue = require("../helpers/highlightOnTouchValue.js")();
      const snackbar = new Composite({ bottom:0,left:0,right:0,padding:15,background:"#323232",transform:{translationY:250}}).appendTo(widgetToAttach);
      const firstMessage = new TextView({left:0,right:0,font:"normal 13px montserrat",centerY:0,text:firstTextSnackbar,textColor:"#fff"}).appendTo(snackbar);
      if(secondTextSnackbar !== undefined){
        firstMessage.right = 120;
        new TextView({right:0,highlightOnTouch:highlightOnTouchValue,centerY:0,text:secondTextSnackbar.toUpperCase(),textColor:themeColor,font:"bold 13px montserrat"})
        .onTap(() =>{
            closeSnackbar();
            resolve({Message:"Action Snackbar Clicked"});
        }).appendTo(snackbar);
      }

      function openSnackbar(){
          snackbar.animate({
              transform:{translationY:0}
            }, {
              delay:0,
              duration:300,
              repeat:0,
              reverse:false,
              easing: "ease-out"
            }
          ).then(()=>{
            if(delayOfHidingSnackbar !== "infinite"){
              // i replace delay by setTimeout for some design purposes
              setTimeout(()=>{closeSnackbar();},delayOfHidingSnackbar);
            }
          });
        }
      function closeSnackbar(){
          snackbar.animate({
              transform:{translationY:250}
            }, {
              delay:0,
              duration:250,
              repeat:0,
              reverse:false,
              easing: "ease-out"
            } ).then(()=>{snackbar.dispose();});
        }
      openSnackbar();
   });
};
