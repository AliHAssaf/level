$(document).ready(function(){
    $("#inputCheckIn").datepicker();
    $("#inputCheckOut").datepicker();

    $(".level-slider").slick({
        dots: true,
        slidesToShow: 2,
        arrows: false
    });

    function videoToggle(){
        video = $(".level-video").get(0);
        if (video.paused) {
            video.play();
            $(".video-control-play").hide();
            $(".video-control-pause").show();
        } else {
            video.pause();
            $(".video-control-play").show();
            $(".video-control-pause").hide();
        }
    };
    $(".video-control-play").on("click",function(){
        videoToggle();
    });
    $(".video-control-pause").on("click",function(){
        videoToggle();
    });
})