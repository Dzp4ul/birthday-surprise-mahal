// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Add some sparkle effects
    createSparkles();
    
    // Play birthday song (optional - commented out to avoid auto-play issues)
    // playBirthdayMusic();
    
    // Add click effects to hearts
    addHeartClickEffects();
});

// Function to reveal the main surprise
function revealSurprise() {
    const initialView = document.getElementById('initialView');
    const mainContent = document.getElementById('mainContent');
    
    // Hide initial view with animation
    initialView.style.animation = 'fadeOut 0.5s ease-out forwards';
    
    setTimeout(function() {
        initialView.style.display = 'none';
        mainContent.style.display = 'block';
        mainContent.style.animation = 'fadeInUp 1s ease-out';
        
        // Add extra celebration effects
        createExtraConfetti();
    }, 500);
}

// Function to show the surprise content
function showSurprise() {
    const surpriseContent = document.getElementById('surpriseContent');
    const surpriseBtn = document.querySelector('.surprise-btn');
    
    surpriseContent.classList.add('show');
    surpriseBtn.style.display = 'none';
    
    // Add extra confetti when surprise is revealed
    createExtraConfetti();
}

// Create sparkle effects
function createSparkles() {
    const sparkleContainer = document.createElement('div');
    sparkleContainer.className = 'sparkles';
    sparkleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 3;
    `;
    document.body.appendChild(sparkleContainer);
    
    setInterval(function() {
        createSparkle(sparkleContainer);
    }, 300);
}

function createSparkle(container) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 20 + 10}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: sparkle 2s linear forwards;
        pointer-events: none;
    `;
    
    // Add sparkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0% {
                opacity: 0;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
    `;
    if (!document.querySelector('style[data-sparkle]')) {
        style.setAttribute('data-sparkle', 'true');
        document.head.appendChild(style);
    }
    
    container.appendChild(sparkle);
    
    // Remove sparkle after animation
    setTimeout(function() {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 2000);
}

// Create extra confetti when surprise is shown
function createExtraConfetti() {
    const colors = ['#ff4081', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#00bcd4', '#4caf50', '#ffeb3b', '#ff9800'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(function() {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: ${Math.random() * 10 + 5}px;
                height: ${Math.random() * 10 + 5}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}%;
                top: -10px;
                z-index: 1000;
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                animation: extraConfetti 3s linear forwards;
                pointer-events: none;
            `;
            
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(function() {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 3000);
        }, i * 50);
    }
    
    // Add extra confetti animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes extraConfetti {
            0% {
                top: -10px;
                transform: rotate(0deg);
                opacity: 1;
            }
            100% {
                top: 100vh;
                transform: rotate(${Math.random() * 360}deg);
                opacity: 0;
            }
        }
    `;
    if (!document.querySelector('style[data-extra-confetti]')) {
        style.setAttribute('data-extra-confetti', 'true');
        document.head.appendChild(style);
    }
}

// Add click effects to hearts
function addHeartClickEffects() {
    document.addEventListener('click', function(e) {
        // Create a heart at click position
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.cssText = `
            position: fixed;
            left: ${e.clientX - 10}px;
            top: ${e.clientY - 10}px;
            font-size: 20px;
            pointer-events: none;
            z-index: 1000;
            animation: heartPop 1s ease-out forwards;
        `;
        
        document.body.appendChild(heart);
        
        // Add heart pop animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes heartPop {
                0% {
                    transform: scale(0);
                    opacity: 1;
                }
                50% {
                    transform: scale(1.2);
                    opacity: 1;
                }
                100% {
                    transform: scale(0) translateY(-50px);
                    opacity: 0;
                }
            }
        `;
        if (!document.querySelector('style[data-heart-pop]')) {
            style.setAttribute('data-heart-pop', 'true');
            document.head.appendChild(style);
        }
        
        // Remove heart after animation
        setTimeout(function() {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 1000);
    });
}

// Show love message
function showLoveMessage() {
    const messages = [
        "You're the most amazing person I know! 💕",
        "Every day with you is a gift! 🎁",
        "You make my world brighter! ✨",
        "I'm so lucky to have you in my life! 🍀",
        "You're my sunshine on cloudy days! ☀️"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create a floating message
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = randomMessage;
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #ff4081, #e91e63);
        color: white;
        padding: 20px 30px;
        border-radius: 25px;
        font-size: 1.2rem;
        font-weight: 600;
        box-shadow: 0 10px 30px rgba(233, 30, 99, 0.3);
        z-index: 1001;
        animation: messageFloat 4s ease-in-out forwards;
        text-align: center;
        max-width: 80%;
    `;
    
    document.body.appendChild(messageDiv);
    
    // Add message float animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes messageFloat {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0);
            }
            20% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.1);
            }
            80% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
        }
    `;
    if (!document.querySelector('style[data-message-float]')) {
        style.setAttribute('data-message-float', 'true');
        document.head.appendChild(style);
    }
    
    // Remove message after animation
    setTimeout(function() {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    }, 4000);
}

// Add some interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Make balloons interactive
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(function(balloon) {
        balloon.addEventListener('click', function() {
            this.style.animation = 'balloonPop 0.5s ease-out forwards';
            setTimeout(() => {
                this.style.animation = 'sway 3s infinite ease-in-out';
            }, 500);
        });
    });
    
    // Add balloon pop animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes balloonPop {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); }
            100% { transform: scale(1); }
        }
    `;
    if (!document.querySelector('style[data-balloon-pop]')) {
        style.setAttribute('data-balloon-pop', 'true');
        document.head.appendChild(style);
    }
    
    // Make cake candles interactive
    const candles = document.querySelectorAll('.candle');
    candles.forEach(function(candle) {
        candle.addEventListener('click', function() {
            const flame = this.querySelector('.flame');
            if (flame) {
                flame.style.display = flame.style.display === 'none' ? 'block' : 'none';
                if (flame.style.display === 'none') {
                    // Candle blown out effect
                    createSmokeEffect(this);
                }
            }
        });
    });
});

// Create smoke effect when candle is blown out
function createSmokeEffect(candle) {
    const smoke = document.createElement('div');
    smoke.innerHTML = '💨';
    smoke.style.cssText = `
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 12px;
        animation: smokeRise 2s ease-out forwards;
        pointer-events: none;
    `;
    
    candle.appendChild(smoke);
    
    // Add smoke animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes smokeRise {
            0% {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
            100% {
                opacity: 0;
                transform: translateX(-50%) translateY(-30px);
            }
        }
    `;
    if (!document.querySelector('style[data-smoke]')) {
        style.setAttribute('data-smoke', 'true');
        document.head.appendChild(style);
    }
    
    // Remove smoke after animation
    setTimeout(function() {
        if (smoke.parentNode) {
            smoke.parentNode.removeChild(smoke);
        }
    }, 2000);
}
