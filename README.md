# sendgrid-stream

A simple [`Transform`][transform] stream that sends the data it recieves
in an email using [`sendgrid-web`][sendgrid]. It is recommended that you have a
filtering stream of sorts before piping to this :).

## install

```sh
npm install sendgrid-stream
```

## test

```sh
npm test
```

[transform]: http://nodejs.org/api/stream.html#stream_class_stream_transform
[sendgrid]: https://github.com/jesusabdullah/node-sendgrid-web
