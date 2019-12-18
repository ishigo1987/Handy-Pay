// A retirer
module.exports = (themeString, themeBgHex,dpMode = "default") =>{
  const {statusBar,contentView} = require('tabris');
  // Cette fonction initialise l'ui de l'application pour une vue
  statusBar.set({
     theme:themeString,
     background:themeBgHex,
     displayMode:dpMode
   });
 };
