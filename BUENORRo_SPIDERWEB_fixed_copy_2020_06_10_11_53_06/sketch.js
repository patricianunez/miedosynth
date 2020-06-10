function preload() {

  songa = loadSound('SOUND A.wav');
  songb = loadSound('SOUND B.wav');
  songc = loadSound('SOUND C.wav');
  songd = loadSound('SOUND D.wav');
  songe = loadSound('SOUND E.wav');
  songf = loadSound('SOUND F.wav');
  songg = loadSound('SOUND G.wav');
  songh = loadSound('SOUND H.wav');
  songi = loadSound('SOUND I.wav');
  songj = loadSound('SOUND J.wav');
  songk = loadSound('SOUND K.wav');
  songl = loadSound('SOUND L.wav');
  songm = loadSound('SOUND M.wav');
  songn = loadSound('SOUND N.wav');
  songo = loadSound('SOUND O.wav');
  songp = loadSound('SOUND P.wav');
  songq = loadSound('SOUND Q.wav');
  songr = loadSound('SOUND R.wav');
  songs = loadSound('SOUND S.wav');
  songt = loadSound('SOUND T.wav');
  songu = loadSound('SOUND U.wav');
  songv = loadSound('SOUND V.wav');
  songw = loadSound('SOUND W.wav');
  songx = loadSound('SOUND X.wav');
  songy = loadSound('SOUND Y.wav');
  songz = loadSound('SOUND Z.wav');

}

 

function make2DArray(rows, cols) {
  var arr = new Array(rows); //like arr[]; but with number of columns hardcoded
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

let ole;

let FFT;
let angle = 0;
//number of circles
let w = 90;
let cols;
let rows;
let curves;

let songr, amplitude;

let slider;

let topFreqs = [1, 2, 3, 4, 5]
let leftFreqs = [1, 2, 3, 4, 5]

let sliderVal;
function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(width / w) - 1;
  rows = floor(height / w) - 1;
  curves = make2DArray(rows, cols);

  fft = new p5.FFT(0, 512);
  amplitude = new p5.Amplitude();


   text1= 'slide'
  //textSize);
  //sliderVal = width/2;
  
/////////////////////////////////////SLIDE1///////////////////////
  
    //slider1 = createSlider(10, 250, 100);
   //slider1.position(10, 10);
   //slider1.style('width', '100px');


  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      curves[j][i] = new Curve();
    }
  }
  // songr.loop();

  //delay = new p5.Delay();

  // delay.process() accepts 4 parameters:
  // source, delayTime (in seconds), feedback, filter frequency

}

function draw() {
  background(0);
  let d = w - 0.2 * w;
  let r = d / 2;

  var spectrum = fft.analyze();
  topFreqs[0] = amplitude 
  leftFreqs[0] = mouseY / 100;
  
  
  /////////////CODE I AM TRYING TO LINK TO W (second slider)
  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 900);
  //ellipse(width/2, height/2, size, size);

  //curves[j][i]
  
 //w = slider1.value();
  //w = level  * width * 2 ;
  //w = level
  //angle = speed.value();


  noFill();
  stroke(255);

  //top circles
  for (let i = 0; i < cols; i++) {
    let cx = w + i * w + w / 2;
    let cy = w / 2;
    strokeWeight(1);
    // stroke(255);
    ellipse(cx, cy, d, d);
    let x = r * cos(angle * (i + 1) - HALF_PI);
    let y = r * sin(angle *  (i + 1) - HALF_PI);
    strokeWeight(8);
    // stroke(255);
    point(cx + x, cy + y);
    stroke(255, 150);
    strokeWeight(1);
    // line(cx + x, 0, cx + x, height);

    for (let j = 0; j < rows; j++) {
      curves[j][i].setX(cx + x);

    }
  }
  
  sliderVal =  map(w, 0, 24, 0, width);
   if(mouseIsPressed){
      sliderVal = mouseX;
     w = map(sliderVal, 0, width, 0, 100);
   }
  //bottom circles
  noFill();
  stroke(255);
  for (let j = 0; j < rows; j++) {
    let cx = w / 2;
    let cy = w + j * w + w / 2;
    strokeWeight(1);
    // stroke(255);
    ellipse(cx, cy, d, d);
    let x = r * cos(angle *  (j + 1) - HALF_PI);
    let y = r * sin(angle *  (j + 1) - HALF_PI);
    strokeWeight(8);
    // stroke(255);
    point(cx + x, cy + y);
    stroke(255, 150);
    strokeWeight(1);
    // line(0, cy + y, width, cy + y);

    for (let i = 0; i < cols; i++) {
      curves[j][i].setY(cy + y);
    }
  }
  let playBackSpeed = curves[0][0].returnCurrent().y;
  let feedBack = curves[0][0].returnCurrent().y;


  // songr.rate(playBackSpeed / 100);
  //delay.feedback(feedBack / 500);


  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      curves[j][i].addPoint();
      curves[j][i].show();

    }
  }




  angle = level * TWO_PI * 1;

  if (angle < -TWO_PI) {
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        curves[j][i].reset();
      }
    }
    // saveFrame("lissajous#####.png");
    angle = 0;
  }

  fill(255);
 textSize(20);
  strokeWeight(1);
  stroke(255)
  line(0, height - 40, width, height - 40);
  //text(text1, sliderVal - 10, 615);
  //noFill();
 ellipse(sliderVal, height - 40, 10,10);
  
}
function mousePressed(){
 for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        curves[j][i].reset();
      }
    }
    // saveFrame("lissajous#####.png");
    angle = 0;
  }


function keyTyped() {
  console.log(key)
  

  if (key === 'a') {
    songa.play();
    background(40);


  } else if (key === 'b') {
    songb.play();
    background(10);
  }
  if (key === 'c') {
    songc.play();
    background(40);

  } else if (key === 'd') {
    songd.play();
    background(10);
  }
  if (key === 'e') {
    songe.play();
    background(40);

  } else if (key === 'f') {
    songf.play();
    background(10);
  }
  if (key === 'g') {
    songg.play();
    background(40);

  } else if (key === 'h') {
    songh.play();
    background(10);
  }
  if (key === 'i') {
    songi.play();
    background(40);

  } else if (key === 'j') {
    songj.play();
    background(10);
  }
  if (key === 'k') {
    songk.play();
    background(40);

  } else if (key === 'l') {
    songl.play();
    background(10);
  }
  if (key === 'm') {
    songm.play();
    background(40);

  } else if (key === 'n') {
    songn.play();
    background(10);
  }
  if (key === 'o') {
    songo.play();
    background(40);

  } else if (key === 'p') {
    songp.play();
    background(10);
  }
  if (key === 'q') {
    songq.play();
    background(40);

  } else if (key === 'r') {
    songr.play();
    background(10);
  }
  if (key === 's') {
    songs.play();
    background(40);

  } else if (key === 't') {
    songt.play();
    background(10);
  }
  if (key === 'u') {
    songu.play();
    background(40);

  } else if (key === 'v') {
    songv.play();
    background(10);
  }
  if (key === 'w') {
    songw.play();
    background(40);

  } else if (key === 'x') {
    songx.play();
    background(10);
  }
  if (key === 'y') {
    songy.play();
    background(40);

  } else if (key === 'z') {
    songz.play();
    background(10);
  }
}
  
  
 