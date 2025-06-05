# 素材統合ガイド

## manaolapule.co.jpの素材統合手順

### 1. 素材の配置
```bash
# 新しいディレクトリを作成
mkdir shared-assets
mkdir shared-assets/illustrations
mkdir shared-assets/icons
mkdir shared-assets/photos
```

### 2. HTMLの更新
```html
<!-- ヒーローセクションの画像更新 -->
<div class="hero-visual">
    <img src="shared-assets/illustrations/hero-learning.svg" alt="学習支援のイメージ">
</div>

<!-- アイコンの更新 -->
<div class="service-icon">
    <img src="shared-assets/icons/seminar-warm.svg" alt="セミナーアイコン">
</div>
```

### 3. CSSの更新
```css
/* 温かみのある背景パターン追加 */
.hero {
    background-image: url('../shared-assets/patterns/warm-pattern.svg');
    background-size: cover;
}

/* 手描き風ボーダー */
.service-card {
    border: 3px solid transparent;
    background: linear-gradient(white, white) padding-box,
                url('../shared-assets/borders/hand-drawn.svg') border-box;
}
```

### 4. カラーパレットの調整
```css
/* manaolapuleのカラーパレット適用 */
:root {
    --warm-primary: #[manaolapuleのメインカラー];
    --warm-accent: #[アクセントカラー];
    --warm-bg: #[背景色];
}
```

### 5. フォントの統合
```css
/* manaolapuleで使用しているフォント */
@import url('path/to/manaolapule-font.css');

body {
    font-family: '[manaolapuleフォント]', 'Noto Sans JP', sans-serif;
}
```

## 推奨素材リスト

### 🎨 イラスト
- [ ] ヒーロー用学習イラスト
- [ ] 講師プロフィール用イラスト
- [ ] サービス説明用イラスト
- [ ] 成長・発展のイラスト

### 🎯 アイコン
- [ ] セミナーアイコン（温かみのあるスタイル）
- [ ] 個人相談アイコン
- [ ] 実践的学びアイコン
- [ ] サポートアイコン
- [ ] 成長アイコン

### 🖼️ 装飾要素
- [ ] 手描き風ボーダー
- [ ] 背景パターン
- [ ] 装飾的な線・図形
- [ ] ボタンの装飾

### 📝 ブランド要素
- [ ] ロゴ（各サイズ）
- [ ] カラーパレット定義
- [ ] フォント仕様
- [ ] トーン&マナー

## 品質チェックリスト

### ファイル形式
- [ ] イラスト: SVG または高解像度PNG
- [ ] 写真: JPG (最適化済み)
- [ ] アイコン: SVG推奨
- [ ] フォント: WOFF2/WOFF

### ファイルサイズ
- [ ] 各画像 < 500KB
- [ ] SVGは最適化済み
- [ ] WebP対応も検討

### レスポンシブ対応
- [ ] 各デバイスサイズでテスト済み
- [ ] 高DPI ディスプレイ対応
- [ ] ダークモード考慮（必要に応じて）

## 統合後のテスト項目

1. **デザイン一貫性**
   - manaolapuleサイトとの調和
   - ブランドイメージの統一

2. **パフォーマンス**
   - ページ読み込み速度
   - 画像最適化の確認

3. **アクセシビリティ**
   - alt属性の適切な設定
   - コントラスト比の確認

4. **レスポンシブ**
   - 全デバイスでの表示確認
   - 画像の適切なスケーリング

## 今後の改善案

1. **段階的な置き換え**
   - 重要度の高い素材から順次置き換え
   - A/Bテストで効果測定

2. **ブランド統一**
   - 両サイトのデザイン言語統一
   - 共通コンポーネントライブラリ作成

3. **パフォーマンス最適化**
   - 画像のCDN配信
   - 遅延読み込みの実装