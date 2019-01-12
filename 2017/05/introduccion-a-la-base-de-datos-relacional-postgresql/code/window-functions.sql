WITH city_rank AS (
  SELECT c.*, rank() OVER w AS rank, sum(population) OVER w AS country_cities_population
    FROM city c
    WHERE countrycode in ('DEU', 'ESP', 'FRA', 'ITA')
    WINDOW w AS (PARTITION BY countrycode ORDER BY population DESC RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING)
)
SELECT countrycode, name, CAST(population * 100 AS FLOAT) / country_cities_population AS percentage
  FROM city_rank
  WHERE rank <= 3
  ORDER BY countrycode, percentage DESC;
countrycode |       name       |    percentage    
-------------+------------------+------------------
 DEU         | Berlin           | 12.9038090097256
 DEU         | Hamburg          | 6.49534626586983
 DEU         | Munich [München] | 4.55148796461471
 ESP         | Madrid           | 17.2716981012094
 ESP         | Barcelona        |  9.0193410129311
 ESP         | Valencia         | 4.43580068592419
 FRA         | Paris            | 22.9893166678457
 FRA         | Marseille        | 8.63681668244903
 FRA         | Lyon             | 4.81856551586274
 ITA         | Roma             | 17.5222222494716
 ITA         | Milano           | 8.62315477961551
 ITA         | Napoli           | 6.64557392020253
(12 rows)