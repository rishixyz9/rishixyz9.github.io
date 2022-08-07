window.onload = function(){

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
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
            this.speedX = Math.random() * 1.25 - 1;
            this.speedY = Math.random() * 1.25 - 1;
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

    function clicked(event){
        balls.forEach(ball => {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            let dx = ball.x - x;
            let dy = ball.y - y;
            if(dx*dx + dy*dy < ball.radius * ball.radius){
                let sqred = ball.radius*ball.radius >> 1;
                let temp = Q_rsqrt(sqred);
                temp = temp/(temp*temp)
                ball.radius = temp;
                let copy = new Ball()
                copy.radius = ball.radius;
                copy.x = ball.x;
                copy.y = ball.y;
                copy.speedX = -ball.speedX;
                copy.speedY = -ball.speedY;
                balls.push(copy)
                return;
            }           
        });
    }

    for(let i=0; i < 20; i++){
        balls.push(new Ball());
    }
    
    function animate(){
        canvas.addEventListener('click', function(event) { 
            clicked(event); 
        }, false);
        ctx.beginPath();
        ctx.clearRect(0,0, canvas.width, canvas.height);
        balls.forEach(ball => ball.update());
        balls.forEach(ball => ball.draw(ctx));

        requestAnimationFrame(animate);
    }
    
    
    animate();
}

