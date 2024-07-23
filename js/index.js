let colorObj = {
    Red:"rgb(255, 16, 16)",
    Blue:"rgb(24, 134, 197)",
    Orange:"rgb(255, 98, 0)",
    Yellow:"rgb(255, 251, 0)",
    Green:"rgb(60, 255, 0)"
}
function changeColor(){
    
    const keys = Object.keys(colorObj)
    const prop = keys[Math.floor(Math.random() * keys.length)]
    document.getElementById("colorname").innerText = prop
    document.getElementById("colorname").style.color = colorObj[prop]
    document.querySelector("#b").style.backgroundColor = colorObj[prop]
    document.querySelector(".btn").style.backgroundColor = colorObj[prop]
    // body.style.backgroundColor = colorObj[prop]
}

changeColor();