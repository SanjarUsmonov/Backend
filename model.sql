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