window.onload=function(){
    var canvas = document.getElementById("canvas"),
        context= canvas.getContext("2d"),
        width=canvas.width=window.innerWidth,
        height=canvas.height=window.innerHeight;

    context.translate(0, height/2);
    context.scale(1,-1)

    for (var angulo = 0; angulo < Math.PI*4; angulo+=0.01) {
       // console.log(Math.sin(angulo))
       var x = angulo*100;
           y=Math.sin(angulo)*100;

       context.fillRect(x,y,5,5)
        
    }
}