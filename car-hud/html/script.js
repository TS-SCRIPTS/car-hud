$(function () {
    showCarHud(false)
    function showCarHud(bool) {
        if (bool) {
            $(".box").fadeIn(300);
        } else {
            $(".box").fadeOut(300);
        }
    }

    function initCarhud(data) {
        $(".numero").text(Math.round(data.speed) + "");
        $(".progressFuel").css("height", (data.fuel) * 0.18 + "");
        $(".marchas-texto").text((data.engine));
        $(".rpm").css("width", (data.speed) * 0.45 + "");
        showCarHud(true)
        if (data.engine == 0) {
            $(".marchas-texto").text("R");
        }
    }
    window.addEventListener('message',  function(event){
        let v =  event.data;
        if (v.action == 'speedometer') {
            initCarhud(v);
        } else if (v.action == 'hideSpeedo') {
            showCarHud(false);
        }
    })
});
