# :star:research.yaml
このソースは特定のトピックに関する情報を取得し、言語を検出し、必要に応じて翻訳を行うエージェントワークフローを示しています。以下に各部分の説明を行います。

## 構造の概要

1. **topicノード**:
   - ユーザーに研究したいトピックの入力を求めるエージェント（`textInputAgent`）です。

2. **detectorノード**:
   - 入力されたトピックの言語を検出するためのネストされたエージェントです。
   - `openAIAgent`を使用して、入力されたトピックの言語を識別し、英語に翻訳します。
   - 翻訳結果は`translated`関数を通じて報告されます。

3. **wikipediaノード**:
   - 言語検出の結果に基づき、Wikipediaからトピックに関する情報を取得します。
   - `wikipediaAgent`を使用して、トピックに関連する内容を取得し、その後、要約するために再び`openAIAgent`を用います。

4. **translateノード**:
   - Wikipediaから取得した内容を翻訳するためのネストされたエージェントです。
   - 言語情報に基づき、英語である場合はそのまま内容を返し、他の言語の場合は翻訳を実行します。
   - 翻訳には再び`openAIAgent`が使用されます。

## フローの詳細

- ユーザーがトピックを入力すると、そのトピックが`topic`ノードで受け取られます。
- `detector`ノードは、そのトピックの言語を識別し、必要に応じて英語に翻訳します。
- 次に、`wikipedia`ノードがそのトピックに関する情報をWikipediaから取得し、要約します。
- 最後に、`translate`ノードが要約内容を翻訳し、結果を返します。

このフローは、ユーザーからの入力を基にして、言語の検出、情報の取得、要約、翻訳を行う一連のプロセスを非同期に実行します。各ノードは、前のノードからの出力を入力として使用し、全体のデータフローを形成しています。

