INSERT INTO USERS(user_name, user_mail, user_password, user_point, user_access) VALUES ('admin','admin@admin.com','admin123',0,1)
INSERT INTO USERS(user_name, user_mail, user_password, user_point, user_access) VALUES ('test','test@test.com','test123',0,0)

INSERT INTO GAME_TYPES(game_type_libelle)  VALUES ('Souls-like');
INSERT INTO GAME_TYPES(game_type_libelle)  VALUES ('Platformer');

INSERT INTO suggestions(suggestion_contents, suggestion_points, user_id)  VALUES ('BOTW pls',0,1);
INSERT INTO suggestions(suggestion_contents, suggestion_points, user_id)  VALUES ('Il manque des fonctionnalités',0,2);

INSERT INTO PLATFORMS(platform_libelle)  VALUES ('Xbox One');
INSERT INTO PLATFORMS(platform_libelle)  VALUES ('PS4');

INSERT INTO RUN_GATEGORIES(run_category_libelle)  VALUES ('Any%');
INSERT INTO RUN_GATEGORIES(run_category_libelle)  VALUES ('100%');

INSERT INTO GAMES(game_libelle, game_image, game_type_code)  VALUES ('Demon Souls','Il est très vieux',1);
INSERT INTO GAMES(game_libelle, game_image, game_type_code)  VALUES ('Elden Ring','Il est très beau',1);
INSERT INTO GAMES(game_libelle, game_image, game_type_code)  VALUES ('Super Mario Bros','C`est mario',1);

INSERT INTO contains_run(run_category_code, game_code)  VALUES (1,1);
INSERT INTO contains_run(run_category_code, game_code)  VALUES (1,2);
INSERT INTO contains_run(run_category_code, game_code)  VALUES (1,3);
INSERT INTO contains_run(run_category_code, game_code)  VALUES (2,1);
INSERT INTO contains_run(run_category_code, game_code)  VALUES (2,2);
INSERT INTO contains_run(run_category_code, game_code)  VALUES (2,3);

INSERT INTO RUNS(run_time, game_code, run_category_code, platfrom_code, user_id)  VALUES ('1:02',2,1,1,1);
INSERT INTO RUNS(run_time, game_code, run_category_code, platfrom_code, user_id)  VALUES ('1:09:51',2,1,1,1);
INSERT INTO RUNS(run_time, game_code, run_category_code, platfrom_code, user_id)  VALUES ('2:04:51',3,1,1,1);