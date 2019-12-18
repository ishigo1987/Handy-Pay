module.exports = ()=>{
    const{contentView, TextView, ImageView, Composite, ScrollView, navigationBar} = require("tabris");
    
    navigationBar.background = '#f5f5f5';
    
    const themeColor = require('../helpers/themeColor.js')();
    
    const highlightOnTouchValue = require("../helpers/highlightOnTouchValue.js")();
    
    const areaComposite = new Composite({ layoutData: 'stretch', background: "#ffffff", id: 'mainView', class: 'activeView' }).appendTo(contentView);
    
    const scrollView = new ScrollView({layoutData:"stretch", background:"#ffffff"}).appendTo(areaComposite);
    
    new ImageView({ centerX: 0, top: 15, height: 250, width: 250, scaleMode: 'fit', image: "src/img/logo.jpg" }).appendTo(scrollView);
    
    new TextView({top:["prev()",15], left:15, right:15, alignment:"centerX", textColor:"#424242", text:"Handy Pay est une application mobile qui vous permet d'effectuer des achats via Orange Money et Mtn Mobile Money juste en scannant un Qr code.", font:" 20px slabo"}).appendTo(scrollView);
    
    const button = new Composite({top:["prev()", 50], left:15, right:15, background:themeColor, cornerRadius:25, height:50, highlightOnTouch:highlightOnTouchValue})
    .onTap(()=>{
      require("./connectionView.js")();
    }).appendTo(scrollView);
    
    new TextView({centerX:0, centerY:0, textColor:"#ffffff", text:"CONTINUER", font:"18px slabo"}).appendTo(button);
};