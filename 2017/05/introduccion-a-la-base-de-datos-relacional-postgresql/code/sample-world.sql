world=# 

select co.name, count(ci.id) as n from country co inner join city ci on ci.countrycode = co.code group by co.code order by co.name;
                 name                  |  n  
---------------------------------------+-----
 Afghanistan                           |   4
 Albania                               |   1
 Algeria                               |  18
 American Samoa                        |   2
 Andorra                               |   1
 Angola                                |   5
 Anguilla                              |   2
 Antigua and Barbuda                   |   1
 Argentina                             |  57
 Armenia                               |   3
 Aruba                                 |   1
 Australia                             |  14
 Austria                               |   6
 Azerbaijan                            |   4
--More--

select co.name, count(ci.id) as n from country co inner join city ci on ci.countrycode = co.code group by co.code order by n desc;
                 name                  |  n  
---------------------------------------+-----
 China                                 | 363
 India                                 | 341
 United States                         | 274
 Brazil                                | 250
 Japan                                 | 248
 Russian Federation                    | 189
 Mexico                                | 173
 Philippines                           | 136
 Germany                               |  93
 Indonesia                             |  85
 United Kingdom                        |  81
 South Korea                           |  70
 Iran                                  |  67
 Nigeria                               |  64
 Turkey                                |  62
 Pakistan                              |  59
 Spain                                 |  59
 Italy                                 |  58
 --More--