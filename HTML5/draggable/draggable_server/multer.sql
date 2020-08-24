set names utf8;
drop database  if exists multer;
create database multer charset=utf8;
use multer;
create table images(
    id SMALLINT UNSIGNED NOT NULL KEY AUTO_INCREMENT,
    imageurl VARCHAR(64) NOT NULL
);
