/*
 *  Phantom.js does not support Function.prototype.bind (at least not before v.2.0
 *  That's just crazy. Everybody supports bind.
 *  Read about it here: https://groups.google.com/forum/#!msg/phantomjs/r0hPOmnCUpc/uxusqsl2LNoJ
 *  This polyfill is copied directly from MDN
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Compatibility
 */
if (!Function.prototype.bind) {
  /*jshint freeze: false */
  Function.prototype.bind = function (oThis) {
    var aArgs;
    var msg;
    var fToBind = this;
    var FuncNoOp = function () {};
    var fBound = function () {
      return fToBind.apply(this instanceof FuncNoOp && oThis ? this : oThis,
        aArgs.concat(Array.prototype.slice.call(arguments)));
    };

    if (typeof this !== 'function') {
      msg = 'Function.prototype.bind - what is trying to be bound is not callable';
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError(msg);
    }

    aArgs = Array.prototype.slice.call(arguments, 1);

    FuncNoOp.prototype = this.prototype;
    fBound.prototype = new FuncNoOp();

    return fBound;
  };
}
