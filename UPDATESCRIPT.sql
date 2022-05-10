\copy webdata from 'WebData.csv' with DELIMITER ',';
\copy sensordata from 'SensorData.csv' with DELIMITER ',';
\copy colordata from '/Users/acelaena/Downloads/ColorData.csv' with DELIMITER ',';

DROP TABLE tempweather;
CREATE TABLE tempweather as SELECT distinct(datetime), condition FROM webdata ORDER BY datetime;
DELETE FROM tempweather
WHERE ctid NOT IN (
  SELECT MIN(ctid)
  FROM tempweather
  GROUP BY datetime
);

DROP TABLE tempaqi;
CREATE TABLE tempaqi as SELECT datetime, trunc(avg(aqi),0) as aqi FROM webdata GROUP BY datetime ORDER BY datetime;

DROP TABLE temppm; 
CREATE TABLE temppm as SELECT datetime, trunc(avg(pm1dot0_s),0) as pm1dot0_s, trunc(avg(pm2dot5_s),0) as pm2dot5_s, trunc(avg(pm10_s),0) as pm10_s, trunc(avg(pm10_e),0) as pm10_e, trunc(avg(pm25_e),0) as pm25_e, trunc(avg(pm100_e),0) as pm100_e, trunc(avg(p03um),0) as p03um, trunc(avg(p05um),0) as p05um, trunc(avg(p10um),0) as p10um, trunc(avg(p25um),0) as p25um, trunc(avg(p50um),0) as p50um, trunc(avg(p100um),0) as p100um FROM sensordata GROUP BY datetime ORDER BY datetime;

DROP TABLE tempcolor;
CREATE TABLE tempcolor as select datetime, trunc(avg(r)) as r, trunc(avg(g)) as g, trunc(avg(b)) as b from colordata group by datetime order by datetime;

DROP TABLE tempcombine;
SELECT p.*, w.condition, a.aqi, c.r, c.g, c.b FROM temppm p, tempaqi a,  tempweather w, tempcolor c WHERE p.datetime = a.datetime AND a.datetime = w.datetime AND a.datetime = c.datetime;

DROP TABLE weatherconditions;
CREATE TABLE weatherconditions as SELECT distinct(condition) from webdata;