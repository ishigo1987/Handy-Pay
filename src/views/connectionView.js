module.exports = ()=>{
    const{contentView, TextView, ImageView, Composite, ScrollView, TextInput} = require("tabris");
    
    const themeColor = require('../helpers/themeColor.js')();
    
    const highlightOnTouchValue = require("../helpers/highlightOnTouchValue.js")();
    
    const widgetAnimation = require("../helpers/widgetTranslateAndOpacityAnimation.js");
    
    const snackbar = require('../widgets/snackbar.js');
    
    const areaComposite = new Composite({ layoutData: 'stretch', background: "#ffffff", opacity:0,transform:{translationX:100}, id: 'connectionView', class: 'activeView' }).appendTo(contentView);
    
    const scrollView = new ScrollView({layoutData:"stretch", background:"#ffffff"}).appendTo(areaComposite);
    
    new ImageView({ centerX: 0, top: 15, height: 200, width: 200, scaleMode: 'fit', image: "src/img/logo.jpg" }).appendTo(scrollView);
    
    const compositeLogin = new Composite({top:["prev()",30], left:15, right:15, height:50,  background:"#eeeeee", cornerRadius:25}).appendTo(scrollView);
    
    const login = new TextInput({centerY:0, left:0, right:0, style:'none', floatMessage:false, messageColor:"#757575", textColor:"#616161", cursorColor:themeColor, background:'transparent', keyboard:'phone', message:"Entrez votre numéro sans indicatif", font:"17px slabo"}).appendTo(compositeLogin);
    
    const compositePassword = new Composite({top:['prev()',10],left:15,right:15,height:50,cornerRadius:25,background:'#eeeeee'}).appendTo(scrollView);
  
    const password = new TextInput({centerY:0, left:0, right:30, style:'none', floatMessage:false, maxChars:40, messageColor:"#757575", textColor:"#616161", cursorColor:themeColor, background:'transparent', type:'password', message:'Entrez votre mot de passe', font:"17px slabo", revealPassword:false}).appendTo(compositePassword);
    
     const showHidePassword = new ImageView({centerY:0, right:15, width:24, height:24, tintColor:'#757575', image:'src/icons/password-hide.png', id:'hide-password'})
     .onTap(({target})=>{
        // J'utilise juste l'id comme ca pour savoir quand il faut afficher le mot de passe ou passe
        if(target.id === "hide-password"){
          password.revealPassword = true;
          target.id = "show-password";
          target.image = "src/icons/password.png";
        }else{
          password.revealPassword = false;
          target.id = "hide-password";
          target.image = "src/icons/password-hide.png";
        }
  }).appendTo(compositePassword);
    
  const buttonConnection = new Composite({left:15, right:15, top:['prev()',20], height:50, cornerRadius:25, highlightOnTouch:highlightOnTouchValue, elevation:1, background:themeColor})
  .onTap(({target})=>{
      require("./homeView.js")();
//    require("../modules/connexion.js")({indicatif:`+${indicatif.text}`,phoneNumber:phoneNumber.text,password:password.text})
//    .then((responseConnection)=>{
//      if(responseConnection.Message === "Connexion effectuée"){
////        localStorage.setItem("weBuyWeSellUserInfos",JSON.stringify({id:responseConnection.Data.id,name:responseConnection.Data.name,surname:responseConnection.Data.surname,countryCode:responseConnection.Data.countryCode,phoneCode:responseConnection.Data.phoneCode,phone:responseConnection.Data.phone,status:responseConnection.Data.status, myInterests:responseConnection.Data.myInterests}));
////        require("./myInterestsView.js")();
////        areaComposite.dispose();
//      }else{
//        snackbar(contentView,responseConnection.Message);
//      }
//    });
  }).appendTo(scrollView);
  
  new TextView({centerX:0, centerY:0, textColor:"#ffffff", font:"18px slabo", text:"SE CONNECTER"}).appendTo(buttonConnection);
  
  new TextView({top:['prev()',20], left:15, right:15, alignment:'centerX', textColor:"#757575", font:"17px slabo", text:'Mot de passe oublié'})
  .onTap(()=>{
    require("./forgottenPasswordView.js")();
  }).appendTo(scrollView);
  
  
  new TextView({top:["prev()",20], left:15, right:15, alignment:'centerX', textColor:'#757575', font:"17px slabo", text:'Pas encore de compte ?'}).appendTo(scrollView);
  
  new TextView({top:['prev()',20], left:15, right:15, alignment:'centerX', markupEnabled:true, textColor:themeColor, font:"17px slabo", text:`<strong>Inscrivez vous</strong>`})
  .onTap(()=>{
    require("./inscriptionView.js")();
  }).appendTo(scrollView);
    
  setTimeout(()=>{
      widgetAnimation(areaComposite,{translationX:0},1);
  },150);
};