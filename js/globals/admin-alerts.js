/*==---------------------------------------------------------====
    Administrative Alerts
====---------------------------------------------------------====
    Check the alert state of the session storage variable and
    only display it if the state does not equal "closed"
====---------------------------------------------------------==*/

var state = "";
try {
    state = sessionStorage.getItem("state");
} catch (err) {
    console.log(err); //probably a security exception on sessionStorage, so do nothing
}

if (state === "closed") {
    $(".administrative-alert").remove();
} else {
    $(".administrative-alert").show();
    $(".close-alert").click(function () {
        try {
            sessionStorage.setItem("state", "closed");
        } catch (err) {
            console.log(err); // can't save, do nothing
        }
        $(".administrative-alert").slideUp(150);
    });
}
