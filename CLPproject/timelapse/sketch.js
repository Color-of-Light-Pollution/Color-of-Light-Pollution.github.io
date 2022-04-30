/**
	By Acelaena

    Overview:
    A simple color-picker game that makes use of p5.clickable and p5.timer. 
    You have two seconds, get picking! 

	Notes:
    IMPORTANT NOTE:: PLEASE CLONE THE ENTIRE REPOSITORY 
    - to save myself a little sanity, all classes are now in JS_Classes so I don't accidentally modify 
    the wrong copy of the classes and continue scratching my head at why a bug still exists when I 
    definitely fixed it. 
    - i also modified p5.clickable and p5.timer. 
*/

const BGCOL = '#2a2a2a';
const WAIT = 1000;
var data;
var colorList;
var colorct = 0;
var TempList; 


//game handlers
var timer_wait;
var newSlide = true;



/**
    Keyboard navigation support. 
*/

function setup() {
    //remove scrollbar width because p5 smelly and I cant do my elegant no-scrollbar trick
    createCanvas(windowWidth, windowHeight-104);
    background(BGCOL);
    frameRate(20);
    
    //constant setup
    textSize(24);
    textFont("Source Sans Pro");
    data = document.getElementById("csv").innerHTML.trim().split("\n");
    colorList = data.filter(element => {
        return element !== '';
    });

    
    //timer setup
    timer_wait = new Timer(WAIT);
}

function draw() {
    fill('#fff'); 
    strokeWeight(0);
    textAlign(LEFT);
    
    if (newSlide){
        //bg color loop
        if (colorct == colorList.length){colorct = 0;}
        background(colorList[colorct]);
        
        //AQI
        textSize(24);
        text("AQI", 60, windowHeight-330);
        textSize(180);
        text("44", 40, windowHeight-204);
        
        //PM 
        textSize(24);
        text("Highest Pollutant:", 60, windowHeight-170);
        
        timer_wait.reset();
        colorct++;
        newSlide = false; 
    }

    
    
    if (timer_wait.expired()){
        newSlide = true;
    }
}
