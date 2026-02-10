let car = document.getElementById('car');

let carX = 100;
let carY = 100;

let mouseX = 0;
let mouseY = 0;

const speed = 5;



document.addEventListener('mousemove', (e) =>{
    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animation(){

    
    const dx = mouseX - carX;
    const dy = mouseY - carY;

    const angle = Math.atan2(dy, dx);

    const angDeg = angle * 180 / Math.PI;
    
    let minDist = 50;
    let dist  = Math.hypot(dx, dy);
    car.style.transform = `rotate(${angDeg}deg)`;

    if(minDist<dist){
    carX += Math.cos(angle) * speed;
    carY += Math.sin(angle) * speed;
    }

    car.style.left = carX + 'px';
    car.style.top = carY + 'px';
    requestAnimationFrame(animation);
}

animation();