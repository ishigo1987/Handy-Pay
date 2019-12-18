module.exports = ()=>{
    const {app,contentView} = require("tabris");
    app.onBackNavigation((event)=>{
      event.preventDefault();
      const kindOfAnimation = {};
      const lastView = contentView.find('.activeView').last();
      if(['connectionView', 'forgottenPasswordView','inscriptionView'].includes(lastView.id) === true){
        kindOfAnimation.translationX = 60;
      }else if(['annonceView'].includes(lastView.id) === true){
        kindOfAnimation.translationY = 60;
      }else if(['mainView','homeView'].includes(lastView.id) === true){
        app.close();
      }else{
        console.log(lastView)
        return false;
        // Popup and Loader doesn't have rights to trigger an action with back navibation button
      }
      require('../helpers/widgetTranslateAndOpacityAnimation.js')(lastView,kindOfAnimation,0)
      .then((animation)=>{
          if(animation.Message === 'Animation terminée'){
            lastView.dispose();
          }
        });
    });
};
