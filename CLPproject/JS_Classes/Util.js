function rand(min, max) {
  return Math.round(Math.random() * (max-min) + min);
}

function fontStyle(fsize = 16, color = "#000", align = LEFT, style = NORMAL, lineheight = fsize*1.2, font = null){
    fill(color);
    textSize(fsize);
    textAlign(align);
    textStyle(style);
    textLeading(lineheight);

    if (font!= null){
        textFont(font);
    }
}

function flip(){
    return rand (-1, 1) > 0; 
}

function findHighestPollutant(datalist){
    var a = "PM1.0s,PM2.5s,PM10s,PM10e,PM25e,PM100e,P03μm,P05μm,P10μm,P25μm,P50μm,P100μm".split(",");
    var b = datalist.split(",");
    
    for (var i = 0; i < b.length; i++){ 
        b[i] = parseInt(b[i], 10);
    }
    
    var maxVal = Math.max(...b);
    var maxValIndex = b.indexOf(maxVal);
    
    return "Highest Pollutant: "+ a[maxValIndex] + ": " + b[maxValIndex];
}

