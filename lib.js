/**
 * Thermal Printer - NodeJS implementation
 * First skeleton
 *
 * @todo: everything
 */
(function(){
var SerialPort = require("serialport").SerialPort;
var Thermal_Driver = {
  init: function(config){
    if(!config){
      config = {
        resumeTime      :  0.0,
        byteTime        :  0.0,
        dotPrintTime    :  0.033,
        dotFeedTime     :  0.0025,
        prevByte        : '\n',
        column          :  0,
        maxColumn       :  32,
        charHeight      :  24,
        lineSpacing     :  8,
        barcodeHeight   :  50,
        printMode       :  0,
        defaultHeatTime :  120,
      }
    }
    var serialPort = new SerialPort("/dev/ttyAMA0", {
      baudrate: 19200
    });
  }
}
Thermal_Driver.init();
})();