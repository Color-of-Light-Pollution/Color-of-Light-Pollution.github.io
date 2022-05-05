CREATE DATABASE clpdb;

DROP TABLE webdata;
CREATE TABLE webdata (
    datetime text,
    temperature numeric,
    condition text,
    aqi numeric, 
    sunrise text,
    sunset text,
    humidity numeric,
    dewpoint numeric, 
    visibility numeric,
    windspeed numeric, 
    uvindex numeric
);


DROP TABLE weatherconditions;
CREATE TABLE weatherconditions (
    condition text
);

DROP TABLE sensordata;
CREATE TABLE sensordata (
    datetime text,
    pm1dot0_s numeric,
    pm2dot5_s numeric,
    pm10_s numeric,
    pm10_e numeric,
    pm25_e numeric,
    pm100_e numeric,
    p03um numeric,
    p05um numeric,
    p10um numeric,
    p25um numeric,
    p50um numeric,
    p100um numeric
);

DROP TABLE cameradata;
CREATE TABLE cameradata (
    datetime text,
    avghex text
);

copy webdata from '';
copy sensordata from '';
copy cameradata from '';

INSERT INTO weatherconditions 
SELECT distinct(condition) from webdata;

\l
\d+
\d webdata
\d weatherconditions
\d sensordata
\d cameradata