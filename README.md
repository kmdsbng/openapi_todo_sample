
## generate Kotlin (serverside) code
```
sh bin/generate_kotlin_code.sh
```

## generate TypeScript (frontend) code
```
sh bin/generate_ts_code.sh
```

## start mock server
```
sh bin/start_prism_mock_server.sh
```

## start api test
```
sh bin/start_dredd_api_test.sh
```


TODO:
* プロジェクト名など、プロジェクトごとの設定を書く場所を決める (DRYになるようにしたい)
* プロジェクトの開始方法を書く
* frontendから接続するサーバーを切り替えられるように(prism, dev server, production)
* ビルドする仕組み (docker, fat jarなどいずれか)
* AWSなどにデプロイする仕組み
* o generation gap pattern を TS の生成コードで行うように
* o generated ディレクトリ以下を使わないようにディレクトリ構成を変更
* o dredd の接続先のポートを、prism用、kotlinサーバー用に変えれるように


### openapi-generator-cli generat kotlin-server の設定一覧を表示
docker run --rm openapitools/openapi-generator-cli config-help -g kotlin-server

