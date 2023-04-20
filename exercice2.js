$(document).ready(function(){
    $("#liste").hide();

    var callback = function(){
        if($("#btnListe").text().trim() === "Afficher"){
            $("#btnListe").text("Masquer");
        }else{ $("#btnListe").text("Affcher");}
    }


    $("#btnListe").click(function(){
        $("#liste").slideToggle("show", callback);
    })

    $("#btn").click(function(){
        $(".defile").css({"left":"-30%","display":"block"});
        $(".defile").animate({left:"40%"}, 3000)
    })
})