$("#cover a[href^='#']").on('click', function(e) {

   e.preventDefault();

   var hash = this.hash;

   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){
       window.location.hash = hash;
     });

});

function set_animation_class(classname, offset){
    $(classname).waypoint(function(direction) {
    $(classname).addClass('animated fadeInUp');
    }, {
        offset: offset.toString() + "%" 
    });
}

var number_of_rows = $(".timeline li").length;
var offset = 55;
var class_name = "";

for (i = 1; i < number_of_rows+1; i++){
    class_name = ".wp-" + i.toString();
    offset += 5;
    set_animation_class(class_name,offset)
}