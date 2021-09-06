$(function () {
    function display(bool) {
        if (bool) {
            $("#icons").show();
        } else {
            $("#icons").hide();
        }
    }

    display(true)


    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    })

})