drop table if exists actors;

drop table if exists appearances;

create table actors (

	id serial primary key,
	name varchar,
	dob date 

);

drop table if exists movies;

create table movies (
	id serial primary key,
	title varchar,
	release_year int
);

drop table if exists appearances;

create table appearances (
	id serial primary key,
	movie_id int references movies(id),
	actor_id int references actors(id),
	character varchar
);




