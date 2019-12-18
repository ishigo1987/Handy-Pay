module.exports = (permissionName) => {
    return new Promise((resolve) => {
        const { permission } = require('tabris');
        function requestPermission() {
            if (permission.isAuthorized(permissionName)) {
                resolve({ Message: "Permission acceptée" });
            } else {
                permission.requestAuthorization(permissionName).then((responseStatus) => {
                    if (responseStatus !== "granted") {
                        requestPermission();
                    } else {
                        resolve({ Message: "Permission acceptée" });
                    }
                });
            }
        }
        requestPermission();
    });
};
