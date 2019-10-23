(function () {
    let canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        w = canvas.width = document.querySelector('.header__wrapper').offsetWidth,
        h = canvas.height = document.querySelector('.header__wrapper').offsetHeight,
        particles = [],
        properties = {
            bgc : 'rgba(255, 255, 255, 1)',
            particleCount : 30,
            particleMaxVel : 0.3,
            particleLife : 120,
        }

        img = [];

        for(let i = 0; i <= 10; i++){
            img[i] = new Image();
            img[i].src = "img/bg/" + i + ".svg";
        }

        //imgg = img[Math.round(Math.random() * 10)];
        
        canvas.className = "bg__canvas";
        document.querySelector('.header__wrapper').appendChild(canvas);

        window.onresize = function () {
            w = canvas.width = document.querySelector('.header__wrapper').offsetWidth;
            h = canvas.height = document.querySelector('.header__wrapper').offsetHeight;
        }

        class Particle{
            constructor(){
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.velosityX = Math.random() * (properties.particleMaxVel * 2) - properties.particleMaxVel;
                this.velosityY = Math.random() * (properties.particleMaxVel * 2) - properties.particleMaxVel;
                this.life = properties.particleLife * 60;
                this.img = img[Math.round(Math.random() * 10)];
            }

            position() {
                this.x + this.velosityX > w && this.velosityX > 0 || this.x + this.velosityX < 0 && this.velosityX < 0? this.velosityX *= -1 : this.velosityX;
                this.y + this.velosityY > h && this.velosityY > 0 || this.y + this.velosityY < 0 && this.velosityY < 0? this.velosityY *= -1 : this.velosityY;
                this.x += this.velosityX;
                this.y += this.velosityY;
            }

            reDraw() {
               
               //ctx.globalAlpha = 0.01;
               //ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
                
                ctx.drawImage(this.img, this.x, this.y);
                       
            
            }

            reCcalculateLife() {
                if(this.life < 1) {
                    this.x = Math.random() * w;
                    this.y = Math.random() * h;
                    this.velosityX = Math.random() * (properties.particleMaxVel * 2) - properties.particleMaxVel;
                    this.velosityY = Math.random() * (properties.particleMaxVel * 2) - properties.particleMaxVel;
                    this.life = Math.random() * properties.particleLife * 60;
                }
                this.life--;
            }
        }

        function reDrawBg() {
            ctx.fillStyle = properties.bgc;
            ctx.fillRect(0, 0, w, h);
        }
        
        function reDrawParticles() {
            for(let i in particles) {
                particles[i].reCcalculateLife();
                particles[i].position();
                particles[i].reDraw();
            }
        }

        function loop() {
            reDrawBg();
            reDrawParticles();
            requestAnimationFrame(loop);
        }

        function init() {
            for(var i = 0; i < properties.particleCount; i++) {
                particles.push(new Particle());
            }

            loop();
        }

        init();
})()