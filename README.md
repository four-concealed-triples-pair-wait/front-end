## 事前準備
nodeのversionを18以上にする。<br>
プロジェクトルートディレクトリで以下のコマンド
```bash
$ npm install
```
開発サーバの立ち上げ
```bash
$ npm run dev
```
## ディレクトリ構成

```bash
src/
├─ components/
│  ├─ elements/
│  │  └─ Button
│  │     ├─ Button.stories.tsx
│  │     └─ Button.tsx
│  └─ layouts/
│     └─ Header
│        └─ Header.tsx
├─ pages/
├─ features/
│  └─ /awesome-feature
│     ├─ api/
│　　　　　└─ getSomethingInfo.ts
│     ├─ const/
│     ├─ components/
│        └─  Course.tsx
│     ├─ hooks/
│        └─ useCourse.ts
│     └─ types/
│        └─ index.ts
├─ config/
├─ const/
├─ hooks/
├─ libs/
└─ types/
```

### components
アプリケーション全体で使用するコンポーネントを配置する。

#### components/element
アプリケーション全体で使用する共通コンポーネントを配置する。

#### components/layouts
アプリケーション全体で使うレイアウトコンポーネントを配置する。
例えば、HeaderやFooterなど。

### pages
Nextのページコンポーネントを配置する。

### features
ある特定の機能でしか使わないapiへのアクセサや定数、型、hooks、コンポーネントなど全てを詰め込む。

### config
アプリケーション全体の設定を置く。Tailwindのthemeの設定など。

### const
アプリケーション全体の定数を配置する。

### libs
ライブラリのラッパーや設定済みのインスタンスをexportするファイルなどを置く。axios関係など。

### types
アプリ全体で使用する型を配置する。