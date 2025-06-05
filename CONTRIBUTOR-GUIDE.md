# 貢献者ガイド

## 🖋️ コンテンツライター向け

### Webサイトの文章を編集したい場合

1. **HTMLファイルの編集**
```bash
# index.htmlを開いて直接編集
# テキストエディタでも編集可能
```

2. **主要な編集箇所**
- `index.html` の各セクション内のテキスト
- お客様の声（testimonials）
- 講師プロフィール（about section）
- サービス説明文

3. **編集後の反映**
```bash
git add index.html
git commit -m "コンテンツ更新: [変更内容の説明]"
git push
```

## 👨‍💻 開発者向け

### プロジェクトに参加する場合

1. **リポジトリをクローン**
```bash
git clone https://github.com/kazuhiko-ono/my-website.git
cd my-website
```

2. **開発環境セットアップ**
```bash
# ローカルサーバー起動
python -m http.server 8000
# または
php -S localhost:8000
```

3. **開発フロー**
```bash
# 新機能用ブランチ作成
git checkout -b feature/new-feature

# 開発・テスト
# ファイル編集...

# コミット
git add .
git commit -m "新機能: [機能説明]"

# プッシュ
git push origin feature/new-feature

# プルリクエスト作成（GitHub上で）
```

## 🤝 共同開発者向け

### GitHubでの協力方法

1. **コラボレーター招待を受ける**
- リポジトリオーナーから招待メールが届く
- 招待を承諾

2. **権限に応じた作業**
```bash
# 直接push権限がある場合
git clone https://github.com/kazuhiko-ono/my-website.git
# 編集・コミット・プッシュ

# Fork & Pull Request の場合
# 1. GitHubでFork
# 2. 自分のリポジトリをクローン
# 3. 編集・コミット・プッシュ
# 4. Pull Request作成
```

## 📋 ファイル別編集ガイド

### HTML編集 (`index.html`)
```html
<!-- ヒーローセクションのタイトル変更 -->
<h2 class="hero-title">新しいタイトル</h2>

<!-- サービス説明の変更 -->
<p>新しいサービス説明文...</p>

<!-- お客様の声の追加 -->
<div class="testimonial-item">
    <div class="testimonial-content">
        <p>"新しいお客様の声..."</p>
    </div>
    <!-- ... -->
</div>
```

### CSS編集 (`css/style.css`)
```css
/* 色の変更 */
:root {
    --main-color: #新しい色;
}

/* フォントの変更 */
body {
    font-family: '新しいフォント', sans-serif;
}
```

### JavaScript編集 (`js/script.js`)
```javascript
// 新機能の追加
function newFeature() {
    // 新しい機能のコード
}
```

### PHP編集 (`contact-handler.php`)
```php
<?php
// メール設定の変更
$admin_email = 'new-email@example.com';
?>
```

## 🔧 推奨ツール

### テキストエディタ
- **VS Code** (推奨)
- **Sublime Text**
- **Atom**

### 拡張機能 (VS Code)
- **Live Server**: リアルタイムプレビュー
- **Prettier**: コード整形
- **GitLens**: Git履歴表示

## 📝 コミットメッセージの書き方

### 良い例
```bash
git commit -m "機能追加: FAQセクションにアコーディオン機能を追加"
git commit -m "修正: レスポンシブデザインの不具合修正"
git commit -m "コンテンツ更新: 講師プロフィールを最新情報に更新"
git commit -m "スタイル改善: ボタンのホバーエフェクト調整"
```

### 避けるべき例
```bash
git commit -m "update"
git commit -m "fix"
git commit -m "change"
```

## 🚨 注意事項

1. **本番環境への影響**
   - 変更は即座にWebサイトに反映される場合があります
   - 重要な変更は事前にテストしてください

2. **ファイル形式**
   - HTMLはUTF-8で保存
   - 改行コードはLF推奨

3. **画像ファイル**
   - 適切なサイズに最適化
   - alt属性を必ず設定

4. **セキュリティ**
   - 個人情報や機密情報をコミットしない
   - APIキーなどは環境変数で管理

## 📞 サポート

困った時は以下で相談：
- GitHub Issues でエラー報告
- Pull Request でコードレビュー依頼
- README.md の連絡先へメール