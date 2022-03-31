CREATE TABLE IF NOT EXISTS USERS (
    user_id SERIAL UNIQUE,
    user_name VARCHAR(100) UNIQUE   NOT NULL,
    user_mail VARCHAR(100),
    user_password VARCHAR(100)   NOT NULL,
    user_points INT   NOT NULL,
    user_access INT   NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS RUNS (
    run_code SERIAL UNIQUE,
    run_time TIME   NOT NULL,
    /*#foreign keys*/
    game_code INT   NOT NULL,
    run_category_code INT   NOT NULL,
    platform_code INT   NOT NULL,
    user_id INT   NOT NULL,
    PRIMARY KEY (run_code)
);

CREATE TABLE IF NOT EXISTS GAMES (
    game_code SERIAL UNIQUE ,
    game_libelle VARCHAR(100)   NOT NULL,
    game_image VARCHAR(100)   NOT NULL,
    /*#foreign keys*/
    game_type_code INT,
    PRIMARY KEY (game_code)
);

CREATE TABLE IF NOT  EXISTS  RUN_CATEGORIES (
    run_category_code SERIAL UNIQUE ,
    run_category_libelle VARCHAR(100)   NOT NULL,
    PRIMARY KEY (run_category_code)
);

CREATE TABLE IF NOT  EXISTS  GAME_TYPES (
    game_type_code SERIAL UNIQUE,
    game_type_libelle VARCHAR(100)   NOT NULL,
    PRIMARY KEY (game_type_code)
);

CREATE TABLE IF NOT  EXISTS  PLATFORMS (
    platform_code SERIAL UNIQUE,
    platform_libelle VARCHAR(100)   NOT NULL,
    PRIMARY KEY (platform_code)
);

CREATE TABLE IF NOT  EXISTS  SUGGESTIONS (
    suggestion_code SERIAL UNIQUE,
    suggestion_contents VARCHAR(500)   NOT NULL,
    suggestion_points INT   NOT NULL,
    /*#foreign keys*/
    user_id INT ,
    PRIMARY KEY (suggestion_code)
);

CREATE TABLE IF NOT  EXISTS  CONTAINS_RUN (
    run_category_code INT,
    game_code INT,
    PRIMARY KEY (run_category_code, game_code)
);

ALTER TABLE RUNS ADD FOREIGN KEY (game_code) REFERENCES GAMES (game_code);
ALTER TABLE RUNS ADD FOREIGN KEY (run_category_code) REFERENCES RUN_CATEGORIES (run_category_code);
ALTER TABLE RUNS ADD FOREIGN KEY (platform_code) REFERENCES PLATFORMS (platform_code);
ALTER TABLE RUNS ADD FOREIGN KEY (user_id) REFERENCES USERS (user_id);
ALTER TABLE GAMES ADD FOREIGN KEY (game_type_code) REFERENCES GAME_TYPES (game_type_code);
ALTER TABLE SUGGESTIONS ADD FOREIGN KEY (user_id) REFERENCES USERS (user_id);
ALTER TABLE CONTAINS_RUN ADD FOREIGN KEY (game_code) REFERENCES GAMES (game_code);
ALTER TABLE CONTAINS_RUN ADD FOREIGN KEY (run_category_code) REFERENCES RUN_CATEGORIES (run_category_code);