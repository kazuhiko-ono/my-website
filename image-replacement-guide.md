# 画像入れ替えガイド

## 🖼️ 簡単な画像入れ替え手順

### 方法1: ファイルをドラッグ&ドロップ
1. **Finder で images フォルダを開く**
2. **新しい画像ファイルをドラッグ**
3. **既存ファイルと同じ名前で保存**

### 方法2: コマンドライン
```bash
# デスクトップにある新しい画像をコピーする例
cp ~/Desktop/new-hero-image.jpg images/hero-learning.jpg
cp ~/Desktop/new-instructor.jpg images/instructor.jpg
cp ~/Desktop/new-customer1.jpg images/customer1.jpg
```

### 方法3: 新しいファイル名で追加
```bash
# 新しい画像を追加
cp ~/Desktop/my-photo.jpg images/my-photo.jpg

# HTMLファイルで参照を変更
# 例：<img src="images/hero-learning.jpg" alt="...">
# ↓
# <img src="images/my-photo.jpg" alt="...">
```

## 📏 推奨画像サイズ

### ヒーロー画像
- **サイズ**: 1200x800px または 600x400px
- **形式**: JPG
- **容量**: 500KB以下

### 講師プロフィール写真
- **サイズ**: 300x400px
- **形式**: JPG
- **容量**: 200KB以下

### お客様の声写真
- **サイズ**: 120x120px (正方形)
- **形式**: JPG
- **容量**: 50KB以下

## 🔄 入れ替え後の確認手順

1. **ローカルでテスト**
```bash
# ローカルサーバー起動
python -m http.server 8000
# ブラウザで http://localhost:8000 を確認
```

2. **GitHubにアップロード**
```bash
git add images/
git commit -m "写真を更新"
git push
```

3. **GitHub Pages で確認**
```
https://kazuhiko-ono.github.io/my-website
```

## 🎨 画像最適化のコツ

### 自動リサイズ (macOS)
```bash
# 画像を自動リサイズ
sips -Z 600 images/hero-learning.jpg
sips -Z 300 images/instructor.jpg
sips -Z 120 images/customer1.jpg
```

### オンライン最適化ツール
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **Canva**: サイズ調整とトリミング

## 🚨 よくある問題と解決法

### 問題1: 画像が表示されない
```bash
# ファイル名の確認
ls -la images/
# HTMLの参照確認
grep -n "images/" index.html
```

### 問題2: 画像が大きすぎる
```css
/* CSS で調整 */
.hero-visual img {
    max-width: 100%;
    height: auto;
}
```

### 問題3: 画質が悪い
- 元画像の解像度を上げる
- JPG品質を80-90%に設定
- 高DPI対応画像を用意

## 💡 便利なコマンド

### 画像情報の確認
```bash
file images/hero-learning.jpg
ls -lh images/
```

### バックアップ作成
```bash
cp -r images/ images_backup/
```

### 一括リネーム
```bash
# 複数ファイルの拡張子変更
for file in images/*.jpeg; do
    mv "$file" "${file%.jpeg}.jpg"
done
```