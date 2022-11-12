window.onload = function(){

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    
    ctx.fillStyle = 'white';
    
    function Q_rsqrt(number) {
        var buffer = new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT);
        var y = new Float32Array(buffer);
        var i = new Uint32Array(buffer);
        var threehalfs = 1.5;
        var x2;
        x2 = number * 0.5;
        y[0] = number;
        i[0] = 0x5f3759df - ( i[0] >> 1 );          // here the value of y is also changed cause they share the same buffer
        y = y[0];
        y = y * ( threehalfs - ( x2 * y * y ) );    // Newton's method iteration
        return y;
    }



    class Ball {
        constructor(){
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.radius = Math.random() * .05 * canvas.width + 10;
            this.speedX = Math.random() * 1 - 1;
            this.speedY = Math.random() * 1 - 1;
        }
    
        update(){
            if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
                this.speedX *= -1;
            }
            if(this.y + this.radius > canvas.height || this.y - this.radius < 0){
                this.speedY *= -1;
            }
            this.x += this.speedX;
            this.y += this.speedY;
        }
    
        draw(context){
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            context.fill(this.shape);
            context.closePath();
        }
    
    }
   
    
    let balls = []

    for(let i=0; i < 10; i++){
        balls.push(new Ball());
    }

    function clicked(event){
        const prev = balls.length;
        balls.forEach(ball => {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            let dx = ball.x - x;
            let dy = ball.y - y;
            let dsq = Q_rsqrt(dx*dx + dy*dy);
            dsq = dsq/(dsq*dsq)
            let rradius = Q_rsqrt(ball.radius*ball.radius);
            rradius = rradius/(rradius*rradius)
            if(dsq < rradius){
                let sqred = ball.radius*ball.radius >> 1;
                let temp = Q_rsqrt(sqred);
                temp = temp/(temp*temp)
                if(temp < 5){
                    balls.splice(balls.indexOf(ball));
                    return 0;
                }
                ball.radius = temp;
                let copy = new Ball()
                copy.radius = ball.radius;
                copy.x = ball.x;
                copy.y = ball.y;
                copy.speedX = -ball.speedX;
                copy.speedY = -ball.speedY;
                ball.speedX += Math.random() * 1.25 - 1;
                ball.speedY += Math.random() * 1.25 - 1;
                balls.push(copy)
                return 0;
            }           
        });
        if(prev === balls.length)
            createParticles(event)
    }
    
    function createParticles(event){
        let ball = new Ball();
        ball.x = event.clientX;
        ball.y = event.clientY;
        balls.push(ball);
    }

    async function animate(){
        ctx.beginPath();
        ctx.clearRect(0,0,canvas.width, canvas.height);
        balls.forEach(ball => ball.update());
        balls.forEach(ball => ball.draw(ctx));
        ctx.closePath();

        await new Promise(resolve => setTimeout(resolve, 12));

        requestAnimationFrame(animate);
        
    }
    
    canvas.addEventListener('click', function(event) { 

        clicked(event); 
    }, false);

    animate();
}

