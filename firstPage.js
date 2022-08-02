const backgroundColors = [0xC0392B, 0x884EA0, 0x2471A3, 0x17A589, 0xF39C12, 0xA6ACAF];
let soundTextvalue = "Sound:On";
let soundOn = true;
//let soundOf = false;


if (localStorage.hasOwnProperty("sound")) {

    soundOn = localStorage.getItem("sound");
    if(soundOn == "on"){
        soundTextvalue = "Sound:On";
    }
    else{
        soundTextvalue = "Sound:Off";
    }
} else {
    soundOn = "on";
    localStorage.setItem("sound", soundOn);
}


localStorage.setItem("TimeD",false)

let app = new PIXI.Application({
    width: 240,
    height: 320,
    backgroundColor:  backgroundColors[Math.floor(Math.random()*backgroundColors.length)]

});

document.body.appendChild(app.view);


const firstTextStyle = new PIXI.TextStyle({
    align: "center",
    fill: "white",
    fontSize: 30,
   // wordWrap: true,
    //wordWrapWidth: 130
});
const firstText = new PIXI.Text('IBI', firstTextStyle);
firstText.anchor.set(0.5, 0.5);
firstText.x = 200;
firstText.y = 20;
app.stage.addChild(firstText);  

const star1 = new PIXI.Sprite.from("staar.png");
star1.anchor.set(0.5);
star1.scale.set(0.03, 0.03);
star1.x = 110;
star1.y = 40;

const star2 = new PIXI.Sprite.from("staar.png");
star2.anchor.set(0.5);
star2.scale.set(0.03, 0.03);
star2.x = 50;
star2.y = 40;

const star3 = new PIXI.Sprite.from("staar.png");
star3.anchor.set(0.5);
star3.scale.set(0.03, 0.03);
star3.x = 80;
star3.y = 20;

const star4 = new PIXI.Sprite.from("staar.png");
star4.anchor.set(0.5);
star4.scale.set(0.03, 0.03);
star4.x = 80;
star4.y = 60;

app.stage.addChild(star1,star2,star3,star4);

app.ticker.add((delta) => {
    star1.rotation += 0.06 * delta;
    star2.rotation += 0.06 * delta;
    star3.rotation += 0.06 * delta;
    star4.rotation += 0.06 * delta;
});

const title = new PIXI.Sprite.from("snake.png");
title.anchor.set(0.5);
title.scale.set(0.4, 0.4);
title.x = 120;
title.y = 170;

app.stage.addChild(title);




const soundTextStyle = new PIXI.TextStyle({
    align: "left",
    fill: "white",
    fontSize: 15
});

const TextStyle = new PIXI.TextStyle({
    align: "center",
    fill: "white",
    fontSize: 20,
   // wordWrap: true,
    //wordWrapWidth: 130
});
const Text = new PIXI.Text('Press any key to play', TextStyle);
Text.anchor.set(0.5, 0.5);
Text.x = 120;
Text.y = 280;
app.stage.addChild(Text);
const soundText = new PIXI.Text(soundTextvalue, soundTextStyle);
soundText.x = 5;
soundText.y = 300;
app.stage.addChild(soundText);

function soundToggle(){
   
    if(soundOn == "on"){
        soundText.text = "Sound:off"
        soundOn = "off";
    }
    else{
        
        soundText.text = "Sound:on"
        soundOn = "on";
    }
    localStorage.setItem("sound", soundOn);
    /*else {
        soundOn = "on";
        localStorage.setItem("sound", soundOn);
    }*/
    //localStorage.setItem("sound", soundOn);
}

document.addEventListener("keydown", handleKeyDown);
function handleKeyDown(et) {
    
    if (et.code == "Enter") {
        startGame();
    }
    else
    soundToggle();
    

};

function startGame() {
    window.open("index.html", "_self");
}