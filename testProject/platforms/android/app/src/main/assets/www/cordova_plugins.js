cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-battery-status.battery",
      "file": "plugins/cordova-plugin-battery-status/www/battery.js",
      "pluginId": "cordova-plugin-battery-status",
      "clobbers": [
        "navigator.battery"
      ]
    },
    {
      "id": "cordova-plugin-device-orientation.CompassError",
      "file": "plugins/cordova-plugin-device-orientation/www/CompassError.js",
      "pluginId": "cordova-plugin-device-orientation",
      "clobbers": [
        "CompassError"
      ]
    },
    {
      "id": "cordova-plugin-device-orientation.CompassHeading",
      "file": "plugins/cordova-plugin-device-orientation/www/CompassHeading.js",
      "pluginId": "cordova-plugin-device-orientation",
      "clobbers": [
        "CompassHeading"
      ]
    },
    {
      "id": "cordova-plugin-device-orientation.compass",
      "file": "plugins/cordova-plugin-device-orientation/www/compass.js",
      "pluginId": "cordova-plugin-device-orientation",
      "clobbers": [
        "navigator.compass"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-battery-status": "2.0.3",
    "cordova-plugin-device-orientation": "2.0.1"
  };
});