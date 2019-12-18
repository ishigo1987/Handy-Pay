module.exports = ()=>{
    mayflower.moveTaskToBack()
          .then(function () {
            console.log('success');
          })
          .otherwise(function (e) {
            console.log('failed: ' + e);
          });
};