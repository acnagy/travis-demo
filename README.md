# travis-intro-node

This is an example application written in Node.js for
introducing users to basic features of Travis CI.

> This is a second portion of the guided tour of Travis CI.
> If you haven't done so, please start with the
> [initial stage](../../tree/01.intro).

## Initial look at the configuration

Having enabled Travis CI, it is time to run our first build.

Let us take a look at our initial configuration:

```sh-session
$ cat .travis.yml
```

This file is very short:

```yaml
language: node_js
```

This tells Travis CI that we have a Node.js repository on our hands,
and tells Travis CI to deal with it accordingly.
In more concrete terms, it will make assumptions about which version
of Node.js runtime to use, what commands to run, and so on.

> See the [Node.js reference page](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)
> for more information.

## Triggering the initial build

It is time to trigger our first build.

To trigger our first build, we need to push a new commit.

```sh-session
$ git commit --allow-empty -m "Empty commit to trigger the first Travis CI build"
$ git push origin
```

Visit Travis CI page https://travis-ci.com/OWNER/travis-intro-node/builds
to see the progress.

## Observe the build result

Unfortunately, the initial build will fail, because our code does not
satisfy the assumptions that Travis CI makes about Node.js repositories.

## Next step

In [the next step](../../tree/04.customization), we will fix the build.
