<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>p5.js example</title>
      
    <link rel="stylesheet" href="../../styles/style.css">
    <link rel="stylesheet" href="../../styles/header.css">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet">
      
    <style> body {padding: 0; margin: 0;} </style>
    <script src="../JS_Classes/p5.js"></script>
    <script src="../JS_Classes/Util.js"></script>
    <script src="../JS_Classes/p5.timer.js"></script>
    <script src="../JS_Classes/p5.clickable.js"></script>
    <script src="../JS_Classes/Pixel.js"></script>
    <script src="sketch.js"></script> 

    <header class="header" style="background-color: transparent">
        <div class="left">
            <h1>Color of Light &amp; Pollution</h1>
            <p>Visualizing the Impact of Pollution</p>
        </div>

        <div class="right">
            <a href="../" class="first" >
            Home</a><a href="../about/">
            About</a><a href="../timelapse/" >
            Timelapse</a><a href="../data/">
            Data</a><a href="../team/" class="last">
        Team</a>
        </div>    
    </header>
    <!--END HEADER -->

  </head>
  <body>
      <div id = "sketch-container" style="display:none">
      </div>
      <div id="csv" style="display: block; white-space: pre-wrap">
<?php
	$host = "host = testdb.cgrgtmi7chsu.us-west-1.rds.amazonaws.com";
	$port = "port = 5432";
	$dbname = "dbname = postgres";
	$dbuser = "user = postgres";
	$password = "password = CatsTesting";
	$conn = pg_connect("$host $port $dbname $dbuser $password");


	$result = pg_query($conn,"SELECT * FROM tempcombine");
	$i = 0;
	while($row = pg_fetch_assoc($result)) {
		echo $row["datetime"] .", ".
            $row["r"] . "," .
            $row["g"] . "," .
            $row["b"] . "," .
            $row["pm1dot0_s"].",". 
            $row["pm2dot5_s"].",".
            $row["pm10_s"].",".
            $row["pm10_e"].",".
            $row["pm25_e"].",".
            $row["pm100_e"].",".
            $row["p03um"].",".
            $row["p05um"].",".
            $row["p10um"].",".
            $row["p25um"].",".
            $row["p50um"].",".
            $row["p100um"].", ".
            $row["condition"].", ".
            $row["aqi"].", ".
            
            "<br>";
        
        
		$i++;
	}
?>
  
          </div>
  </body>
<footer>
        <div class="foot">
            <h3>Color of Light &amp; Pollution</h3>
            <a> <a href="../"> Home</a></a>
            <a> | </a>
            <a> <a href ="../about/"> About</a></a>
            <a> | </a>
            <a> <a href ="../timelapse/"> Timelapse</a></a>
            <a> | </a>
            <a> <a href ="../data/"> Data</a></a>
            <a> | </a>
            <a> <a href ="../team/"> Team</a></a> 
        </div> 
    </footer>
</html>
