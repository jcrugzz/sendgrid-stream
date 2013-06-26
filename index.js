
var util = require('util');
var TransformStream = require('stream').Transform;
var sendgrid = require('sendgrid-web');

var SendgridStream = function (options) {
  TransformStream.call(this, { objectMode: true, decodeStrings: false });

  this.email = new sendgrid(options.auth);
  this.to = options.to;
  this.from = options.from || 'sendgrid@stream.com';
  this.subject = options.subject || 'notify';

};

util.inherits(SendgridStream, TransformStream);

SendgridStream.prototype._write = function(chunk, encoding, done) {
  var self = this;
  //
  // Expects an object
  //
  var text = JSON.stringify(chunk, null, 2);

  this.email.send({
    to: this.to,
    from: this.from,
    subject: this.subject,
    text: text
  }, function (err) {
    if (err) { return self.emit(err) }
  });

  done();
};

SendgridStream.prototype._read = function (size) {};

module.exports = function(options) {
  return new SendgridStream(options);
}
