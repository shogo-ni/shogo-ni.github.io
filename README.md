=============================
Sleek Blog
=============================

[Live Website](http://gearoidoconnor.ie)

A blog project including full setup for Jekyll, GulpJS, SASS, AutoPrefixer &amp; BrowserSync

## System Preparation

To use this project, you'll need the following things installed on your machine.

1. [Jekyll](http://jekyllrb.com/) - `$ gem install jekyll`
2. [NodeJS](http://nodejs.org) - use the installer.
3. [GulpJS](https://github.com/gulpjs/gulp) - `$ npm install -g gulp` (mac users may need sudo)

   ```$ npm install -g gulp
       > fsevents@1.2.13 install /Users/shogo/.nvm/versions/node/v14.15.4/lib/node_modules/gulp/node_modules/fsevents
       > node install.js

       SOLINK_MODULE(target) Release/.node
       CXX(target) Release/obj.target/fse/fsevents.o
       SOLINK_MODULE(target) Release/fse.node

       > es5-ext@0.10.62 postinstall /Users/shogo/.nvm/versions/node/v14.15.4/lib/node_modules/gulp/node_modules/es5-ext
       >  node -e "try{require('./_postinstall')}catch(e){}" || exit 0

       + gulp@4.0.2
       added 332 packages from 225 contributors in 28.464s
   ```

### 〔note... macOS installation〕

- essential library 'node-gyp' has a dependency below
  - python (v2.7 recommended, v3.x.x is not supported)

1. <strong>update ruby</strong>

- `brew update`
- `brew install rbenv ruby-build`
- `benv install -l`
- `rbenv install 3.1.4`
- `rbenv global 3.1.4`

2. <strong>install node</strong>

- `brew install nvm`
- `mkdir ~/.nvm`
- `edit ~/.zshrc`

  ```~/.zshrc
  ### rbenv
  [[ -d ~/.rbenv  ]] && \
  export PATH=${HOME}/.rbenv/bin:${PATH} && \
  eval "$(rbenv init -)"

  ### nvm
  export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/usr/local/opt/nvm/etc/bash_completio$
  ```

- `source ~/.zshrc`
- `nvm --version`
- `nvm ls-remote`
- `nvm i v14.15.4`
- `node -v`
- `nvm alias default v14.15.4`

<strong>3. install python2 and set npm config</strong>

- install python2.17x and make path

  ```~/.zshrc
  ### python2
  export PATH="/Library/Frameworks/Python.framework/Versions/2.7/bin:${PATH}"
  alias python2='/Library/Frameworks/Python.framework/Versions/2.7/bin/python2'
  ```

- `npm config set python /Library/Frameworks/Python.framework/Versions/2.7/bin/python2`

- `npm config list`

## Local Installation

1. Clone this repo, or download it into a directory of your choice.
2. Inside the directory, run `npm install`.

## Usage

**development mode**

This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting etc etc.

```shell
$ gulp watch
```
