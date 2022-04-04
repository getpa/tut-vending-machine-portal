# tut-vending-machine-portal
https://getpa.github.io/tut-vending-machine-portal/

とある大学の自動販売機に関する情報をシェアするためのポータル．
需要があるかどうかは知りません．

# Thanks
- [React](https://ja.reactjs.org)
- [React Leaflet](https://react-leaflet.js.org)
- [pointhi/leaflet-color-markers](https://github.com/pointhi/leaflet-color-markers)
- [utterances](https://utteranc.es)
- GitHub Pages

# 技術的な解説（概略）
今後の機能拡充（するかどうかわからないけど）のためにReactを採用．
[jsonファイル](src/data/vmlist.json)に自販機の情報を書いてある．
コーディングしたのは[App.js](src/App.js)だけ．

[OSM](https://www.openstreetmap.org/)を使ってGISみたいなことをするためにLeafletを利用．
ReactでLeafletを使うために[React Leaflet](https://react-leaflet.js.org)を採用．
ただし，Safariでポップアップが出ないバグがある（#3）．

GitHub Pagesでホストしているため，コメントのハンドリングには[utterances](https://utteranc.es)を使用．
このリポジトリのissuesで管理されています．