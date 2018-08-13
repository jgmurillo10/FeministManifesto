var home = function(s) {

  var arrowColor;
  var homeColor;
  var principlesColor;
  var logo;
  var logo2;
  var logo3;
  var logo5;
  var logo6;
  var logo7;
  var logo8;
  var released;
  var mobile;
  var x;
  var y;
  var onLetters;


  s.setup = function() {
    onLetters = false;
    x = 0;
    y = 0;
    released = true;
    arrowColor = '#731dd3';
    homeColor = '#731dd3';
    principlesColor = '#731dd3';
    logo = s.loadImage('assets/logo.png');
    logo2 = s.loadImage('assets/logo2.png');
    logo3 = s.loadImage('assets/logo3.png');
    logo5 = s.loadImage('assets/logo5.png');
    logo6 = s.loadImage('assets/logo6.png');
    logo7 = s.loadImage('assets/logo7.png');
    logo8 = s.loadImage('assets/logo8.png');
    s.noStroke();
    s.textFont('Futura');
    s.fill(homeColor);
    s.textStyle(s.BOLD);
    s.textSize(12);
    s.background('#FFFFFF');

    //Canvas
    s.createCanvas(s.windowWidth, s.windowHeight);

    //Detect mobile
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      mobile = true;
    } else {
      mobile = false;
    }

  };

  s.windowResized = function() {
    s.resizeCanvas(s.windowWidth, s.windowHeight);
  };

  s.draw = function() {

    if(s.select('#home').style('display') == 'block') {
      // console.log("Home");

      //Background
      s.background('#FFFFFF');
      s.paintLogo();

      //Arrow
      var mx = s.windowWidth - 60;
      var my = s.windowHeight/2 - 10;

      s.fill(arrowColor);
      s.beginShape();
      s.vertex(mx, my);
      s.vertex(mx, my - 20);
      s.vertex(mx + 20, my - 20);
      s.vertex(mx + 20, my - 30);
      s.vertex(mx + 40, my - 10);
      s.vertex(mx + 20, my + 10);
      s.vertex(mx + 20, my);
      s.vertex(mx, my);
      s.endShape(s.CLOSE);

    }
  };

  s.paintLogo = function() {
    if(onLetters) {
      //Paint letters only
      if( mobile ) {
        if(y > 0 && y < 40) {
          s.background('#FF82FF');
          arrowColor = '#FF8284';
          s.image(logo5, 2*s.windowWidth/14, s.windowHeight/2 - 4*s.windowWidth/14, 4*s.windowWidth/7, 4*s.windowWidth/7);
        } else if(y > 40 && y < 80) {
          s.background('#FFFF84');
          arrowColor = '#FF8284';
          s.image(logo5, 2*s.windowWidth/14, s.windowHeight/2 - 4*s.windowWidth/14, 4*s.windowWidth/7, 4*s.windowWidth/7);
        } else if(y > 80 && y < 120) {
          s.background('#21F3F3');
          arrowColor = '#217CF3';
          s.image(logo8, 2*s.windowWidth/14, s.windowHeight/2 - 4*s.windowWidth/14, 4*s.windowWidth/7, 4*s.windowWidth/7);
        } else if(y > 120 && y < 160) {
          s.background('#D9FF7D');
          arrowColor = '#04E873';
          s.image(logo6, 2*s.windowWidth/14, s.windowHeight/2 - 4*s.windowWidth/14, 4*s.windowWidth/7, 4*s.windowWidth/7);
        } else if(y > 160 && y < 200) {
          s.background('#731DD2');
          arrowColor = '#E61DFF';
          s.image(logo7, 2*s.windowWidth/14, s.windowHeight/2 - 4*s.windowWidth/14, 4*s.windowWidth/7, 4*s.windowWidth/7);
        }
      } else {
        if(y > 0 && y < 40) {
          s.background('#FF82FF');
          arrowColor = '#FF8284';
          s.image(logo5, 2*s.windowWidth/7, s.windowHeight/2 - 3*s.windowWidth/14, 3*s.windowWidth/7, 3*s.windowWidth/7);
        } else if(y > 40 && y < 80) {
          s.background('#FFFF84');
          arrowColor = '#FF8284';
          s.image(logo5, 2*s.windowWidth/7, s.windowHeight/2 - 3*s.windowWidth/14, 3*s.windowWidth/7, 3*s.windowWidth/7);
        } else if(y > 80 && y < 120) {
          s.background('#21F3F3');
          arrowColor = '#217CF3';
          s.image(logo8, 2*s.windowWidth/7, s.windowHeight/2 - 3*s.windowWidth/14, 3*s.windowWidth/7, 3*s.windowWidth/7);
        } else if(y > 120 && y < 160) {
          s.background('#D9FF7D');
          arrowColor = '#04E873';
          s.image(logo6, 2*s.windowWidth/7, s.windowHeight/2 - 3*s.windowWidth/14, 3*s.windowWidth/7, 3*s.windowWidth/7);
        } else if(y > 160 && y < 200) {
          s.background('#731DD2');
          arrowColor = '#E61DFF';
          s.image(logo7, 2*s.windowWidth/7, s.windowHeight/2 - 3*s.windowWidth/14, 3*s.windowWidth/7, 3*s.windowWidth/7);
        }
      }
      if(y == 200){
        y = 0;
      } else {
        y++;
      }
    } else {
      //Paint logo
      s.background('#FFFFFF');
      if( mobile ) {
        s.image(logo, 2*s.windowWidth/14, s.windowHeight/2 - 4*s.windowWidth/14, 4*s.windowWidth/7, 4*s.windowWidth/7);
        // if(x > 0 && x < 120) {
        //   s.image(logo, 2*s.windowWidth/14, s.windowHeight/2 - 4*s.windowWidth/14, 4*s.windowWidth/7, 4*s.windowWidth/7);
        // } else if(x > 40 && x < 80) {
        //   s.image(logo2, 2*s.windowWidth/14, s.windowHeight/2 - 4*s.windowWidth/14, 4*s.windowWidth/7, 4*s.windowWidth/7);
        // } else if(x > 80 && x < 120) {
        //   s.image(logo3, 2*s.windowWidth/14, s.windowHeight/2 - 4*s.windowWidth/14, 4*s.windowWidth/7, 4*s.windowWidth/7);
        // }
      } else {
        s.image(logo, 2*s.windowWidth/7, s.windowHeight/2 - 3*s.windowWidth/14, 3*s.windowWidth/7, 3*s.windowWidth/7);
        // if(x > 0 && x < 120) {
        //   s.image(logo, 2*s.windowWidth/7, s.windowHeight/2 - 3*s.windowWidth/14, 3*s.windowWidth/7, 3*s.windowWidth/7);
        // } else if(x > 40 && x < 80) {
        //   s.image(logo2, 2*s.windowWidth/7, s.windowHeight/2 - 3*s.windowWidth/14, 3*s.windowWidth/7, 3*s.windowWidth/7);
        // } else if(x > 80 && x < 120) {
        //   s.image(logo3, 2*s.windowWidth/7, s.windowHeight/2 - 3*s.windowWidth/14, 3*s.windowWidth/7, 3*s.windowWidth/7);
        // }
      }
      // if(x == 120){
      //   x = 0;
      // } else {
      //   x++;
      // }
    }
  };

  s.mouseInsideLetters = function() {
    var x1 = s.windowWidth/7;
    var x2 = 5*s.windowWidth/7;
    var y1 = s.windowHeight/2 - s.windowWidth/14;
    var y2 = s.windowHeight/2 + s.windowWidth/14;
    if(mobile) {
      if(s.mouseX > x1 && s.mouseX < x2 && s.mouseY > y1 && s.mouseY < y2) {
        return true;
      }
    } else {
      x1 = 2*s.windowWidth/7;
      x2 = 5*s.windowWidth/7;
      if(s.mouseX > x1 && s.mouseX < x2 && s.mouseY > y1 && s.mouseY < y2) {
        return true;
      }
    }
    return false;
  }

  s.mouseInsideArrow = function() {
    var mx = s.windowWidth - 60;
    var my = s.windowHeight/2 - 10;

    //Check if the mouse is inside the arrow's rectangle
    var dx = s.mouseX - mx;
    var dy = s.mouseY - my;
    if(0 < dx && dx < 20 && -20 < dy && dy < 0) {
      return true;
    } else {
      //Check if the mouse is inside the arrow's lower triangle
      var lx = 20 - Math.abs(s.mouseX - mx - 20);
      var ly = Math.abs(s.mouseY - my + 10);
      if(lx < 20 && ly < 20 && lx > ly) {
        return true;
      } else {
        //Check if the mouse is inside the arrow's upper triangle
        var ux = 20 - Math.abs(s.mouseX - mx - 20);
        var uy = Math.abs(s.mouseY - my + 20);
        if(ux < 20 && uy < 20 && ux > uy) {
          return true;
        }
        return false;
      }
    }
  };

  s.mouseInsideHome = function() {
    var hx1 = s.windowWidth/2 - 110;
    var hx2 = s.windowWidth/2 - 50;
    var hy1 = 10;
    var hy2 = 50;
    if( s.mouseX > hx1 && s.mouseX < hx2 && s.mouseY > hy1 && s.mouseY < hy2 ) {
      return true;
    } else {
      return false;
    }
  };

  s.mouseInsidePrinciples = function() {
    var hx1 = s.windowWidth/2;
    var hx2 = s.windowWidth/2 + 100;
    var hy1 = 10;
    var hy2 = 50;
    if( s.mouseX > hx1 && s.mouseX < hx2 && s.mouseY > hy1 && s.mouseY < hy2 ) {
      return true;
    } else {
      return false;
    }
  };

  s.mousePressed = function() {
    if( mobile ) {
      if( !released ) {
        return false;
      }
      released = false;
      if(s.mouseInsideArrow()) {
        s.next();
      } else if(s.mouseInsideHome()) {
        s.home();
      } else if(s.mouseInsidePrinciples()) {
        s.first();
      }
    }
  };

  s.mouseReleased = function() {
    if( mobile ) {
      released = true;
      return false;
    }
  };

  s.mouseClicked = function() {
    if( !mobile ) {
      if(s.mouseInsideArrow()) {
        s.next();
      } else if(s.mouseInsideHome()) {
        s.home();
      } else if(s.mouseInsidePrinciples()) {
        s.first();
      }
    }
  };

  s.mouseMoved = function() {
    if(s.mouseInsideArrow()){
      arrowColor = '#e61dff';
      backgroundColor = '#DAFF7D';
      onLetters = false;
      s.cursor(s.HAND);
    } else if(s.mouseInsideHome()) {
      onLetters = false;
      homeColor = '#e61dff';
      s.cursor(s.HAND);
    } else if(s.mouseInsidePrinciples()) {
      onLetters = false;
      principlesColor = '#e61dff';
      s.cursor(s.HAND);
    } else if(s.mouseInsideLetters()) {
      onLetters = true;
    } else {
      onLetters = false;
      backgroundColor = '#FFFFFF';
      homeColor = '#731dd3';
      principlesColor = '#731dd3';
      arrowColor = '#731dd3';
      if(s.mouseX != 0 && s.mouseY != 0) {
        s.cursor(s.ARROW);
      }
    }
  };

  s.next = function() {
    s.select('#intro').show();
    s.select('#home').hide();
  };

  s.home = function() {
    //Do nothing
  };

  s.first = function() {
    s.select('#p1_1').show();
    s.select('#home').hide();
  };

}

var home = new p5(home, 'home');
