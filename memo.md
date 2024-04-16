# メモ

0416 制作開始

## 実装でつまったところ

new Date().getTime() = Date.now()

Date.now()を String()して getSeconds()する

script defer
DOM 操作時の JS ファイルの読み込みタイミング

css animation

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
