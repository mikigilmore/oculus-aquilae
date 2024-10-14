//Image slider
$(document).ready(function () {
    const sliderContent = [
        {
            url: "img/846x600/appleblossoms.jpg",
            title: "Apple Blossoms",
            subtitle: "May 2018",
            description: '"And so the spring buds burst, and so I gaze,<br>And so the blossoms fall, and so my days..."<br>– Onitsura'
        },
        {
            url: "img/846x600/bleedinghearts.jpg",
            title: "Bleeding Hearts",
            subtitle: "April 2017",
            description: '"The most beautiful heart of all is the one that can still love even while it bleeds, and especially after its been broken into thousands of pieces."<br>– Sherrilyn Kenyon, <em>Styxx</em>'
        },
        {
            url: "img/846x600/blueflowers.jpg",
            title: "Blue Blossoms",
            subtitle: "May 2017",
            description: '"She had blue skin,<br>And so did he.<br>He kept it hid<br>And so did she.<br>They searched for blue<br>Their whole life through,<br>Then passed right by-<br>And never knew."<br>– Shel Silverstein, <em>Every Thing on It</em>'
        },
        {
            url: "img/846x600/cherryblossoms.jpg",
            title: "Cherry Blossoms",
            subtitle: "May 2018",
            description: '"In the cherry blossom\'s shade<br>there\'s no such thing<br>as a stranger."<br>– Kobayashi Issa'
        },
        {
            url: "img/846x600/chipmunk.jpg",
            title: "Chipmunk",
            subtitle: "March 2015",
            description: '"The clearest way into the Universe is through a forest wilderness."<br>– John Muir'
        },
        {
            url: "img/846x600/leaves.jpg",
            title: "Leaves",
            subtitle: "July 2016",
            description: '"I felt my lungs inflate with the onrush of scenery—air, mountains, trees, people. I thought, \'This is what it is to be happy.\'"<br>– Sylvia Plath, <em>The Bell Jar</em>'
        },
        {
            url: "img/846x600/orangetree.jpg",
            title: "Orange Tree",
            subtitle: "September 2015",
            description: '"When life gives you lemons, make lemonade, and then throw it in the face of the person who gave you the lemons until they give you the oranges you originally asked for."<br>– Cassandra Clare'
        },
        {
            url: "img/846x600/pinkpurpleflowers.jpg",
            title: "Wildflowers",
            subtitle: "April 2017",
            description: '"I know a bank where the wild thyme blows,<br>Where oxlips and the nodding violet grows,<br>Quite over-canopied with luscious woodbine,<br>With sweet musk-roses and with eglantine."<br>– William Shakespeare, <em>A Midsummer Night\'s Dream</em>'
        },
        {
            url: "img/846x600/pinktulips.jpg",
            title: "Pink Tulips",
            subtitle: "March 2016",
            description: '"I hated roses. I hated them for being so trite, so clichéd, a default, all-purpose flower that said I love you, I\'m sorry, and get well soon. Give me peonies and tulips, orchids or gardenia. Those were flowers with character."<br>– Justina Chen Headley, <em>North of Beautiful</em>'
        },
        {
            url: "img/846x600/plumtree.jpg",
            title: "Plum Tree",
            subtitle: "August 2018",
            description: '"I have eaten<br>the plums<br>that were in<br>the icebox<br><br>and which<br>you were probably<br>saving<br>for breakfast<br><br>Forgive me<br>they were delicious<br>so sweet<br>and so cold"<br><br>– William Carlos Williams, <em>This Is Just To Say</em>'
        },
        {
            url: "img/846x600/redtulips.jpg",
            title: "Red tulips",
            subtitle: "March 2018",
            description: '"But I have always thought that these tulips must have had names. They were red, and orange and red, and red and orange and yellow, like the ember in a nursery fire of a winter\'s evening. I remember them."<br>– Neil Gaiman, <em>Coraline</em>'
        },
        {
            url: "img/846x600/springbird.jpg",
            title: "Spring Bird",
            subtitle: "March 2017",
            description: '"When the bird of the heart begins to sing, too often will reason stop up her ears."<br>– Hans Christian Andersen'
        },
    ];

    $(slider);

    function slider() {
        let i; //index of thumbnail
        
        showSlider();
        prevButton();
        nextButton();
        exitSlider();
    }

    function showSlider() {
        $(".thumbnail").click(function () {
            $(".slider").fadeIn(700); //show slider
            $(".work").hide(); //hide thumbnails
            $("h1").css("cursor", "pointer"); //change h1's cursor to pointer
            $(window).scrollTop(0); //scroll to top of page

            i = $(this).closest(".work").find(".thumbnail").index(this); //get index of clicked thumbnail relative to .work div

            $(".fullsize").css("background-image", "url(" + sliderContent[i].url + ")"); //insert image
            $(".slider h2").text(sliderContent[i].title); //insert title
            $(".slider h3").text(sliderContent[i].subtitle); //insert subtitle
            $(".slider .description").html(sliderContent[i].description); //insert description
        });
    }

    function prevButton() {
        $(".prevbutton").click(function () {
            i--; //decrement index
            if (i < 0) { //if image is first in list, go to the last image
                i = sliderContent.length - 1;
            }
            $(".fullsize").hide().css("background-image", "url(" + sliderContent[i].url + ")").fadeIn(1000);
            $(".slider h2").hide().text(sliderContent[i].title).fadeIn(1000);
            $(".slider h3").hide().text(sliderContent[i].subtitle).fadeIn(1000); //insert subtitle
            $(".slider .description").hide().html(sliderContent[i].description).fadeIn(1000);
        });
    }

    function nextButton() {
        $(".nextbutton").click(function () {
            i++; //increment index
            if (i >= sliderContent.length) { //if image is last in list, go to the first image
                i = 0;
            }
            $(".fullsize").hide().css("background-image", "url(" + sliderContent[i].url + ")").fadeIn(1000);
            $(".slider h2").hide().text(sliderContent[i].title).fadeIn(1000);
            $(".slider h3").hide().text(sliderContent[i].subtitle).fadeIn(1000); //insert subtitle
            $(".slider .description").hide().html(sliderContent[i].description).fadeIn(1000);
        });
    }

    function exitSlider() {
        $(".slider .closebutton, .returntogallery, h1").click(function () {
            $(".work").fadeIn(700); //show thumbnails
            $(".slider").hide(); //hide slider
            $("h1").css("cursor", "default"); //change h1's cursor to default
        });
    }
});
