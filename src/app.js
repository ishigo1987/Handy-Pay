const { app } = require('tabris');
// We manage the Android back button
require("./modules/backButtonNavigation.js")();
// Lock the screen Orientation
//require('./helpers/plugins/screenOrientationLock.js')();
require('./helpers/tabrisUi.js')('light', '#f5f5f5');

// We set the font app
app.idleTimeoutEnabled = false;
app.registerFont('slabo', 'src/fonts/Slabo27px-Regular.ttf');

const handyUserInfos = JSON.parse(localStorage.getItem("handyUserInfos"));

if(handyUserInfos === null){
   require('./views/mainView.js')();
}else{
   // home.js
   require("helpers/homeView.js")();
}