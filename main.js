let canvas = document.getElementById("snake"); 
let context = canvas.getContext("2d"); 
var audio = new Audio("sound/wrong.wav");
var audio2 = new Audio("sound/eat.wav");
let box = 20;
let snake = []; 
const soundOn = localStorage.getItem("sound");

snake[0] ={
    x: 4 * box,
    y: 8 * box
}
let direction = "right";
let food ={
    x: Math.floor(Math.random() * 10 + 1) * box,
    y: Math.floor(Math.random() * 14 + 1) * box
}

function createBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16*box, 16*box); 
}

function createsnake(){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood (){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}


document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

function init(){    

    if(snake[0].x > 11*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 11 * box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 15 * box;
    
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y ){          
            audio.play();
            clearInterval(Game);
            
            alert('Game Over :(');
            
            window.open("firstPagee.html", "_self");
        }
    }

    createBG();
    createsnake();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); 
    }else{
        audio2.play();
        food.x = Math.floor(Math.random() * 10 +1) * box;
        food.y = Math.floor(Math.random() * 14 +1) * box;
    }
    
    let newHead ={
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); }

let Game = setInterval(init, 100);