# travis-intro-node

This is an example application written in Node.js for
introducing users to basic features of Travis CI.

## Fork, and look around

First, [fork this repository](https://github.com/travis-ci/travis-intro-node/fork).

Clone to your local development machine, and have a look around.

```sh-session
$ git clone https://github.com/OWNER/travis-intro-node.git
$ cd travis-intro-node
```

To start the server, run

```sh-session
$ node -e 'app = require("./lib/app"); app.start()'
```

If you visit [http://localhost:8000](http://localhost:8000), you should see
a bare minimum web page.

You can confirm that the following runs our basic test, and passes:

```sh-session
$ npm install
$ ./node_modules/mocha/bin/mocha
```

## Next step

Time to head on over to [the next step](../../tree/02.signup).
