var mouseEvent="empty";
var last_position_x,last_position_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_line=document.getElementById("width_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";

}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_mouse_x=e.clientX-canvas.offsetLeft;
    current_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        console.log("x="+last_position_x+"y="+last_position_y);
        ctx.arc(current_mouse_x,current_mouse_y,radius,0,2*Math.PI);

        console.log("x="+current_mouse_x+"y="+current_mouse_y);
        
        ctx.stroke();
    }
    last_position_x=current_mouse_x;
    last_position_y=current_mouse_y
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
    
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}