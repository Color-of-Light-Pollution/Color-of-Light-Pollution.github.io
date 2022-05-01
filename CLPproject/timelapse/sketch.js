/**
	By Acelaena
*/

const BGCOL = '#2a2a2a';
const WAIT = 1000;

//data
var data;
var dateList = [];
var colorList = [];
var pollList = [];
var weatherList = [];
var aqiList = []; 
var colorct = 0;


//animation handlers
var timer_wait;
var newSlide = true;


function setup() {
    //remove scrollbar width because p5 smelly and I cant do my elegant no-scrollbar trick
    createCanvas(windowWidth, windowHeight-104);
    background(BGCOL);
    frameRate(20);
    
    //constant setup
    textSize(24);
    textFont("Source Sans Pro");

    //get data
    data = document.getElementById("csv").innerHTML.trim().split("\n");
    data = data.filter(element => {
        return element !== '';
    });
    
    var dataSplit;
    for (var i = 0; i < data.length; i++){
        dataSplit = data[i].split (", ");
        dateList.push(dataSplit[0]);
        colorList.push(dataSplit[1]);
        pollList.push(dataSplit[2]);
        weatherList.push(dataSplit[3]);
        aqiList.push(dataSplit[4]);
    }
    

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
        text(aqiList[colorct], 40, windowHeight-204);
        
        //highest pollutant
        textSize(21);
        print(pollList[colorct]);
        text(findHighestPollutant(pollList[colorct]), 60, windowHeight-170);
        
        //Date & time & weather
        print(dateList[colorct]);
        text(datetimeParse(dateList[colorct]) + " | " + weatherList[colorct], 60, windowHeight-145);
                
        
        timer_wait.reset();
        colorct++;
        newSlide = false; 
    }

    
    
    if (timer_wait.expired()){
        newSlide = true;
    }
}
