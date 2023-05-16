CREATE TABLE book(
    id SERIAL NOT NULL,
    name VARCHAR(32) UNIQUE,
    title VARCHAR(34),
    about TEXT,
    count VARCHAR(10),
    image TEXT,
    time TIMESTAMPTZ,
    is_Active boolean default true
) 

INSERT INTO book(
    name,
    title,
    about,
    count
)VALUES(
    'name',
    'title',
    'about',
    17
);

SELECT * from book



Sanjar, [3/27/2023 3:19 PM]
select * from users offset 0 limit 10;

Sanjar, [3/27/2023 3:30 PM]
select * from users order by name;

Sanjar, [3/27/2023 3:30 PM]
select * from users order by name desc;

Sanjar, [3/27/2023 3:30 PM]
select * from users order by name asc;

Sanjar, [3/27/2023 3:50 PM]
SELECT * from users where id=1

Sanjar, [3/27/2023 3:50 PM]
SELECT * from users WHERE name LIKE 'Sa%'

Sanjar, [3/27/2023 3:50 PM]
SELECT * FROM USERS NAME ILIKE '%SA%'

Sanjar, [3/27/2023 3:50 PM]
SELECT * FROM USERS where createdAt between '20-20-20' and '20-20-20' offset 0 limit 10

Sanjar, [3/27/2023 4:09 PM]
SELECT AVG(AGE)  FROM USERS WHERE NAME ILIKE '%NG%'

Sanjar, [3/27/2023 4:10 PM]
SELECT SUM(AGE)  FROM USERS WHERE NAME ILIKE '%NG%'

Sanjar, [3/27/2023 4:10 PM]
SELECT COUNT(AGE)  FROM USERS WHERE NAME ILIKE '%NG%'

Sanjar, [3/27/2023 4:15 PM]
SELEECT COUNT(AGE),  AGE FROM USERS GROUP BY ID;

Sanjar, [3/27/2023 4:18 PM]
DELETE FROM USERS WHERE ID=1

Sanjar, [3/27/2023 4:27 PM]
UPDATE USERS SET NAME='SANJAR' ,  LASTNAME='USMONOV' AND GMAIL='USMONOVSANCHO228@GMAIL.COM' WHERE ID=1

Sanjar, [3/27/2023 4:32 PM]
select * from users where date between '2022-02-20' and '2023-02-20' offset 0 limit 10;

Sanjar, [3/29/2023 4:31 PM]
SELECT * FROM  USERS INNER JOIN ON CAP_ID=2

Sanjar, [3/31/2023 4:14 PM]
SELECT * from users where id = IN(1,2,3)