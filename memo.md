# メモ

0416 制作開始

# 実装でつまったところ

## Date オブジェクト

- new Date().getTime() = Date.now()

- Date.now()は new Date()でオブジェクトに変換しないと getSeconds()が使えない

## css animation

1. transition

```
a {
  transition: opacity 0.25s, color 0.25s;
}

a:hover {
  opacity: 0.5;
  color: red;
}
```

2. @keyframes

- animation property
  - animation-fill-mode
    - none: デフォルト値 元に戻る
    - forwards: 100%の状態にする
    - backwards: 0%の状態にする

## script defer

DOM 操作時の JS ファイルの読み込みタイミング

## スコープ

スコープ内で宣言したものはローカル定数/変数として扱われる

```
let x = 10;
{
  x = 20;
  console.log(x); // 20
}
console.log(x); // 20
```

```
let x = 10;
{
  let x = 20;
  console.log(x); // 20
}
console.log(x); // 10
```

## 関数の巻き上げ

- 関数宣言で定義した関数は、ソースコードの先頭で実行される
- 関数式で定義した関数は、そのような処理は行われない

## なぜ関数式を使うか？

- 関数を引数として使用する際に、関数に命名しなくても良い

```
// アロー関数式
console.log(calc(3, (num) => {
  return num * 2;
}));

// 関数宣言
console.log(calc(3, function double(num) {
  return num * 3;
}));
```
