const canvas = document.createElement("canvas");
canvas.className = "star-canvas";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

let stars = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();


class Star {

    constructor(){

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 2 + 0.5;

        this.speed = Math.random() * 0.5 + 0.1;

        this.opacity = Math.random();

    }


    update(){

        this.y += this.speed;


        if(this.y > canvas.height){

            this.y = 0;
            this.x = Math.random() * canvas.width;

        }


        this.opacity += (Math.random()-0.5)*0.03;


        if(this.opacity < 0.2)
            this.opacity = 0.2;

        if(this.opacity > 1)
            this.opacity = 1;

    }


    draw(){

        ctx.beginPath();

        ctx.fillStyle =
        `rgba(255,255,255,${this.opacity})`;

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI*2
        );

        ctx.fill();

    }

}



for(let i = 0; i < 180; i++){

    stars.push(new Star());

}



function animate(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    stars.forEach(star=>{

        star.update();
        star.draw();

    });


    requestAnimationFrame(animate);

}


animate();
