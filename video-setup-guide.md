# 🎬 MP4動画セットアップガイド

## 動画ファイルの準備

### 推奨仕様
- **ファイル名**: `hero-video.mp4`
- **サイズ**: 1280x720px または 1920x1080px
- **長さ**: 10-30秒（ループ再生）
- **容量**: 5MB以下推奨
- **フレームレート**: 30fps
- **コーデック**: H.264

## 動画配置方法

### 方法1: ローカルファイル
```bash
# imagesフォルダに動画を配置
cp /path/to/your-video.mp4 images/hero-video.mp4
```

### 方法2: ドラッグ&ドロップ
1. Finderで `images/` フォルダを開く
2. MP4ファイルをドラッグ&ドロップ
3. ファイル名を `hero-video.mp4` に変更

### 方法3: オンライン動画URL
```html
<!-- HTMLで直接URLを指定 -->
<source src="https://example.com/video.mp4" type="video/mp4">
```

## 動画最適化

### macOS での変換
```bash
# ffmpegでサイズと品質を最適化
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -crf 28 -c:a aac -b:a 128k images/hero-video.mp4
```

### オンラインツール
- **Handbrake**: https://handbrake.fr/
- **CloudConvert**: https://cloudconvert.com/
- **Video Compressor**: https://www.videosmaller.com/

## 動画機能

### 🎮 実装済み機能
- ✅ 自動再生（ミュート）
- ✅ ループ再生
- ✅ レスポンシブ対応
- ✅ 再生/一時停止ボタン
- ✅ ミュート/音声ボタン
- ✅ フォールバック画像
- ✅ エラーハンドリング

### 🎛️ 制御方法
- **ホバー時**: 制御ボタン表示
- **クリック**: 再生/一時停止切り替え
- **音声**: デフォルトミュート
- **自動再生失敗**: 手動再生可能

## テスト方法

### ローカルテスト
```bash
# ローカルサーバー起動
python -m http.server 8000
# http://localhost:8000 でテスト
```

### 確認ポイント
- [ ] 動画が自動再生される
- [ ] ループ再生が機能する
- [ ] 制御ボタンが表示される
- [ ] レスポンシブ表示される
- [ ] エラー時に画像が表示される

## パフォーマンス最適化

### 遅延読み込み対応
```html
<!-- 必要に応じて遅延読み込み -->
<video preload="metadata" loading="lazy">
```

### 複数フォーマット対応
```html
<video>
    <source src="images/hero-video.webm" type="video/webm">
    <source src="images/hero-video.mp4" type="video/mp4">
    <!-- フォールバック -->
</video>
```

## ブラウザ対応

### 対応状況
- ✅ Chrome / Safari / Firefox / Edge
- ✅ iOS Safari (音声制限あり)
- ✅ Android Chrome
- ⚠️ 古いブラウザは画像フォールバック

### 自動再生制限
- **iOS**: ミュート時のみ自動再生
- **一部ブラウザ**: ユーザー操作後に再生
- **対策**: フォールバック画像で対応済み

## よくある問題

### 動画が表示されない
```bash
# ファイルパス確認
ls -la images/hero-video.mp4
# ファイル形式確認
file images/hero-video.mp4
```

### 容量が大きすぎる
```bash
# ファイルサイズ確認
ls -lh images/hero-video.mp4
# 5MB以下が推奨
```

### 自動再生されない
- ブラウザの自動再生ポリシー
- 音声なし（muted）で再生
- フォールバック機能で対応済み

## アップロード方法

```bash
# 動画追加後のコミット
git add images/hero-video.mp4
git commit -m "ヒーロー動画を追加"
git push
```

## 代替案

### 軽量なGIF
```html
<!-- 軽量なアニメーションGIFを使用 -->
<img src="images/hero-animation.gif" alt="学習支援">
```

### CSS アニメーション
```css
/* CSSのみでアニメーション効果 */
.hero-visual img {
    animation: float 6s ease-in-out infinite;
}
```