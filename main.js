const box2 = document.getElementById('box2');

let currentX;
let startingX;
let orbitFlag;

let getPos = function getPosition() { // use this to get position of element
    const rect = box2.getBoundingClientRect();
    const x = rect.left;
    const y = rect.top;
    return (x);
}

let stopAnimation = false;
let styles = window.getComputedStyle(box2);
let right = styles.getPropertyValue('--orbitRight').replace('px','');
right = +right;
let center = styles.getPropertyValue('--center').replace('px','');
center = +center;
let left = styles.getPropertyValue('--orbitLeft').replace('px','');
left = +left;

let rightDistance = (center - right);
let leftDistance = (left-center);
let totalDistance = rightDistance + leftDistance;
 
let i = 0;
function animate() {
    if(!stopAnimation){
        
        currentX = Math.floor(getPos());

        if (i === 0){
            startingX = getPos(); // get value of X at beginning of orbit
        }
        i++;
        
        requestAnimationFrame(animate);

        if (currentX > (startingX + leftDistance + (rightDistance/2))){
            orbitFlag = true;
            console.log("orbitFlag: " + orbitFlag);
            box2.style.zIndex = '-10';
        }
       
       if (currentX < (startingX + rightDistance) - (rightDistance/2)) {
            console.log("orbitFlag: " + orbitFlag);
            orbitFlag = false;
            box2.style.zIndex = '10';

       }
       
    }
    
}

animate();

