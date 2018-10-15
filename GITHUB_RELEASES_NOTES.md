## What happens after the build?

Testing does not happen in a vacuum.
Once you've written good tests and are assured of your software's
quality, the software needs to go out in the world and be put to good
use.

Travis CI allows you to automate this process for you, using a number of different ways to deploy the code.

## GitHub Releases

[GitHub Releases](https://help.github.com/articles/about-releases/) is a way
to associate build artifacts to a tag on your git repository.

For example, if you have a library, and have a release, you might want to attach
a source tarball for the release.
You will accomplish this by tagging an appropriate commit, creating a tarball,
and creating a GitHub release with the tarball in it.

You can do this on the [web UI](https://help.github.com/articles/creating-releases/),
or via [API](https://developer.github.com/v3/repos/releases/#create-a-release).

Travis CI automates the API call with the use of [`dpl`](https://github.com/travis-ci/dpl).
You will interact with `dpl` by giving its configuration in the `deploy` key in
`.travis.yml`.

### Create a GitHub token with `public_repo` scope

Before setting up Travis CI for GitHub Releases, we need a special-purpose GitHub
token that can create a release.

Go to the [tokens](https://github.com/settings/tokens) page, and generate a new
token with `public_repo` scope.

Copy this to your clipboard.

### Handling GitHub authentication

In order to create a release, you need to provide Travis CI with a GitHub
token which has appropriate scope.
Since our repository is public, committing the token in plain text is undesirable.
To handle such sensitive information, Travis CI allows users to store repository-specific
secrets.

To set secure environment variables, go to your repository's Settings page.

We will create an environment variable which will not be displayed in our logs
(so that bystanders cannot see it):

1. Name this `GITHUB_OAUTH_TOKEN`
1. Paste the token into the Value field
1. Leave the "Display value in build log" in the "OFF" position.
1. Click on the "Add" button

Now, your build can use the `GITHUB_OAUTH_TOKEN` in the build.
