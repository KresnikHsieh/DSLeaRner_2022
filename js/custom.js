 function draw() {
     // var canvas = document.getElementById("canvas");
   
     //    var ctx = canvas.getContext("2d");

     //    ctx.fillStyle = "rgb(200,0,0)";
     //    ctx.fillRect (10, 10, 55, 50);

     //    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
     //    ctx.fillRect (30, 30, 55, 50);


        var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.moveTo(100, 150);
      context.lineTo(450, 50);
      context.lineWidth = 15;
      context.stroke();
  
 }


var t0 = performance.now();
doSomething();
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");


function(){
    var handle = $( "#custom-handle");
    $( "#slider" ).slider({
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
    });
  };

// function() {
//     var handle1 = $( "#custom-handle-1");
//     $( "#slider-1" ).slider({
//       create: function() {
//         handle1.text( $( this ).slider( "value" ) );
//       },
//       slide: function( event, ui ) {
//         handle1.text( ui.value );
//       }
//     });
//   }
// function() {
//     var handle2 = $( "#custom-handle-2");
//     $( "#slider-2" ).slider({
//       create: function() {
//         handle2.text( $( this ).slider( "value" ) );
//       },
//       slide: function( event, ui ) {
//         handle2.text( ui.value );
//       }
//     });
//   }

