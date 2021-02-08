// FORCE SCROLL TO TOP ON RELOAD

$(document).ready(function(){
    $('html, body').scrollTop(0);

    $(window).on('load', function() {
    setTimeout(function(){
        $('html, body').scrollTop(0);
    }, 0);

 });

// WILSON FACE

 $('#mascot').hover(
    function() {
		var $this = $('#mascot-face'); // caching $(this)
		var faces = [":D", ":o", ":]", ":}", ":@", ":P"]
        $this.data(':)', $this.text());
		$this.text(faces[Math.floor(Math.random()* faces.length)]);
		$("#mascot-bg").addClass("bg-rotate");
    },
    function() {
        var $this = $('#mascot-face'); // caching $(this)
		$this.text($this.data(':)'));
		$("#mascot-bg").removeClass("bg-rotate");
    }
);
});

// $("#sticker-hero").mousemove(function( event ) {
// 	console.log(event.pageX, event.pageY)
// });

// PARALLAX MENTOR

// $("#mentorship").mousemove(function(e) {
// 	parallaxIt(e, "#mentor-bg", -100);
// 	parallaxIt(e, "#mentor-shape", -30);
// 	parallaxIt(e, "#mentee-shape", -30);
//   });

// function parallaxIt(e, target, movement) {
// 	var $this = $("#mentorship");
// 	var relX = e.pageX - $this.offset().left;
// 	var relY = e.pageY - $this.offset().top;
  
// 	TweenMax.to(target, 1, {
// 	  x: (relX - $this.width() / 2) / $this.width() * movement,
// 	  y: (relY - $this.height() / 2) / $this.height() * movement
// 	});
//   }

var scene = document.getElementById('mentor-bg-scene');
var parallaxInstance = new Parallax(scene);