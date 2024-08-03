//solution of code

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

start.addEventListener('click',function(){
    function randomColor() {
        const hex = "0123456789ABCDEF";
        let  color = "#";
        for(let i = 0; i < 6; i++){
            color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    console.log(randomColor());

    const setColor = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
    },1000)

    stop.addEventListener('click',function(){
        clearInterval(setColor);
        document.body.style.backgroundColor = randomColor()
    })
    
})
