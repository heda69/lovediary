var winWidth = $(window).width();
var ratio = winWidth / 1920;
var fontSize = {
  small: 12,
  medium: 14
};
var played = [0, 0, 0];
var vara = [];
var bodyFontSize = Math.max(16 * ratio, 10);
var posX = Math.max(80 * ratio, 30);
$("body").css("font-size", bodyFontSize + "px");
fontSize.small = Math.max(fontSize.small * ratio, 7);
fontSize.medium = Math.max(fontSize.medium * ratio, 10);
vara[0] = new Vara(
  "#vara-container1",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: " Jan 2024",
      textAlign: "right",
      y: 20,
      x: -30,
      delay: 500,
      duration: 2000,
      fontSize: fontSize.small
    },
    {
      text: "Thank you for forgiving me!",
      y: 40,
      x: posX,
      delay: 500,
      duration: 3200
    },
    {
      text: "out of your own volition!",
      id: "sphinx",
      x: posX,
      delay: 500,
      duration: 3200
    },
    {
      text: "and absolutely not coerced by the webpage! -->",
      delay: 1000,
      x: posX,
      duration: 3550
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[1] = new Vara(
  "#vara-container2",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: " Jan 2024",
      textAlign: "right",
      y: 20,
      x: -30,
      delay: 500,
      duration: 2000,
      fontSize: fontSize.small
    },
    {
      text: "I made this silly little thing for you,",
      y: 40,
      x: posX,
      delay: 500,
      duration: 3200
    },
    {
      text: "because I want to show you...",
      id: "sphinx",
      x: posX,
      delay: 500,
      duration: 3200
    },
    {
      text: "how cool (nerdy) I am. -->",
      delay: 1000,
      x: posX,
      duration: 3550
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[2] = new Vara(
  "#vara-container3",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: " Jan 2024",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -30,
      duration: 2000,
      fontSize: fontSize.small
    },
    {
      text: "Jokes aside... I want to tell you that I am sorry.",
      y: 20,
      x: posX,
      duration: 3200
    },
    {
      text: "I truly value what you say, and I strive to make you feel good with me... -->",
      x: posX,
      duration: 3200
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[3] = new Vara(
  "#vara-container4",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: " Jan 2024",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -30,
      duration: 2000,
      fontSize: fontSize.small
    },
    {
       text: "So I apologise for all the times that I haven't.",
      y: 20,
      x: posX,
      duration: 3200
    },
    {
      text: "I will improve and grow with you.",
      x: posX,
      duration: 3200
    },
    {
      text: "I love you deeply, mon coeur.",
      y: 20,
      color: "#3f51b5",
      id: "link",
      x: posX,
      duration: 3200
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[3].ready(function() {
  $(".front:not(.last)").click(function() {
    var ix = $(this)
      .parent(".paper")
      .index();
    $(".book").addClass("open");
    $(this)
      .parent(".paper")
      .addClass("open");
    if (!played[ix]) {
      vara[ix].playAll();
      vara[ix].animationEnd(function(i, o) {
        played[ix] = 2;
        if (i == "link") {
          var group = o.container;
          var rect = vara[3].createNode("rect", {
            x: 0,
            y: 0,
            width: o.container.getBoundingClientRect().width,
            height: o.container.getBoundingClientRect().height,
            fill: "transparent"
          });
          group.appendChild(rect);
          $(rect).css("cursor", "pointer");
          $(rect).click(function() {
            console.log(true);
            document.querySelector("#link").click();
          });
        }
      });
    }
  });
  $(".back").click(function() {
    if (
      $(this)
        .parent(".paper")
        .index() == 0
    )
      $(".book").removeClass("open");
    $(this)
      .parent(".paper")
      .removeClass("open");
  });
});