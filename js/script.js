// DOMコンテンツ読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
    
    // ハンバーガーメニュー機能
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // ナビゲーションリンククリック時にメニューを閉じる
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // スムーススクロール機能
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // FAQ アコーディオン機能
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            // 他のFAQアイテムを閉じる
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // クリックしたアイテムをトグル
            item.classList.toggle('active');
        });
    });
    
    // スクロール時のヘッダー背景変更
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
    
    // スクロール時のフェードインアニメーション
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // アニメーション対象要素を監視
    const animateElements = document.querySelectorAll('.service-card, .feature-item, .testimonial-item, .step');
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // フォーム送信処理
    const forms = document.querySelectorAll('.contact-form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // バリデーション
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#EF4444';
                    showFieldError(field, '必須項目です');
                } else {
                    field.style.borderColor = '#D1D5DB';
                    hideFieldError(field);
                }
            });
            
            // メールアドレスの形式チェック
            const emailFields = this.querySelectorAll('input[type="email"]');
            emailFields.forEach(field => {
                if (field.value && !isValidEmail(field.value)) {
                    isValid = false;
                    field.style.borderColor = '#EF4444';
                    showFieldError(field, '正しいメールアドレスを入力してください');
                }
            });
            
            if (isValid) {
                submitForm(this);
            }
        });
    });
    
    // フィールドフォーカス時にエラーをクリア
    const formFields = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.style.borderColor = '#2563EB';
            hideFieldError(this);
        });
        
        field.addEventListener('blur', function() {
            if (this.style.borderColor === 'rgb(37, 99, 235)') {
                this.style.borderColor = '#D1D5DB';
            }
        });
    });
    
    // モーダル機能
    window.openModal = function(modalId) {
        const modal = document.getElementById(modalId + '-modal');
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    };
    
    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId + '-modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
    
    // モーダル外クリックで閉じる
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // ESCキーでモーダルを閉じる
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal[style*="block"]');
            if (openModal) {
                openModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });
    
    // ヘルパー関数
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showFieldError(field, message) {
        hideFieldError(field); // 既存のエラーを削除
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.color = '#EF4444';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;
        
        field.parentNode.appendChild(errorDiv);
    }
    
    function hideFieldError(field) {
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }
    
    // フォーム送信関数
    function submitForm(form) {
        const submitButton = form.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
        // 送信中表示
        submitButton.textContent = '送信中...';
        submitButton.disabled = true;
        
        // フォームデータ収集
        const formData = new FormData(form);
        
        // フォームタイプを判定して追加
        let formType = '';
        if (form.id === 'seminar-form') {
            formType = 'seminar';
        } else if (form.id === 'consultation-form') {
            formType = 'consultation';
        } else {
            formType = 'general';
        }
        formData.append('form_type', formType);
        
        // サーバーに送信
        fetch('contact-handler.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showSuccessMessage(form, data.message);
                form.reset();
                
                // Google Analytics イベント送信
                trackEvent('form_submit_success', {
                    form_type: formType,
                    page_location: window.location.href
                });
            } else {
                showErrorMessage(form, data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showErrorMessage(form, 'ネットワークエラーが発生しました。しばらく経ってから再度お試しください。');
        })
        .finally(() => {
            // ボタンを元に戻す
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
    }
    
    function showSuccessMessage(form, message) {
        // 既存のメッセージを削除
        const existingMessage = form.querySelector('.success-message, .error-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // 成功メッセージを作成
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.style.cssText = `
            background-color: #10B981;
            color: white;
            padding: 1rem;
            border-radius: 6px;
            margin-top: 1rem;
            text-align: center;
            font-weight: 500;
            animation: fadeInUp 0.3s ease-out;
        `;
        
        successDiv.textContent = message || 'お問い合わせを受け付けました。';
        form.appendChild(successDiv);
        
        // 5秒後にメッセージを削除
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
        
        // フォームの先頭にスクロール
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    function showErrorMessage(form, message) {
        // 既存のメッセージを削除
        const existingMessage = form.querySelector('.success-message, .error-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // エラーメッセージを作成
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = `
            background-color: #EF4444;
            color: white;
            padding: 1rem;
            border-radius: 6px;
            margin-top: 1rem;
            text-align: center;
            font-weight: 500;
            animation: fadeInUp 0.3s ease-out;
        `;
        
        errorDiv.textContent = message || 'エラーが発生しました。';
        form.appendChild(errorDiv);
        
        // 5秒後にメッセージを削除
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
    
    // テストモニアルカルーセル（将来の拡張用）
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-item');
    
    function rotateTestimonials() {
        testimonials.forEach((testimonial, index) => {
            testimonial.style.opacity = index === currentTestimonial ? '1' : '0.7';
        });
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }
    
    // 初期設定
    if (testimonials.length > 0) {
        setInterval(rotateTestimonials, 8000);
    }
    
    // パフォーマンス最適化：画像の遅延読み込み
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // セミナー日程の自動更新（将来の拡張用）
    function updateSeminarDates() {
        const seminarDateSelect = document.getElementById('seminar-date');
        if (seminarDateSelect) {
            const today = new Date();
            const options = seminarDateSelect.querySelectorAll('option');
            
            options.forEach(option => {
                if (option.value) {
                    const seminarDate = new Date(option.value);
                    if (seminarDate < today) {
                        option.style.display = 'none';
                    }
                }
            });
        }
    }
    
    updateSeminarDates();
    
    // ページ読み込み完了時のアニメーション
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // ヒーローセクションのアニメーション
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroCTA = document.querySelector('.hero-cta');
        
        setTimeout(() => {
            if (heroTitle) heroTitle.classList.add('fade-in-up');
        }, 200);
        
        setTimeout(() => {
            if (heroSubtitle) heroSubtitle.classList.add('fade-in-up');
        }, 400);
        
        setTimeout(() => {
            if (heroCTA) heroCTA.classList.add('fade-in-up');
        }, 600);
    });
    
    // Google Analytics イベント送信（将来の拡張用）
    function trackEvent(eventName, eventData) {
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, eventData);
        }
    }
    
    // CTAボタンクリック追跡
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            trackEvent('cta_click', {
                button_text: buttonText,
                page_location: window.location.href
            });
        });
    });
    
    // フォーム送信追跡
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            trackEvent('form_submit', {
                form_id: this.id,
                page_location: window.location.href
            });
        });
    });
    
    // ヒーロー動画制御機能
    const heroVideo = document.getElementById('hero-video');
    const heroFallback = document.getElementById('hero-fallback');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const muteBtn = document.getElementById('mute-btn');
    const playIcon = document.querySelector('.play-icon');
    const muteIcon = document.querySelector('.mute-icon');
    
    if (heroVideo) {
        // 動画読み込みエラー時のフォールバック
        heroVideo.addEventListener('error', function() {
            console.log('動画の読み込みに失敗しました。画像を表示します。');
            heroVideo.style.display = 'none';
            heroFallback.style.display = 'block';
        });
        
        // 再生/一時停止ボタン
        if (playPauseBtn) {
            playPauseBtn.addEventListener('click', function() {
                if (heroVideo.paused) {
                    heroVideo.play();
                    playIcon.textContent = '⏸️';
                } else {
                    heroVideo.pause();
                    playIcon.textContent = '▶️';
                }
            });
        }
        
        // ミュート/ミュート解除ボタン
        if (muteBtn) {
            muteBtn.addEventListener('click', function() {
                if (heroVideo.muted) {
                    heroVideo.muted = false;
                    muteIcon.textContent = '🔊';
                } else {
                    heroVideo.muted = true;
                    muteIcon.textContent = '🔇';
                }
            });
        }
        
        // 動画のパフォーマンス最適化
        heroVideo.addEventListener('canplay', function() {
            console.log('ヒーロー動画の読み込み完了');
        });
        
        // 動画の自動再生が失敗した場合の処理
        const playPromise = heroVideo.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('自動再生が失敗しました:', error);
                playIcon.textContent = '▶️';
            });
        }
    }
    
    console.log('学習支援パートナー Webサイト - JavaScript初期化完了');
});