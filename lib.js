/**
 * Thermal Printer - NodeJS implementation
 * First skeleton
 *
 * @todo: everything
 */
(function(){
var SerialPort = require("serialport").SerialPort;
var Thermal_Driver = {
  cnf: {
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
  },
  init: function(config /* config */){
    var serialPort = new SerialPort("/dev/ttyAMA0", {
      baudrate: 19200
    });
  },

  write: function(a, b /*, **kwargs*/){
    var kwargs = arguments;
    for (var i = 0; i < kwargs.length; i++) {
      var c = kwargs[i];
      if(c != 0x13){
        // self.timeoutWait();
        // super(Thermal_Driver, self).write(c)
        var d = this.cnf.byteTime;
        if ((c == '\n') || (this.cnf.column == this.cnf.maxColumn)){
          // Newline or wrap
          if(this.cnf.prevByte == '\n'){
            d += ((this.cnf.charHeight +
                   this.cnf.lineSpacing) * 
                   this.cnf.dotFeedTime
            )
          }
          // text line
          else {
            d += ((this.cnf.charHeight *
            this.cnf.dotPrintTime) +
            (this.cnf.lineSpacing *
            this.cnf.dotFeedTime))
            this.cnf.column = 0
            // Treat wrap as newline
            // on next pass
            c = '\n'
          }
        }
        else {
          this.cnf.column += 1;
            // self.timeoutSet(d)
            this.cnf.prevByte = c
        }
      }
    };
  }
}
Thermal_Driver.init();
Thermal_Driver.write('test','somemore');
})();