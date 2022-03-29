INSERT INTO GAME_TYPES(game_type_libelle)  VALUES ('Souls-like');
INSERT INTO GAME_TYPES(game_type_libelle)  VALUES ('Platformer');

INSERT INTO suggestions(suggestion_contents, suggestion_points, user_id)  VALUES ('BOTW pls',0,1);
INSERT INTO suggestions(suggestion_contents, suggestion_points, user_id)  VALUES ('Il manque des fonctionnalités',0,2);

INSERT INTO PLATFORMS(platform_libelle)  VALUES ('Xbox One');
INSERT INTO PLATFORMS(platform_libelle)  VALUES ('PS4');

INSERT INTO RUN_CATEGORIES(run_category_libelle)  VALUES ('Any%');
INSERT INTO RUN_CATEGORIES(run_category_libelle)  VALUES ('100%');

INSERT INTO GAMES(game_libelle, game_image, game_type_code)  VALUES ('Demon Souls','Il est très vieux',1);
INSERT INTO GAMES(game_libelle, game_image, game_type_code)  VALUES ('Elden Ring','Il est très beau',1);
INSERT INTO GAMES(game_libelle, game_image, game_type_code)  VALUES ('Super Mario Bros','C`est mario',1);

INSERT INTO contains_run(run_category_code, game_code)  VALUES (1,4);
INSERT INTO contains_run(run_category_code, game_code)  VALUES (1,5);
INSERT INTO contains_run(run_category_code, game_code)  VALUES (1,3);
INSERT INTO contains_run(run_category_code, game_code)  VALUES (2,4);
INSERT INTO contains_run(run_category_code, game_code)  VALUES (2,5);
INSERT INTO contains_run(run_category_code, game_code)  VALUES (2,3);

INSERT INTO RUNS(run_time, game_code, run_category_code, platform_code, user_id)  VALUES ('1:02',4,1,1,1);
INSERT INTO RUNS(run_time, game_code, run_category_code, platform_code, user_id)  VALUES ('1:09:51',4,1,1,2);
INSERT INTO RUNS(run_time, game_code, run_category_code, platform_code, user_id)  VALUES ('2:04:51',5,1,1,2);