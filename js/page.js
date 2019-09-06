/**
 * Created by syx on 2017/4/20.
 */

var myclick = function(v) {
        var llis = document.getElementsByTagName("li");
        for(var i = 0; i < llis.length; i++) {
            var lli = llis[i];
            if(lli == document.getElementById("page" + v)) {
                lli.style.backgroundColor = "#fff";
                lli.style.color="#000";
                lli.style.border="1px solid #000";
                lli.style.border.Bottom="#000";
            } else {
                lli.style.backgroundColor = "#000";
                lli.style.color="#fff";
                lli.style.border="1px solid #000";
                lli.style.border.Bottom="#000";
            }
        }

        var divs = document.getElementsByClassName("page1_1");
        for(var i = 0; i < divs.length; i++) {

            var divv = divs[i];

            if(divv == document.getElementById("tab" + v + "_content")) {
                divv.style.display = "block";
            } else {
                divv.style.display = "none";
            }
        }

    }