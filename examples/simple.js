var sendgridStream = require('../');

//
// Instantiates the stream with `sendgrid-web` info
//
var stream = sendgridStream({
  auth: {
    user: 'username',
    key: 'password'
  },
  to: 'devops@domain.com',
  from: 'service@domain.com',
  subject: 'Error'
});

//
// Log any errors to the console
//
stream.on('error', console.error.bind(console));

var data = {
  key: 'value',
  otherKey: 'otherValue'
};

//
// Same data is passed through to the otherside of the stream
//
stream.on('readable', function () {
  var thing = stream.read();
  console.log(thing);
});

//
// This will trigger an email to be sent with the `data` object
//
stream.write(data);

