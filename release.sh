#! /bin/bash

PACKAGE_VERSION=`node -p -e "require('./package.json').version"`

HAS_CHANGES=`git diff | wc -l`

if [ $HAS_CHANGES -ne 0 ]; then
  echo "Working directory not clean, please commit all pending files"
  exit 1
fi

if [[ -z $1 ]]; then
  echo "Enter new version (currently $PACKAGE_VERSION): "
  read VERSION
else
  VERSION=$1
fi

if [ $VERSION = $PACKAGE_VERSION ]; then 
  echo "No version change, exiting"
  exit 1
fi

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r

echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo
  echo "* * * * * * * Releasing $VERSION * * * * * * *"
  echo

  # update package.json version to be used in the build
  npm version $VERSION --no-git-tag-version

  # build
  npm run build

  # generate the git tag
  git tag v$VERSION

  # commit
  git add -A
  git commit -m "[build] $VERSION"

  # publish
  git push origin refs/tags/v$VERSION
  git push
  npm publish
fi
