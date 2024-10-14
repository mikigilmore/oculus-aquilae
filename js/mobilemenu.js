//Mobile menu

$(document).ready(function () {
    $(mobileMenu)

    function mobileMenu() {
        showMenu();
        hideMenu();
    }

    function showMenu() {
        $(".hamburgericon").click(function () {
            $(".mobilemenu").css("width", "80%"); //show menu
            $(".overlay").fadeIn(); //show overlay
        });
    }

    function hideMenu() {
        $(".mobilemenu .closebutton").click(function () {
            $(".mobilemenu").css("width", "0%"); //hide menu
            $(".overlay").fadeOut(); //hide overlay
        })
    }
});
