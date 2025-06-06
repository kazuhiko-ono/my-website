# 学習支援パートナー Webサイト

## プロジェクト概要

学習支援会社の1ページWebサイトです。セミナーと個人相談サービスを提供する企業向けに、Apple風の洗練されたデザインと温かみのある要素を組み合わせたサイトを構築しました。

## 技術仕様

- **HTML5**: セマンティックなマークアップ
- **CSS3**: レスポンシブデザイン、フレックスボックス、グリッド
- **JavaScript (ES6+)**: インタラクティブ機能、フォーム処理
- **PHP**: フォームハンドリング、メール送信
- **画像**: Unsplash API使用、SVGアイコン

## 主な機能

### 1. レスポンシブデザイン
- PC、タブレット、スマートフォン対応
- ブレークポイント: 768px, 480px
- モバイルファーストアプローチ

### 2. インタラクティブ機能
- スムーススクロールナビゲーション
- ハンバーガーメニュー（モバイル）
- FAQアコーディオン
- スクロール連動アニメーション

### 3. フォーム機能
- セミナー申し込みフォーム
- 個人相談予約フォーム
- 一般お問い合わせフォーム
- リアルタイムバリデーション
- PHP による自動返信メール

### 4. パフォーマンス最適化
- 画像遅延読み込み
- CSSアニメーション
- 軽量なJavaScript

## ファイル構成

```
web2/
├── index.html              # メインHTMLファイル
├── css/
│   └── style.css          # メインCSSファイル
├── js/
│   └── script.js          # JavaScriptファイル
├── images/                # 画像ファイル
│   ├── hero-learning.jpg  # ヒーロー画像
│   ├── instructor.jpg     # 講師プロフィール画像
│   ├── customer1.jpg      # お客様の声画像1
│   ├── customer2.jpg      # お客様の声画像2
│   ├── customer3.jpg      # お客様の声画像3
│   ├── seminar-icon.svg   # セミナーアイコン
│   ├── consultation-icon.svg # 相談アイコン
│   ├── practical-icon.svg # 実践アイコン
│   ├── support-icon.svg   # サポートアイコン
│   └── growth-icon.svg    # 成長アイコン
├── contact-handler.php    # フォーム処理PHP
├── README.md             # このファイル
├── CLAUDE.md            # Claude Code用ガイド
└── web1page.md          # 元の仕様書
```

## セットアップ方法

### 1. ローカル環境
```bash
# プロジェクトディレクトリに移動
cd web2

# ローカルサーバーを起動（Python 3の場合）
python -m http.server 8000

# ブラウザでアクセス
# http://localhost:8000
```

### 2. PHPサーバー環境
```bash
# PHPビルトインサーバーを起動
php -S localhost:8000

# または Apache/Nginx + PHP環境にファイルを配置
```

### 3. メール設定
`contact-handler.php` で以下を設定してください：
- `$admin_email`: 管理者メールアドレス
- `$headers`: 送信者情報
- メールサーバー設定（必要に応じて）

## カスタマイズ方法

### 1. 色の変更
`css/style.css` の変数を編集：
```css
/* メインカラー */
#2563EB → 任意の色

/* アクセントカラー */
#60A5FA, #86EFAC, #F9A8D4 → 任意の色
```

### 2. コンテンツの変更
`index.html` で以下を編集：
- 会社名、サービス内容
- お客様の声、講師プロフィール
- 連絡先情報

### 3. 画像の変更
- `images/` フォルダ内の画像を置き換え
- HTMLの `src` 属性を更新

### 4. フォーム項目の追加
1. `index.html` でフォームフィールドを追加
2. `contact-handler.php` でバリデーション追加
3. `js/script.js` でクライアント側処理追加

## パフォーマンス目標

- **PageSpeed Insights**: 85点以上
- **First Contentful Paint**: 2秒以内
- **Largest Contentful Paint**: 4秒以内
- **Cumulative Layout Shift**: 0.1以下

## ブラウザ対応

- Chrome (最新版 + 過去2バージョン)
- Safari (最新版 + 過去2バージョン)
- Firefox (最新版 + 過去2バージョン)
- Edge (最新版 + 過去2バージョン)

## アクセシビリティ

- WCAG 2.1 AA準拠
- キーボードナビゲーション対応
- スクリーンリーダー対応
- 適切なコントラスト比

## セキュリティ

- XSS対策済み
- CSRF対策済み
- SQLインジェクション対策済み
- 入力値サニタイズ

## 今後の拡張可能性

1. **CMS化**: WordPressテーマ化
2. **多言語対応**: 英語版追加
3. **予約システム**: カレンダー連携
4. **決済機能**: オンライン決済追加
5. **会員機能**: ログイン・マイページ
6. **ブログ機能**: コンテンツマーケティング

## トラブルシューティング

### メールが送信されない
1. PHPのmail()関数設定確認
2. sendmail/SMTPサーバー設定確認
3. エラーログ確認: `error_log()`

### 画像が表示されない
1. ファイルパス確認
2. 画像ファイル権限確認
3. Unsplash画像URL確認

### JavaScriptエラー
1. ブラウザ開発者ツールでコンソール確認
2. ファイルパス確認
3. 構文エラー確認

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 制作者

Claude Code + Human Developer

## 更新履歴

- 2024-06-05: 初期版リリース
  - 1ページWebサイト完成
  - レスポンシブデザイン実装
  - フォーム機能実装
  - PHPメール処理実装