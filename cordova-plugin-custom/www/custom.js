var exec = require('cordova/exec');

exports.enableUSBDebugging = function(success, error) {
    exec(success, error, "Custom", "enableUSBDebugging", []);
};

exports.disableUSBDebugging = function(success, error) {
    exec(success, error, "Custom", "disableUSBDebugging", []);
};

exports.getDebuggingStatus = function(success, error) {
    exec(success, error, "Custom", "getDebuggingStatus", []);
};