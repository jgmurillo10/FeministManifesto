var twentieth = function(s) {

  let xspacing = 4;   // How far apart should each horizontal location be spaced
  let w;              // Width of entire wave
  let theta1 = 180.0;  // Start angle at 0
  let theta2 = 90.0;  // Start angle at 0
  let amplitude1 = 75;  // Height of wave default 75
  let amplitude2 = 100;
  let period1 = 500.0;  // How many pixels before the wave repeats 
  let period2 = 1100.0;
  let dx1;  // Value for incrementing X, a function of period and xspacing
  let dx2;
  let yvalues1;  // Using an array to store height values for the wave
  let yvalues2;
  let posX1 = -s.displayWidth/2;
  let posX2 = s.displayWidth/2;
  let color1 = '#21f4f4';
  let color2 = '#ff83ff';
  let homeColor;
  let principlesColor;
  s.setup = function() {
    homeColor = '#ff83ff';
    principlesColor = '#ff83ff';
    w = s.displayWidth+16;
    dx1 = (s.TWO_PI / period1) * xspacing;
    dx2 = (s.TWO_PI / period2) * xspacing;
    yvalues1 = new Array(w/xspacing);
    yvalues2 = new Array(w/xspacing);

    //  s.fill('#FF83FF');
    // s.stroke(s.lerpColor(s.color('#FF83FF'), s.color('#731DD3'), 1));
    // s.strokeWeight(20);
    // s.rect(s.windowWidth/2 - 110, s.windowHeight/2 - 160, 210, 300);

  };

  s.draw = function() {
    //updates de position in X axis for left and right curve
    posX1=posX1+8;
    posX2=posX2-8;

    s.createCanvas(s.displayWidth, s.displayHeight);
    s.background('#fff');

    //draw the curves
    s.blendMode(s.MULTIPLY);
    // check if the curves mixed completely
    if(posX1 > s.displayWidth/w  && posX2 < -s.displayWidth/2) {
      // render static wave without recalculing the yvalues
      s.renderWave(s.displayWidth/2, true);
      s.renderWave(-s.displayWidth/2, false);
    }
    else {
      //recalcules the yvalues for the left and right curves
      s.calcWave(true);
      s.calcWave(false);
      // render the left and right curve and moves in the x axis to posX1 and posX2 respectively
      s.renderWave(posX1, true);
      s.renderWave(posX2, false);
    }


     s.blendMode(s.NORMAL);
    //Menu
    s.textFont('Futura');
    s.fill(homeColor);
    s.textStyle(s.BOLD);
    s.textSize(12);
    s.text('i n i c i o', s.windowWidth/2 - 110, 30);
    s.rect(s.windowWidth/2 - 68, 35, 12, 6);
    s.fill(principlesColor);
    s.text('p r i n c i p i o s', s.windowWidth/2, 30);
    s.rect(s.windowWidth/2 + 86, 35, 12, 6);

    //Rectangle
    s.fill(255);
    s.text('P R I N C I P I O   # 5', s.windowWidth/2 - 75, s.windowHeight/2 - 170);

    //Principle
    let deltaXText = 23; // delta text in x axis used for align the text
    s.textFont('Futura');
    s.noStroke();
    s.fill(255);
    s.textStyle(s.NORMAL);
    s.textSize(35);
    s.text('EL', s.windowWidth/2 -20, s.windowHeight/2 - 110);
    s.textStyle(s.BOLD);
    s.textSize(50);
    s.text('FEMINISMO', s.windowWidth/2 - 180 + deltaXText, s.windowHeight/2 -35  );
    s.textStyle(s.NORMAL);
    s.textSize(47);
    s.text('RECONOCE Y', s.windowWidth/2 - 180 + deltaXText, s.windowHeight/2 + 30);
    s.textStyle(s.NORMAL);
    s.textSize(38);
    s.text('TRABAJA EN SUS', s.windowWidth/2 - 180 + deltaXText, s.windowHeight/2 + 30 + 57);
    s.textStyle(s.BOLD);
    s.textSize(30);
    s.text('CONTRADICCIONES', s.windowWidth/2 - 180 + deltaXText, s.windowHeight/2 + 30 + 105);

    //Arrow
    var mx = s.windowWidth/2 - 10;
    var my = s.windowHeight - 60;

    if(s.mouseInsideArrow()) {
      s.cursor(s.HAND);
      s.fill('#21F4F4');
    } else {
      s.cursor(s.ARROW);
      s.fill('#FFFFFF');
    }
    s.noStroke();
    s.beginShape();
    s.vertex(mx, my);
    s.vertex(mx + 20, my);
    s.vertex(mx + 20, my + 20);
    s.vertex(mx + 30, my + 20);
    s.vertex(mx + 10, my + 40);
    s.vertex(mx - 10, my + 20);
    s.vertex(mx, my + 20);
    s.vertex(mx, my);
    s.endShape(s.CLOSE);

  };

  s.calcWave = function(left) {
    // Increment theta (try different values for 'angular velocity' here
    let deltaTheta;
    if (left) {
      deltaTheta = 0.15 
      theta1 += deltaTheta;
    } else {
      deltaTheta = 0.08;
      theta2 += deltaTheta;
    }
    
    // let yvalues = curve === 'right' ? yvalues2 : yvalues1;
    // For every x value, calculate a y value with sine function
    // console.log(yvalues1, yvalues2)
    let x = left ? theta1 : theta2;
    for (let i = 0; i < yvalues1.length; i++) {
      if(left) {
        yvalues1[i] = s.sin(x)*amplitude1;
        x+=dx1;
      } else {
        yvalues2[i] = s.sin(x)*amplitude2;
        x+=dx2;
      }
    }
  }
  s.renderWave = function(posX, left) {
    s.noStroke();
    let color = left ? color1 : color2;
    s.fill(color);
    let yvalues = left ? yvalues1 : yvalues2;

    // A simple way to draw the wave with an ellipse at each location

    for (let x = 0; x < yvalues.length; x++) {
      // s.ellipse(s.displayHeight/2+yvalues[x] + posX, x*xspacing, 16, 16);
      if(left) {
        s.rect(yvalues[x]-s.displayHeight*2.5 + posX, x*xspacing, s.displayWidth*2.1, 4);
      }
      else {
        s.rect(s.displayHeight/2+yvalues[x] + posX, x*xspacing, s.displayWidth*2, 4);
      }
      
    }
  }
  s.mouseInsideArrow = function() {
    var mx = s.windowWidth/2 - 10;;
    var my = s.windowHeight - 60;

    //Check if the mouse is inside the arrow's rectangle
    var dx = s.mouseX - mx;
    var dy = s.mouseY - my;
    if(0 < dx && dx < 20 && 0 < dy && dy < 20) {
      return true;
    } else {
      //Check if the mouse is inside the arrow's left triangle
      var lx = Math.abs(s.mouseX - mx + 10);
      var ly = Math.abs(s.mouseY - my - 20);
      if(lx < 20 && ly < 20 && lx > ly) {
        return true;
      } else {
        //Check if the mouse is inside the arrow's right triangle
        var rx = 20 - Math.abs(s.mouseX - mx - 10);
        var ry = Math.abs(s.mouseY - my - 20);
        if(rx < 20 && ry < 20 && rx > ry) {
          return true;
        }
        return false;
      }
    }
  };
  

}

var twentieth = new p5(twentieth, 'twentieth');
