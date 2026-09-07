
Blog 環境構築
=============================

## Ruby を入れる

1. https://www.ruby-lang.org/ja/

2. 安定版: Ruby 4.0.6 の RubyInstaller を落としてみる
    - with Devkit の x64版
    - Ruby+Devkit 4.0.6-1 (x64) 

3. 入った
    - ```$ ruby -v```

      > ruby 4.0.6 (2026-07-14 revision 03b6d3f889) +PRISM [x64-mingw-ucrt]

    - 動作確認済みバージョン：
      - 3.1.4

## jekyll を入れる

1. http://jekyllrb.com/

2. ```$ gem install jekyll bundle```
    - 5分ぐらいかかる

3. 入った
    - ```$ jekyll new my-awesome-site```
    - ```$ cd my-awesome-site```
    - ```$ bundle exec jekyll serve```
    - Welcome to Jekyll!

4. ruby で入れたパッケージ一覧の表示
    - ```$ ruby -S gem list --local```
      > jekyll (4.4.1) <br>
      > jekyll-feed (0.17.0) <br>
      > jekyll-sass-converter (3.1.0) <br>
      > jekyll-seo-tag (2.9.0) <br>
      > jekyll-watch (2.2.1) <br>
      > minima (2.5.2) <br>
      > wdm (0.2.0) <br>
      > tzinfo (2.0.6)


## NodeJS と GulpJS を入れる

1. <strong>まずは nvm を入れる</strong>
    - https://github.com/nvm-windows/nvm#installation--upgrades
    - Releases から nvm-setup.exe を落とす
    - ```$ nvm -v```
    
      > 1.2.2

    - ❕ 1.2.2 の問題として、古いNode.js（ver.14.21.3）をインストールするとエラーが発生してインストールが失敗することがある。
    - https://qiita.com/ntrlmt/items/12d764d01c9e079708e5
    - まずはアンインストール
    - ```$ winget uninstall nvm-windows```
    - Releases から以下のバージョンを入れ直す

       > 1.1.12

2. <strong>NodeJS 14.15.4 を入れる</strong>
    - ```$ nvm install 14.15.4```
    - ```$ nvm use 14.15.4```

      > Now using node v14.15.4 (64-bit)

    - ```$node -v```
  
        > v14.15.4

3. <strong>GulpJS を入れる</strong>
    - `$ npm install -g gulp`

      > C:\Program Files\nodejs\gulp -> C:\Program Files\nodejs\node_modules\gulp\bin\gulp.js
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules\gulp\node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

      > [+] gulp@5.0.1

      > added 143 packages from 120 contributors in 13.373s

    - 動作確認済みバージョン：
      - gulp@4.0.2


## 残りの諸々を入れる

1. <strong>Python2 を入れる</strong>

    - バージョン2.7xが必要
      - 以下から python-2.7.17.amd64.msi を取得
      - https://www.python.org/downloads/release/python-2717/
    - python2 として PATH も通しとく
    - npm上で設定

        `$ npm config set python C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Python 2.7`
      
    - 意味があるかは不明

2. node-sass を入れる
    - ` $ npm install -g node-sass`
    - ` $ npm install node-sass@latest`
    - いずれも失敗
      - C:\Users\nishi\AppData\Roaming\npm-cache\_logs\2026-09-01T07_26_35_639Z-debug.log

3. gulp-sass を入れる
    - ` $ npm install gulp-sass --save-dev`


## ブログをビルドして更新＆動作チェック

  - `$ jekyll serve`

    > [DEPRECATED] Platform :mingw, :x64_mingw, :mswin will be removed in the future. Please use platform :windows instead.

    - ❕ 失敗する場合は Gemfile の内容を見直す

    - see: http://localhost:4000/

    - その他の jekyllコマンド　`https://jekyllrb-ja.github.io/docs/usage/`
