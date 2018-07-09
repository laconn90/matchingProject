 DROP TABLE person;

 CREATE TABLE person(
    id      VARCHAR2(20) PRIMARY KEY,
    pw   VARCHAR2(20) NOT NULL,
   name      VARCHAR2(20) NOT NULL,
   gender     VARCHAR2(20) NOT NULL,
   age   NUMBER(20) NOT NULL);
   
 
  DROP TABLE reputation;

 CREATE TABLE reputation(
    id      VARCHAR2(20) PRIMARY KEY,
   favorability VARCHAR2(20) ,
   reliability VARCHAR2(20) ); 
   
   
DROP TABLE hobby;

CREATE TABLE hobby(
   id      VARCHAR2(20) PRIMARY KEY,
  sport VARCHAR2(40) ,
  game VARCHAR2(40) ,
  culture VARCHAR2(40) ,
  restraunt VARCHAR2(40) ,
  travel VARCHAR2(40) ,
  study VARCHAR2(40) );
  
  