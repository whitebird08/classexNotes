select 
	name,
	character,
	title,
	release_year

from appearances
	inner join actors on actors.id = appearances.actor_id
	inner join movies on movies.id = appearances.movie_id
	;

select actors.* from actors
	left join appearances on appearances.actor_id = actors.id
where appearances.id is null;

select * from appearances
	join appearances
;

