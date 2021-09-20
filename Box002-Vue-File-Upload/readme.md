# Vue File Upload

Vueでfile用のinputフォームを用意し

Axiosでバックエンド側に画像データをぶん投げる

## メモ

```javascript

// これでmultipart/form-data形式でPOST出来る
const post_params = new FormData()
post_params("file",file) // 任意のファイル
// 任意のURLに送信
await axios("url",post_params)
```

 - FormDataでmultipart/form-data形式
