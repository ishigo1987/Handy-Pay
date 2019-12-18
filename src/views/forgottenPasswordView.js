module.exports = ()=>{
    const{contentView, TextView, ImageView, Composite, ScrollView, TextInput} = require("tabris");
    
    const themeColor = require('../helpers/themeColor.js')();
    
    const highlightOnTouchValue = require("../helpers/highlightOnTouchValue.js")();
    
    const widgetAnimation = require("../helpers/widgetTranslateAndOpacityAnimation.js");
    
    const snackbar = require('../widgets/snackbar.js');
    
    const areaComposite = new Composite({ layoutData: 'stretch', background: "#ffffff", opacity:0,transform:{translationX:100}, id: 'connectionView', class: 'activeView' }).appendTo(contentView);
    
    const scrollView = new ScrollView({layoutData:"stretch", background:"#ffffff"}).appendTo(areaComposite);
    
    new ImageView({ centerX: 0, top: 15, height: 200, width: 200, scaleMode: 'fit', image: "src/img/logo.jpg" }).appendTo(scrollView);
    
   new TextView({top:['prev()',20], left:15, right:15, textColor:'#757575', alignment:"centerX", text:"Vous ne vous souvenez plus de votre mot de passe ? Pas de problème, veuillez suivre la procédure ci-dessous.", font:"18px slabo",id:'introText'}).appendTo(scrollView);
    
   const compositePhoneNumber = new Composite({top:['prev()',30], left:15, right:15, height:50, cornerRadius:25, background:'#eeeeee'}).appendTo(scrollView);
  
  const login = new TextInput({centerY:0, left:0, right:0, style:'none', floatMessage:false, messageColor:"#757575", textColor:"#616161", cursorColor:themeColor, background:'transparent', keyboard:'phone', message:"Entrez votre numéro sans indicatif", font:"17px slabo"}).appendTo(compositePhoneNumber);
  
  const compositeForgottenPassword = new Composite({left:15, right:15, top:['prev()',20], height:50, cornerRadius:25, highlightOnTouch:highlightOnTouchValue, elevation:1, background:themeColor})
  .onTap(({target})=>{
     require("../modules/forgottenPassword.js")(`+${indicatif.text}`,phoneNumber.text).then((responseForgottenPassword)=>{
       if(responseForgottenPassword.Message === "Code envoyé avec succès"){
         require("../widgets/checkVerificationCode.js")({indicatif:`+${indicatif.text}`,phoneNumber:phoneNumber.text}).then((responseCheckVerificationCode)=>{
            if(responseCheckVerificationCode.Message === "Code verifié avec succès"){
              // On appele la vue de mise à jour du mot de passe et on supprime la vue d'oubli de mot de updatePasswordView
              require("./updatePasswordView.js")({indicatif:`+${indicatif.text}`,phoneNumber:phoneNumber.text});
              setTimeout(()=>{areaComposite.dispose();},750);
            }
         });
       }else{
         snackbar(contentView,responseForgottenPassword.Message);
       }
     });
  }).appendTo(scrollView);
  
 new TextView({centerX:0, centerY:0, textColor:"#eeeeee", font:"18px slabo", text:'CONTINUER'}).appendTo(compositeForgottenPassword);
 
 new TextView({top:['prev()',30], left:15, right:15, alignment:'centerX', textColor:"#757575", font:"17px slabo", text:'Retour vers me connecter'})
  .onTap(()=>{
    widgetAnimation(areaComposite,{translationX:60},0)
    .then((animation)=>{
      if(animation.Message === 'Animation terminée'){
        areaComposite.dispose();
      }
    });
  }).appendTo(scrollView);    
    
   setTimeout(()=>{
      widgetAnimation(areaComposite,{translationX:0},1);
   },150);
};