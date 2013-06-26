var test = require('tape');
var sendgridStream = require('../');

test('does my streams2 thing work', function (t) {
  t.plan(1);
  var stream = sendgridStream({
    auth: {
      user: 'acct',
      key: 'pass'
    },
    to: 'myEmail@address.com',
    from: 'surprise@address.com'
  });

  stream.on('error', console.error.bind(console));

  var data = {
    key: 'value',
    otherKey: 'otherValue'
  };

  stream.on('readable', function () {
    var thing = stream.read();
    t.equals(thing, data);
  });

  stream.write(data);
});

