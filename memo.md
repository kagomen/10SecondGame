- 0416 制作開始

- Date オブジェクト

  - `new Date().getTime()` は `Date.now()` に等しい
  - `Date.now()`は `new Date()`でオブジェクトに変換しないと、`getSeconds()`が使えない

- css animation

  1. transition

     ```css
     a {
       transition: opacity 0.25s, color 0.25s;
     }

     a:hover {
       opacity: 0.5;
       color: red;
     }
     ```

  1. @keyframes
     - animation property
       - animation-fill-mode
         - none: デフォルト値 元に戻る
         - forwards: 100%の状態にする
         - backwards: 0%の状態にする

- defer

  - JS ファイルの読み込みタイミングを HTML 読み込み後に行う
    - DOM 操作時は必須

- スコープ

  - スコープ内で宣言したものはローカル定数/変数として扱われる

    ```js
    let x = 10;
    {
      x = 20;
      console.log(x); // 20
    }
    console.log(x); // 20
    ```

    ```js
    let x = 10;
    {
      let x = 20;
      console.log(x); // 20
    }
    console.log(x); // 10
    ```

- 関数の巻き上げ

  - 関数宣言で定義した関数は、ソースコードの先頭で実行される
  - 関数式で定義した関数は、そのような処理は行われない

- 関数式の使いどころ

  - 関数を引数として使用する際に、関数に命名しなくても良い

    ```js
    // アロー関数式
    console.log(
      calc(3, (num) => {
        return num * 2;
      })
    );

    // 関数宣言
    console.log(
      calc(3, function double(num) {
        return num * 3;
      })
    );
    ```

- サイドエフェクト（副作用）インポート

  ```js
  import "<path>";
  ```

- オールインポート

  ```js
  import * as <name> from "<path>";

  // 多分<val>はexportしておく必要がある
  let X = <name>.<val>;
  ```

- Babel

  - JS トランスパイラー

- Webpack
  - JS バンドラー

=> Babel でトランスパイルしたソースコードを、Webpack がバンドルする

- JS ファイルでの相対パスの扱い方
  - js ファイルで相対パスを使用する際は、その js ファイルを読み込む html ファイルから見たパスを記載しないといけない。
  - 参照: #19
