////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//    _         _              ___     ___          \\
//   |_/      _/_/             |_/     |_/   ***    \\
//  |_/_/    _/ _/             |_/    |_/    *@*    \\
//  |_/ _/  _/  _/             |_/   |_/     ***    \\
//  |_/  _/_/   _/             |_/  |_/      ___    \\
//  |_/   _/    _/             |_/ |_/       |_/    \\
//  |_/         _/             |_/_/         |_/    \\
//  |_/         _/   |_/_/_/   |_/ |_\       |_/    \\
//  |_/         _/ |_/    _/   |_/  |_\      |_/    \\
//  |_/         _/ |_/    _/   |_/   |_\     |_/    \\
//  |_/         _/  |_/_/_/    |_/    |_\    |_/    \\
//                                                  \\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// click for more bugs!
// Try to edit the code to make more bugs appear!
var radiance = 1;
var lampColor = color(43, 43, 43);
var lamp = 1; //1 for street lamp, 2 for old lamp


var light = function() {
    
    fill(255, 247, 0);
    noStroke();
    ellipse(200, 200, 30, 30);
    fill(255, 250, 117, 100);
    ellipse(200, 200, radiance, radiance);
    ellipse(200, 200, radiance+20, radiance+20);
    
    radiance++;
    
    if(radiance > 50) {
        radiance = 0;
    }

// street lamp
if(lamp === 1) {
    noStroke();
    fill(lampColor);
    arc(200, 200, 80, 70, 180, 360);
    arc(224, 200, 127, 55, 270, 360);
    rect(375, 210, 15, 190);
    
    stroke(lampColor);
    strokeWeight(6);
    noFill();
    arc(290, 325, 230, 260, 265, 317);
    arc(305, 335, 144, 260, 270, 347);

    noStroke();
    fill(255, 255, 255, 80);
    arc(200, 200, 80, 70, 0, 180);
    
    fill(61, 61, 61);
    rect(305, 195, 5, 10);
    rect(345, 210, 5, 20);
    
    noFill();
    stroke(61, 61, 61);
    strokeWeight(3);
    rect(373, 227, 18, 15);
    rect(373, 288, 18, 20);
    
    fill(61, 61, 61);
    arc(382, 210, 17, 30, 180, 360);
}

// Old lamp
if(lamp === 2) {
    fill(lampColor);
    triangle(140, 200, 200, 150, 260, 200);
    
    ellipse(200, 158, 30, 30);
    ellipse(200, 143, 20, 20);
    
    quad(190, 130, 200, 140, 210, 130, 200, 110);
    
    fill(158, 158, 158, 90);
    quad(140, 200, 165, 300, 235, 300, 260, 200);
    
    stroke(lampColor);
    line(139, 195, 165, 305);
    line(261, 195, 235, 305);
    line(165, 300, 235, 300);
    
    noFill();
    arc(164, 315, 52, 22, 275, 357);
    arc(232, 315, 42, 22, 187, 278);
    
    fill(lampColor);
    rect(190, 311, 21, 10);
    rect(192, 323, 17, 2);
    
    ellipse(201, 330, 27, 10);
    
    rect(194, 333, 13, 66);
}

};

var backDrop = function() {
    background(64, 87, 89); // Keep this for the base color
    fill(101, 67, 33); // Brown for the ground
    rect(0, height - 50, width, 50); // Ground rectangle

    // Add the "Click for more bugs" text
    fill(255, 192, 31); // Close to ground color
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Click for more bugs", width / 2, height - 20);
};

var bug = function() {
    this.x = width/2;
    this.y = height/2;
    this.tx = random(0, 1000);
    this.ty = random(0, 1000);
};

bug.prototype.display = function() {
    noStroke();
    fill(122, 109, 109, 150); // Light gray with transparency
    ellipse(this.x, this.y, 10, 10); // Gray circle
    fill(0, 0, 0); // Black for the center
    ellipse(this.x, this.y, 4, 4);   // Smaller black center
};

bug.prototype.move = function() {
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);
    this.tx += 0.005;
    this.ty += 0.005;
};

var b = new bug();
var bugList = [b];

var draw = function() {
    
backDrop();

    for (var i = 0; i < bugList.length; i++) {
        bugList[i].move();
        bugList[i].display();
    }

light();

if(bugList.length>1){
    for (var i = 1; i < bugList.length; i++) {
        bugList[i].move();
        bugList[i].display();
    }
}
};

// click the mouse for more bugs
mouseClicked = function() {
    bugList.push(new bug());

    if(bugList.length>4){ // resets back to 1 after 4
        bugList.splice(0,4); // removes 3 bugs
    }
};