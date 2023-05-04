class color{
    constructor(){
     this.color1=document.getElementById("color1");
     this.color1.addEventListener("click",()=>{
     this. select_color("color1");
     });
     this.color2=document.getElementById("color2");
     this.color2.addEventListener("click",()=>{
     this. select_color("color2");
     });
     this.color3=document.getElementById("color3");
     this.color3.addEventListener("click",()=>{
     this. select_color("color3");
     });
     this.color4=document.getElementById("color4");
     this.color4.addEventListener("click",()=>{
     this. select_color("color4");
     });
     if(localStorage.getItem("COLOR")!=null){
        document.body.style.background="linear-gradient(to right, #bd4141, #FFEB3B)";
     }
     this.select_color(localStorage.getItem("COLOR"));
    }
    select_color(color){
     if(color=="color1"){
      document.body.style.background="#4c3d3d";
     }
    else if(color=="color2"){
        document.body.style.background="linear-gradient(to right, #bd4141, #FFEB3B)";
       }
       else if(color=="color3"){
        document.body.style.background="linear-gradient(to left,  #5b8d4e, #36352b)";
       }
       else if(color=="color4"){
        document.body.style.background="linear-gradient(to left,  #e1e281, #29298d)";
       }
       localStorage.setItem("COLOR",color);
    }
}
onload=new color();
