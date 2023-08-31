var button=document.getElementById("button")
var numberinsideshape= 1
var lastshapenumber=0
button.onclick=()=>{
    
    var n = document.getElementById("number").value 
    console.log(n);
    var totalshape=Number(n)+Number(lastshapenumber);
    console.log(totalshape);
    
    var circle=document.getElementById("circle").checked
    console.log(circle);
    var rectangle=document.getElementById("rectangle").checked
    console.log(rectangle);
    var square=document.getElementById("square").checked
    console.log(square);
 
    var box=document.getElementById("box");
    

    for (let i=numberinsideshape;i<=totalshape;i++){
        var shape=document.createElement("div");
        shape.innerHTML=numberinsideshape
        numberinsideshape+=1
      
        if (square==true){
        shape.classList.add("square");
       
        }
        else if(circle==true){
        shape.classList.add("circle");
        }
        else if(rectangle==true){
        shape.classList.add("rectangle");
       }
        console.log(shape)
        box.append(shape)
        lastshapenumber=box.lastElementChild.innerHTML
    }
    


}