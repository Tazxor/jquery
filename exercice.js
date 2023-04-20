$(document).ready(function(){
        var cacher = function(){
        $(this).hide()};    
        
        
        $(".blocRouge").mouseover(function(){
            console.log("Attention, vous entrez dans la zone rouge");
        });


        $(".blocRouge").mousedown(function(){
            $(this).css("border-color","green");

            var eltP = $("<p style='color:green' >up</p>")
                
                eltP.click(cacher);
                $("header").append(eltP);
                
                
        });
        $(".blocRouge").mouseup(function(){
            $(this).css("border-color","red");

            var eltR = $("<p style='color:red' >dowm</p>")
                
                eltR.click(cacher);
                $("header").append(eltR);
                
                
        });


});


// var up = $("<div>up</div>").css("color","green").attr("onclick","$('.TEST1').remove();").addClass('TEST1');
// var dowm = $("<div>dowm</div>").css("color","red").attr("onclick","$('.TEST2').remove();").addClass('TEST2');

// $('p').mouseenter(function() {
//     // $(this).replaceWith("<p>ceci n'est pas un paragraphe</p>");
//     $(this).html("ceci n'est pas un paragraphe");
// }
// );

// $('p').mouseleave(function() {
//     // $(this).replaceWith("<p>ceci est  un paragraphe</p>");
//     $(this).html("ceci est  un paragraphe");
// }
// );

// $("#test").mouseenter(function() {
//     // $(this).replaceWith("<p>ceci est  un paragraphe</p>");
//     $("#test").css("border-color","red");
//     // alert("Attention, vous entrez dans la zone rouge");
//     $("#parent").append(up);

// }
// );
// $("#test").mouseleave(function() {
//     // $(this).replaceWith("<p>ceci est  un paragraphe</p>");
//     $("#test").css("border-color","green");
//     $("#parent2").append(dowm);
// }
// );
