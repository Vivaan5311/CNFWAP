noseX=0;
noseY=0;

function preload() {
  moustache = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-4o3nOGv2ohkK_DYRvNKcfbaSwcrLPM26g&usqp=CAU');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
}

function draw() {

}

function take_snapshot(){
    save('myFilterImage.png');
}


