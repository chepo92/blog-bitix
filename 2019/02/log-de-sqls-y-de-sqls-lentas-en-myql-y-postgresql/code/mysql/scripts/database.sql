CREATE TABLE IF NOT EXISTS Persons (
    person_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    last_name varchar(255),
    first_name varchar(255)
);

INSERT INTO Persons (last_name, first_name) values
    ('Last name 1', 'First name 1'),
    ('Last name 2', 'First name 2'),
    ('Last name 3', 'First name 3'),
    ('Last name 4', 'First name 4'),
    ('Last name 5', 'First name 5'),
    ('Last name 6', 'First name 6'),
    ('Last name 7', 'First name 7'),
    ('Last name 8', 'First name 8'),
    ('Last name 9', 'First name 9'),
    ('Last name 10', 'First name 10');