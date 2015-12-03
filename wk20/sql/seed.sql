delete from appearances;
delete from actors;
delete from movies;

insert into movies (title, release_year) values
  ('Shawshank Redemption', 1994),
  ('Bourne Identity', 2006),
  ('Back to the Future', 1986),
  ('Good Will Hunting', 1998);

insert into actors (name, dob) values
  ('Matt Damon', '1970-10-08'),
  ('Tim Robbins', '1964-08-08'),
  ('Morgan Freeman', '1960-05-05'),
  ('Jonah Hill', '1999-01-01');

insert into appearances (actor_id, movie_id, character) values
  (
    (select id from actors where name = 'Matt Damon'),
    (select id from movies where title = 'Bourne Identity'),
    'Jason Bourne'
  ),
  (
    (select id from actors where name = 'Matt Damon'),
    (select id from movies where title = 'Good Will Hunting'),
    'Will Hunting'
  ),
  (
    (select id from actors where name = 'Morgan Freeman'),
    (select id from movies where title = 'Shawshank Redemption'),
    'Red'
  ),
  (
    (select id from actors where name = 'Tim Robbins'),
    (select id from movies where title = 'Shawshank Redemption'),
    'Andy Dufrane'
  )
  ;
  


