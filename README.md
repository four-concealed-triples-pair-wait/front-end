## 動作確認
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
app
├── _common[+]             // アプリケーション全体で使用する関数群
│   └── constants.ts     // アプリケーション全体で使用する定数
├── _components[+]         // アプリケーション全体で使用するコンポーネント群(atoms, moleculesくらいの粒度)
│   ├── Button[+]        // ボタンコンポーネント(Atomicレベル)
│   │   ├── index.tsx           // コンポーネントをexportする
│   │   ├── Button.tsx          // コンポーネント
│   │   └── Button.stories.tsx  // コンポーネント単位のstorybook
│   └── Card[+]        // カードコンポーネント(Moleculesレベル)
│       ├── index.tsx           // コンポーネントをexportする
│       ├── Card.tsx          // コンポーネント
│       ├── Card.stories.tsx  // コンポーネント単位のstorybook
│       └── types.tsx  // コンポーネント単位の型情報
├── _features[+]           // アプリケーションの機能単位でディレクトリを作成し、その中にページレベルのコンポーネントを配置する
│   └── Member[+]        // ページ機能コンポーネント群
│       ├── CardList[+]      // 非同期カードリストコンポーネント(fetchを行う)
│       ├── index.tsx           // ページ側で使用するコンポーネントをexportする
│       ├── Member.tsx          // ページ機能コンポーネント
│       ├── Member.stories.tsx  // ページ単位のstorybook インテグレーションテストも行う
│       └── UIMember.tsx        // ページのUIを司るコンポーネント
├── _hooks[+]              // アプリケーション全体で使用するカスタムフック群
├── _lib[+]                // アプリケーション全体で使用するライブラリ群(主にAPIとの通信用関数が配置)
├── @modal[+]              // Intercepting Router(ページを差し替える/上書くページ)を配置するディレクトリ(モーダルの表示など)
├── api[+]                 // API RouteにてNext.jsの中間APIを実装
└── (sidebarLayout)[+]              // サイドバーのレイアウトが適用されるディレクトリ
    ├── Member[+]                 // ページコンポーネント
    │   ├── page.tsx            // ページ機能をimportしページを描画する
    │   └── layout.tsx          // ページ単位でのレイアウトコンポーネント
    └── layout.tsx                // サイドバーのレイアウトコンポーネント
middleware.ts                // アプリケーションの認証処理を実装
```