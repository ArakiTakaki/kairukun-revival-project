# electron-three-boilerplate

## getting started

```sh
$ yarn install
$ yarn run start:server # サーバーの起動

$ open http://localhost:8181 # web上でのデバッグ
# OR
$ yarn run start:electron # electron上でのデバッグ
```

## Scripts

| script         | 効果                                                               |
|----------------|--------------------------------------------------------------------|
| start:server   | サーバーを[http://localhost:8181](http://localhost:8181)で公開する |
| start:electron | 上記のサーバーを利用し、Electron上に表示させる                     |
| build          | Windowsのexe Macのapp を公開する                                   |
