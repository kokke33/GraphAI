# ■GraphAIとは
https://github.com/receptron/graphai/tree/main

> GraphAIは、非同期データフロー実行エンジンで、開発者がYAMLやJSONで宣言的にデータフローグラフを記述することで、エージェントワークフローを構築できるツールです。複数のLLM（大規模言語モデル）呼び出しや非同期API呼び出しを管理し、より高品質な出力を段階的に生成するアプリケーションの開発を可能にします。<br><br>
GraphAIは、複雑な非同期処理や依存関係管理、並行実行、エラー処理などを自動的に処理します。開発者は、データの流れやエージェント間の依存関係をグラフ形式で記述するだけで、複雑な非同期プログラミングの課題を解決できます。<br><br>
このツールは、LLM呼び出し、データベースアクセス、Web検索など、さまざまな非同期操作を統合し、効率的なワークフローを作成するのに適しています。また、ネストされたグラフ、ループ、マッピング、条件付きフローなど、高度な制御機能も提供しています。

<br>
<br>

# ■Replitの導入
GraphAIを動かすにはNode.jsが動く環境が必要です。WindowsでもLinuxでも構築できます。<br>
しかし環境の問題や各種設定など面倒なので、今回はReplitを使ってアプリケーションの開発を行います。

Replitは、インターネット上で使えるプログラム作成ツールです。<br>
特別なソフトをインストールしなくても、ブラウザさえあればすぐにプログラミングを始められます。<br>

:heart_eyes:Replitは「手軽にプログラミングを試せる便利な道具」です!

| 主なポイント         | 説明                                                                 |
|----------------------|----------------------------------------------------------------------|
| 簡単に始められる     | サインアップしてオンラインでプログラミングを始めるだけです。           |
| いろんな言語が使える | PythonやJavaScriptなど、人気のある言語がたくさん使えます。            |
| どこでも作業可能     | インターネットがあれば、どのパソコンからでもアクセスできます。         |
| 友達と一緒に作業     | 他の人と同時にコードを書いたり、相談しながら進められます。             |



## 無料アカウントを作成
https://replit.com/login

## プロジェクトの作成
Create a Repl から `TypeScript` を選択。<br>

<br>

# ■GraphAIのインストールと実行

## 1. GraphAIのインストール
右下ウィンドウのTools＞Shell（Ctrl+@） を起動して<br>
以下のコマンドを実行するだけ
```
npm i -g  @receptron/graphai_cli
```

## 2. LLMのAPIキーを取得する
各LLM（OpenAIとかGroqとか）のAPIキーを設定する。<br>
OpenAIとGroqの２つのAPIがあればよい。<br>
取得方法はGoogleで「OpenAI API取得方法」などで検索。<br>

　＜参考＞<br>
　　https://www.scuti.jp/blog/try-llama3-in-groqs-ultra-fast-environment#:~:text=GroqのAPI%20Key取得,キーを発行できます。


## 3. `.env`ファイルの設定

### :heavy_check_mark:`.env`ファイルをプロジェクト直下に作成。ファイルの中身は以下の通り。
 ![alt text](pictures/replit_env1.jpg)
 
 ```
const myOpenAI = process.env['OPENAI_API_KEY']
const myGroq = process.env['GROQ_API_KEY']
const myGoogle = process.env['GOOGLE_GENAI_API_KEY']

OPENAI_API_KEY=myOpenAI
GROQ_API_KEY=myGroq
GOOGLE_GENAI_API_KEY=myGoogle
 ```
### :heavy_check_mark:LLMのAPIキーは「Secrets」 に登録する

Replitは無料利用の場合、作成したソースは公開されてしまう（Private設定できない）。<br>
そのためAPIキーはSecretsに登録する必要がある。<br>

:+1:ウィンドウ右下の Tools＞Secrets<br>
![alt text](pictures/replit_Secrets1.jpg)

## 4. 実行方法
interview_SE.yaml を実行する場合は以下のコマンド実施。<br>
ソース修正後、都度以下コマンドを実行すれば動作する（コンパイルなどは不要）

```
graphai do/interview_SE.yaml
```

## 5. ログ
以下のコマンドでログの出力が可能。<br>
:warning:大量のログが出ます。
```
graphai do/interview_SE.yaml -log log/interview_SE.log
```