module.exports = (widgetToAnim,animationTransform,animationOpacity,animationDuration = 150)=>{
   return new Promise((resolve)=>{
     widgetToAnim.animate({
        transform:animationTransform,
        opacity:animationOpacity
     },{delay:0,duration:animationDuration,repeat:0,reverse:false,easing:"linear"
     }).then(()=>{
       resolve({Message:"Animation terminée"});
     });
   });
};
