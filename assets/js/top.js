const GAME_FPS = 1000/60;
const SCREEN_SIZE_WIDTH = 256;
const SCREEN_SIZE_HEIGHT = 36;

let vc = document.createElement("canvas");
let vctx = vc.getContext("2d");

let c = document.getElementById("can");
let ctx = can.getContext("2d");

vc.width = SCREEN_SIZE_WIDTH;
vc.height = SCREEN_SIZE_HEIGHT;

c.width = SCREEN_SIZE_WIDTH*3;
c.height = SCREEN_SIZE_HEIGHT*3;

ctx.mozimageSmoothingEnabled = false;
ctx.msimageSmoothingEnabled = false;
ctx.webkitimageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

// フレームレート維持用
let frameCount = 0;
let startTime;

let chImg = new Image();
chImg.src = "./assets/img/m_sprite.png";
// chImg.onload = draw;

// Mario Info
let oji_x = 20<<4;
let oji_y = 2<<4;  // hexadecimal 
let oji_vx = 0;
let oji_anime = 0; // 歩いているとき：1
let oji_sprite = 1;
let oji_acount = 0;
let oji_dir = 0;

function drawSprite(snum, x, y){
    let sx = (snum & 15) * 16;
    let sy = (snum >> 4) * 16;
    vctx.drawImage(chImg, sx, sy, 16, 32, x, y, 16, 32);
}

// 描画処理
function draw()
{
    // Draw Canvas
    vctx.fillStyle = "#66AAFF";
    vctx.fillRect(0, 0, SCREEN_SIZE_WIDTH, SCREEN_SIZE_HEIGHT);
    
    // draw OJI
    // vctx.drawImage(chImg, 16, 0, 16, 32, 100, 10, 64, 128);
    // vctx.drawImage(chImg, 0, 0, 16, 32, oji_x>>4, oji_y>>4, 16, 32);
    drawSprite(oji_sprite, oji_x>>4, oji_y>>4);

    // draw UI
    vctx.font = "24px 'Impact'";
    vctx.fillStyle = "#FFFFFF";
    // vctx.fillText("FRAME:" + frameCount, 10, 20);

    // draw virtual to real
    ctx.drawImage(vc, 0, 0, SCREEN_SIZE_WIDTH, SCREEN_SIZE_HEIGHT, 0, 0, SCREEN_SIZE_WIDTH*3, SCREEN_SIZE_HEIGHT*3);
}

// 更新処理
function update(){

    if (keyb.Left)
    {
        if(oji_anime == 0) oji_acount = 0;
        // oji_sprite = 48;
        oji_anime = 1;
        oji_dir = 1;
        if(oji_vx > -32) oji_vx -= 1;
        if(oji_vx > 0) oji_vx -= 1;
        if(oji_vx > 8) oji_anime = 2;
    }
    else if (keyb.Right)
    {
        if(oji_anime == 0) oji_acount = 0;
        // oji_sprite = 0;
        oji_anime = 1;
        oji_dir = 0;
        if(oji_vx < 32) oji_vx += 1;
        if(oji_vx < 0) oji_vx += 1;
        if(oji_vx < -8) oji_anime = 2;
    }
    else
    {
        if(oji_vx > 0) oji_vx -= 1;
        if(oji_vx < 0) oji_vx += 1;
        if(!oji_vx) oji_anime = 0;
    }
    
    oji_acount++;
    if(Math.abs(oji_vx) == 32) oji_acount++;

    if(oji_anime == 0) oji_sprite = 0;
    // else if(oji_anime == 1) oji_sprite = 2 + (oji_acount>>3);
    else if(oji_anime == 1) oji_sprite = 2 + (oji_acount/8)%3;
    else if(oji_anime == 2) oji_sprite = 5;

    if(oji_dir)oji_sprite += 48; // 左むいているとき

    // console.log(oji_vx);
    oji_x += oji_vx;
}

// setInterval(mainLoop, 1000/60);
window.onload = function()
{
    startTime = performance.now();
    mainLoop();
}

// メインループ
function mainLoop()
{
    let nowTime = performance.now();
    let nowFrame = (nowTime - startTime)/GAME_FPS;

    if (nowFrame > frameCount)
    {
        let c = 0;
        while(nowFrame > frameCount)
        {
            frameCount++;
            update();  // 更新処理
            if(++c >= 4)break;
        }
       draw();  // 描画処理
    }
    requestAnimationFrame(mainLoop);
}

// キーボード
let keyb = {};

document.onkeydown = function(e)
{
    if(e.keyCode == 37)keyb.Left = true;
    if(e.keyCode == 39)keyb.Right = true;
}

// キーボードが離されたとき
document.onkeyup = function(e)
{
    if(e.keyCode == 37)keyb.Left = false;
    if(e.keyCode == 39)keyb.Right = false;
}