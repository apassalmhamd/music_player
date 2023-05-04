class player{
    constructor(){
     var playermain=document.getElementById("player");
     playermain.style.height=screen.height+"px";
     if(screen.width<500){
        playermain.style.width=screen.width+"px";
     }
     var heightDiv=document.getElementById("content");
        heightDiv.style.height=screen.height-300+"px";
    }
}
onload=new player();

class Audio_player{
    constructor(){
     this.audio_file=document.getElementById("audio_file");
     this.title_radio=document.getElementById("title_radio");
     this.playe_pause_button=document.getElementById("playe_pause");
       this.isplayed
     this.playe_pause_button.addEventListener("click",()=>{
       this.playe_pause();
     });

     this.name_radio=[];
     this.name_radio[0]="راديوالجزائر";
     this.name_radio[1]="راديو صنعاء";
     this.name_radio[2]="راديو الكل";
     this.name_radio[3]="راديو هوا المغرب";
     

     this.source_audio=[];
     this.source_audio[0]="http://yayin.firatfm.com:3065/;audio.mp3&bufferlength=2&volume=100&streamer=rtmp://wowza.firatfm.com:3270/shoutcast/firatfm&skin=https://www.firatfm.com/ekle/yanyesil/videosmartclassic.zip&autostart=true&stretching=fill";
     this.source_audio[1]="https://dc5.serverse.com/proxy/pbmhbvxs/stream";
     this.source_audio[2]="https://livecast.radioalkul.com/";
     this.source_audio[3]="https://edge.mixlr.com/channel/tlfda";
    
     this.server=0;

     this.setResource();
     document.getElementById("next").addEventListener("click",()=>{
       if(this.server<this.source_audio.length-1){
        ++this.server;
        this.isplayed=false;
       }else{
        this.server=0;
       }
       localStorage.setItem("save_postiton",this.server);
       this.setResource();
     });
     document.getElementById("back").addEventListener("click",()=>{
       if(this.server>0){
        --this.server;
        this.isplayed=false;
       }else{
        this.server=this.source_audio.length-1;
       }
       localStorage.setItem("save_postiton",this.server);
       this.setResource();
     });
    }
    // !=null:معناها اذا كان فيها بيانات مخزنه
    setResource(){
      if(localStorage.getItem("save_postiton")!=null){
         this.server=localStorage.getItem("save_postiton");
      }
        this.audio_file.src=this.source_audio[this.server];
        this.title_radio.innerHTML= this.name_radio[this.server];
       this.playe_pause();
    }

    playe_pause(){
        if(this.isplayed==false){
            this.playe_pause_button.src="./img/pause.png";
            this.audio_file.play();
            this.isplayed=true;
        }else{
            this.playe_pause_button.src="./img/play.png";
            this.audio_file.pause();
            this.isplayed=false;
        }
    }
}
onload-=new Audio_player();