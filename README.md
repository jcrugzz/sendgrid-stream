# sendgrid-stream

A simple [`Transform`][transform] stream that sends the data it recieves
in an email using [`sendgrid-web`][sendgrid]. It is recommended that you have a
filtering stream of sorts before piping to this :).

## install

```sh
npm install sendgrid-stream
```

## Example

```js
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
```

## test

```sh
npm test
```

## license
MIT

[transform]: http://nodejs.org/api/stream.html#stream_class_stream_transform
[sendgrid]: https://github.com/jesusabdullah/node-sendgrid-web
