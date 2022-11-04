const vhValue = window.innerHeight / 100;
const vwValue = window.innerWidth / 100;
//document.querySelectorAll(".uno > div").forEach(elem => elem.style.height = vwValue * 25 * 8 / 9 + "px")
const cupcake1 = document.getElementById("one");
const cupcake2 = document.getElementById("two");
const coloredImage = document.querySelectorAll(".color");

window.addEventListener("scroll", function() {
    let value = window.scrollY;
    const rect = document.querySelector(".uno").getBoundingClientRect();
    //document.querySelector(".title").innerHTML = value
    cupcake1.style.right = value * 1.75 + 50 * vwValue + "px" ;
    cupcake1.style.transform = `rotate(${value * 0.4}deg)`
    cupcake2.style.left = value * 1.75 + 50 * vwValue + "px";
    cupcake2.style.transform = `rotate(${- value * 0.4 + 77}deg)`
    if (rect["y"] <= vhValue * 37.9 + 35 && rect["y"] >= 211) {
        document.querySelector("#head").style.height = rect["y"] - 35 + "px";
    }
    if (rect["y"] <= 211) {
        document.querySelector(".sep").style.height = 158 + 53 + "px";
        cupcake1.remove();
        cupcake2.remove();
        document.querySelector("#cupcake-container").remove();
    }
})

coloredImage.forEach((elem, key) => elem.addEventListener("mouseover", function() {
    if (elem.style.opacity != "0") {
        elem.animate([
            {opacity: 100 + "%"},
            {opacity: 0}
            ], 1000)
        elem.style.opacity = 0;
        document.querySelectorAll(".uno img:not(.color)")[key].animate([
            {filter: `blur(${50}px)`},
            {filter: `blur(${0}px)`}
        ], 1000)
        document.querySelectorAll(".uno img:not(.color)")[key].style.filter = `blur(${0}px)`;
        document.querySelectorAll(".uno > div")[key].animate([
            {width: 25 + "%"},
            {width: 50 + "%"}
        ], 1000)
        document.querySelectorAll(".uno > div")[key].style.width = 50 + "%";
    }
}))