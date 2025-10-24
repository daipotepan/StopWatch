$(document).ready(function(){
    let Hour = 0, Min = 0, Sec = 0, mSec = 0
    let timer;

    $(".Start").click(function(){

        $(".Start").prop("disabled", true);
        $(".Stop, .Reset").prop("disabled", false);
        timer = setInterval(function(){
            mSec += 1;

            if(mSec == 10){
                Sec += 1;
                mSec = 0;

                if(Sec == 60){
                    Min += 1;
                    Sec = 0;

                    if(Min == 60){
                        Hour += 1;
                        Min = 0;
                    }
                }
            }

            $("#mSec").text(mSec);
            $("#Sec").text(Sec);
            $("#Min").text(Min);
            $("#Hour").text(Hour);

        }, 100);
    });

    $(".Stop").click(function(){
    if (timer) {
        clearInterval(timer);
        timer = undefined;
        $(".Stop").prop("disabled", true);
        $(".Start, .Reset").prop("disabled", false);
    }
});

$(".Reset").click(function(){
        clearInterval(timer);
        Hour = Min = Sec = mSec = 0;

        $("#Hour").text("0");
        $("#Min").text("0");
        $("#Sec").text("0");
        $("#mSec").text("0");

        $(".Reset").prop("disabled", true);
        $(".Start, .Stop").prop("disabled", false);
    });

    $(".Stop, .Reset").prop("disabled", true);
})