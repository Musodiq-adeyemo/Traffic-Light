function startTrafficSignal() {
    var green = document.getElementById("green");
    var red = document.getElementById("red");
    var yellow = document.getElementById("yellow");

    green.style.opacity = 1;
    setTimeout(() => {
        green.style.opacity = 0.4;
        red.style.opacity = 1;
        yellow.style.opacity = 0.4;
    }, 7000);

    setTimeout(() => {
        green.style.opacity = 0.4;
        red.style.opacity = 0.4;
        yellow.style.opacity = 1;
    }, 9000);

    setTimeout(() => {
        green.style.opacity = 1;
        red.style.opacity = 0.4;
        yellow.style.opacity = 0.4;
    }, 12000);
};
var timer = setInterval(() => {
    startTrafficSignal();
}, 12000);

startTrafficSignal();