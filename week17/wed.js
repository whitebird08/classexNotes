DROP TABLE IF EXISTS weather;
DROP TABLE IF EXISTS cities;

CREATE TABLE cities (
  id serial primary key,
  city varchar(80),
  location point
);

CREATE TABLE weather (
  id serial primary key,
  city_id int references cities(id) on delete cascade,
  temp_hi int CHECK (temp_hi > temp_lo),
  temp_lo int,
  prcp real,
  date date
);

INSERT INTO
  cities
VALUES
  ( default, 'Boulder', point(2,5) ),
  ( default, 'Denver', point(7,2) ),
  ( default, 'Brooklyn', point(9,1) );



INSERT INTO
  weather
VALUES
  ( default, (SELECT id FROM cities WHERE city = 'Boulder'), 75, 42, 210000, now() ),
  ( default, (SELECT id FROM cities WHERE city = 'Denver'), 65, 55, 300030, now() ),
  ( default, (SELECT id FROM cities WHERE city = 'Brooklyn'), 55, 39, 120000, now() ),
  ( default, (SELECT id FROM cities WHERE city = 'Boulder'), 71, 55, 103000, ( now() - interval '1' day ) ),
  ( default, (SELECT id FROM cities WHERE city = 'Denver'), 74, 51, 300040, ( now() - interval '1' day ) ),
  ( default, (SELECT id FROM cities WHERE city = 'Brooklyn'), 72, 66, 203000, ( now() - interval '1' day ) ),
  ( default, (SELECT id FROM cities WHERE city = 'Boulder'), 81, 65, 104000, ( now() - interval '2' day ) ),
  ( default, (SELECT id FROM cities WHERE city = 'Denver'), 64, 55, 300300, ( now() - interval '2' day ) ),
  ( default, (SELECT id FROM cities WHERE city = 'Brooklyn'), 42, 36, 202000, ( now() - interval '2' day ) );

//carSchemaUP.sql:
CREATE TABLE make (
  id serial primary key,
  name varchar(30)
);

//carSchemaDOWN.sql:
CREATE TABLE model (
  id serial primary key,
  name varchar(30),
  make_id int references make(id) on delete cascade
);
//carsNewTable.sql:
CREATE TABLE category (
  id serial primary key,
  name varchar(30)
);

ALTER TABLE model ADD category_id int;

// and finally carSeed.sql:
INSERT INTO
  make
VALUES
  (default, 'Toyota'),
  (default, 'TESLA'),
  (default, 'Porsche'),
  (default, 'Nissan'),
  (default, 'Chevrolet');

INSERT INTO
  category
VALUES
  (default, 'SUV'),
  (default, 'Hybrid'),
  (default, 'Full Electric'),
  (default, 'Sportscar'),
  (default, 'Sedan');

INSERT INTO
  model
VALUES
  (default, 'Prius', (SELECT id FROM make WHERE name = 'Toyota'), (SELECT id FROM category WHERE name = 'Hybrid')),
  (default, 'Roadster', (SELECT id FROM make WHERE name = 'TESLA'), (SELECT id FROM category WHERE name = 'Full Electric')),
  (default, '918 Spyder', (SELECT id FROM make WHERE name = 'Porsche'), (SELECT id FROM category WHERE name = 'Sportscar')),
  (default, 'Leaf', (SELECT id FROM make WHERE name = 'Nissan'), (SELECT id FROM category WHERE name = 'Full Electric')),
  (default, 'Volt', (SELECT id FROM make WHERE name = 'Chevrolet'), (SELECT id FROM category WHERE name = 'Hybrid')); 