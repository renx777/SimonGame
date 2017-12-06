$(document).ready(function() {


    $(".pad").css("pointer-events", "none");
    
    var sequence = [];
    var userguess = [];
    var simon = {
     onbutton: false,
     startbutton: false,
     count: 1,
     strictmode: false,
    
     generateseq: function() {
       var rand = [".yellow", ".green", ".red", ".blue"];
       var id = Math.floor(Math.random() * rand.length);
    
       sequence.push(rand[id]);
     },
    
     lightup: function() {
       var j = 0;
       var k = sequence;
    
       var l = setInterval(changecol, 1000);
    
     
       function changecol() {
    
         $(k[j]).addClass('light');
         if (k[j] === ".green") {
         var a = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
    
         a.play();
       }
         else if (k[j] === ".red") {
         var a = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")
         a.play();
       } else if (k[j] === ".blue") {
         var a = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
         a.play();
       } else if  (k[j] === ".yellow") {
         var a = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
         a.play();
         }
         else{
           console.log("d")
         }
         setTimeout(function() {
           $(k[j]).removeClass('light');
    
           j++
         }, 600);
    
       }
       if (j > k.length - 1) {
         clearInterval(l);
    
       };
    
     },
    
     check: function(l) {
       if (l !== sequence[p]) {
         if (this.strictmode === true) {
           sequence = [];
           this.count = 1;
           userguess = [];
           this.generateseq();
           this.lightup();
           setTimeout(function() {
             $('#cnt').text("!!");
           }, 300)
           setTimeout(function() {
             $('#cnt').text(simon.count)
           }, 600);
    
         } else {
           this.lightup();
         }
    
       } else {
         userguess.push(l);
         p++;
    
       }
       console.log(userguess);
       console.log(sequence)
       if (userguess.length == sequence.length) {
         this.generateseq();
         this.count++;
         $('#cnt').text(simon.count);
    
         this.lightup();
         userguess = [];
         p = 0;
         console.log(userguess);
         console.log(sequence)
       }
    
     },
    
     userinput: function(s) {
    
       var l = "." + s;
       if (l === ".green") {
         var a = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
    
         a.play();
       } else if (l === ".red") {
         var a = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")
         a.play();
       } else if (l === ".blue") {
         var a = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
         a.play();
       } else {
         var a = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
         a.play();
       }
    
       $(l).addClass('light');
       setTimeout(function() {
         $(l).removeClass('light');
    
       }, 300);
    
       this.check(l);
    
     }
    
    }
    
    var p = 0;
    
    
    
    
    
    
    
    $('#strictBtn').on('click',function(){
     
     if(simon.strictmode==false){
       simon.strictmode = true;
       $('#strictLight').css('background-color','#DC0D29')
       
     }
     else{
       simon.strictmode = false;
       $('#strictLight').css('background-color','#32050C')
       
     }
     
     
     
    })
    
    
    $('#startBtn').on('click',function(){
     simon.startbutton = true;
    
     if (simon.onbutton == true && simon.startbutton == true) {
    $(".pad").css("pointer-events", "auto");
       simon.generateseq();
       simon.lightup();
       $('#cnt').text(simon.count);
    
     }
    })
    $("#myonoffswitch").on('click',function(){
     
     if ($('#myonoffswitch').is(":checked"))
    {
     simon.onbutton = true;
     
    }
     else{
       simon.onbutton = false;
     $(".pad").css("pointer-events", "none");
    location.reload(true)
     $('#cnt').text('--')
       
     }
     
     
     
    })
     
     
    
    
    


})


