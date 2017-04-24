CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    date TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);
    
