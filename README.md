# travis-intro-node

This is an example application written in Node.js for
introducing users to basic features of Travis CI.

> This is a second portion of the guided tour of Travis CI.
> If you haven't done so, please start with the
> [initial stage](../../tree/01.intro).

## What went wrong?

Our initial build failed, because the default configuration for
Node.js did not work well.

In particular, the default build step (`npm test`) does not work, due
to the wrong configuration in `package.json`.

## Fixing the build

We *could* fix the `script` step in `.travis.yml`, or modify
`package.json` so that the default build script is invoked.

Either is a valid option, but, here, we choose the latter.
This allows us to align our application to be consistent with the
most popular practice for the Node.js development community.

In `package.json`, find the `scripts.test` key.
It reads:

```javascript
  "scripts": {
    "test": "false"
  },
```

This means that `npm test` executes the `false` command, which
always exits with status code 1.

It turns out, our test code with written with `mocha`, so we rewrite
this to:

```javascript
  "scripts": {
    "test": "mocha" # <== new
  },
```

(You might notice that the command `mocha` by itself may fail,
but this is OK. `npm` will take care of it; run `npm test` to confirm.)

Commit this change, and push to GitHub.

```sh-session
$ git add package.json
$ git commit -m "Run `mocha` in `script`"
$ git push origin
```

## Celebrate the passing build

The build passes now. Yes! 🎉

## Next step

In [the next step](../../tree/05.deployment), we learn about deploying our code.
