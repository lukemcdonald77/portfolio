/*const who_i_am = document.querySelector("#who")
const who_text = document.querySelector("#blurb")
who_i_am.addEventListener("click",function(){
  who_text.style.visibility="visible"
})
*/
const popUpEMAIL = document.getElementById("popUpEMAIL")
const button = document.getElementById("mailButton")
const linkedInLogo = document.getElementById("linkedIn")
const distance=button.getBoundingClientRect().right-linkedInLogo.getBoundingClientRect().left
button.addEventListener("click",function(){
  popUpEMAIL.style.width=`${distance}px`;
  var iconLocation = linkedInLogo.getBoundingClientRect();
  var popUPLocations = button.getBoundingClientRect()
  var middle = iconLocation.x//(iconLocation.x-iconLocation.width-2*popUPLocations.width-20)
  popUpEMAIL.style.left = `${middle}px`
  if(popUpEMAIL.style.visibility=="hidden"){
    popUpEMAIL.style.visibility="visible";
    popUpEMAIL.style.transform="translateY(130px)"
    popUpEMAIL.style.zIndex="1"
    popUpEMAIL.style.opacity="1"

    }
    else{
      popUpEMAIL.style.opacity="0"
      popUpEMAIL.style.zIndex="-1"
      popUpEMAIL.style.visibility="hidden"
      popUpEMAIL.style.transform="translateY(120px)"
  }
}
)
const myCanvas = document.getElementById('backDrop');
const ctx = myCanvas.getContext('2d');
const particleData=[]
myCanvas.height=window.innerHeight
myCanvas.width=window.innerWidth
window.addEventListener("resize",function(){
  popUpEMAIL.style.width=`${distance}px`
  var iconLocation = linkedInLogo.getBoundingClientRect();
  var popUPLocations = button.getBoundingClientRect()
  var middle = iconLocation.x
  popUpEMAIL.style.left = `${middle}px`
  myCanvas.height=window.innerHeight
  myCanvas.width=window.innerWidth
});
class particleFall {
  static fullFunc(){
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height)
    particleFall.particle()
    particleFall.addParticle()
  }
  static particle(){
    const loc=Math.ceil(Math.random()*window.innerWidth);
    const speed = Math.ceil(Math.random()*5);
    const radius = Math.PI*10;
    const xspeed = Math.ceil(Math.random()*2);
    const yspeed = Math.ceil(Math.random()*2);
    particleData.push({
      x:loc,
      y:0,
      speed:speed,
      xspeed:xspeed,
      yspeed:yspeed,
      radius:radius,
    })
  }
  static addParticle(){
    for(let i=0;i<particleData.length; i++){
      let oneParticle=particleData[i];
      ctx.beginPath();
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
      ctx.arc(oneParticle.x+=oneParticle.xspeed,oneParticle.y+=0.5+oneParticle.yspeed, oneParticle.speed*0.8,0,oneParticle.radius)
      ctx.fill()
    }
  }
}
var timestamp = null;
var lastMouseX = null;
var lastMouseY = null;
window.addEventListener("mousemove",function(e){
  if (timestamp === null) {
        timestamp = Date.now();
        lastMouseX = e.screenX;
        lastMouseY = e.screenY;
        return;
    }

    var now = Date.now();
    var dt =  now - timestamp;
    var dx = e.screenX - lastMouseX;
    var dy = e.screenY - lastMouseY;
    var speedX = Math.round(dx / dt * 100);
    var speedY = Math.round(dy / dt * 100);

    timestamp = now;
    lastMouseX = e.screenX;
    lastMouseY = e.screenY;
  xCoord=event.clientX
  yCoord=event.clientY
  for(let i=0;i<particleData.length;i++){
    let particleTarget=particleData[i]
    if (particleTarget.y>myCanvas.height){
      particleData.splice(i,1)
    }
    if((Math.abs(xCoord-particleTarget.x))<70){
        if(Math.abs(yCoord-particleTarget.y)<20){
          if(speedX>0){
            particleTarget.xspeed+=0.1//*(1/Math.abs(xCoord-particleTarget.x))*(Math.abs(speedX)*0.05)//(1*(1/Math.abs(xCoord-particleTarget.x))*(Math.abs(speedX)*0.1))/10
          }else if(speedX<0){
            particleTarget.xspeed-=0.1//*(1/Math.abs(xCoord-particleTarget.x))*(Math.abs(speedX)*0.05)//(1*(1/Math.abs(xCoord-particleTarget.x))*(Math.abs(speedX)*0.1))/10
          if(speedY>0){
            particleTarget.yspeed+=0.1+1*(1/Math.abs(xCoord-particleTarget.x))
          }else if(speedY<0){
            particleTarget.yspeed-=0.1+1*(1/Math.abs(xCoord-particleTarget.x))
          }
        };
        }
      }
    }
    })
setInterval(()=> particleFall.fullFunc(),20);
