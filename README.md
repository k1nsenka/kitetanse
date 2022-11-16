# https://k1nsenka.github.io/kitetanse  
ポートフォリオ兼趣味ブログ（の予定）

## ディレクトリ構成
```
|- components/  :各ページの静的部分のsrcの配置場所
    |- blog/  :記事をタグごとに取得しページとして表示するsrcの配置場所
|- posts/  :Markdownで記述された記事の配置場所  
|- public/  :webサイトfaviconや記事で私用する画像の配置場所
|- styles/  :cssスタイルを記述したsrcの配置場所
|- utils/  :ページで使用するfuncのsrc配置場所
| package.json  
| README.md  
```

## 開発方法
- branchを切って作業を始める
```bash
$ git checkout -b <branch name>
```

- 動作確認  
ビルドエラーが出たら適宜修正  
localhost@webbrowserにてwebサイトを確認
```bash
$ cd kitetanse
$ npm run dev
```
- デプロイ  
githubのmainブランチにpushすることでvercel側が自動的にデプロイしてくれる  
→mainブランチで作業しない

## 開発log  
### 20210829@master
webサイトプロジェクト立ち上げ
### 20210903@master  
大体のディレクトリ構造を決定
### 20210921@master
postsの中身をコンテンツごとにディレクトリを作ることによってtag管理による記事取得ではない方法をとる。  
つまりposts/の中にgadget/, develop/などの記事管理ディレクトリを作って記事管理をしていた。ディレクトリごとに[slag].jsが必要だった。
### 20211026@tag
postsをタグ管理するためのfuncの開発開始（結局）
理想→postsに全ての記事を打ち込み、記事markdownファイル内のメタデータtagによって記事の種類を管理する。
とりあえずdevelopを使って実験しつつfuncの開発  
### 20211027@tag  
ディレクトリ構造を丸々変える  
参考:https://hyper-text.org/archives/2021/01/renewed_my_blog_with_nextjs.shtml  
やめて、普通にディレクトリごとに記事管理をすることにする。

### 20221116@master
github actionsによるデプロイを設定中，色々パッケージの依存関係を更新していたら  
legacyBehaviorエラーに遭遇，とりあえず動かない。
