const nbaData = `2021-22,Boston Celtics,Eastern,51,31,Lost Finals,7.02
2020-21,Boston Celtics,Eastern,36,36,Lost E. Conf. 1st Rnd.,1.32
2019-20,Boston Celtics,Eastern,48,24,Lost E. Conf. Finals,5.83
2018-19,Boston Celtics,Eastern,49,33,Lost E. Conf. Semis,3.9
2017-18,Boston Celtics,Eastern,55,27,Lost E. Conf. Finals,3.23
2016-17,Boston Celtics,Eastern,53,29,Lost E. Conf. Finals,2.25
2015-16,Boston Celtics,Eastern,48,34,Lost E. Conf. 1st Rnd.,2.84
2014-15,Boston Celtics,Eastern,40,42,Lost E. Conf. 1st Rnd.,-0.4
2013-14,Boston Celtics,Eastern,25,57,,-4.97
2012-13,Boston Celtics,Eastern,41,40,Lost E. Conf. 1st Rnd.,-0.62
2011-12,Boston Celtics,Eastern,39,27,Lost E. Conf. Finals,2.26
2010-11,Boston Celtics,Eastern,56,26,Lost E. Conf. Semis,4.83
2009-10,Boston Celtics,Eastern,50,32,Lost Finals,3.37
2008-09,Boston Celtics,Eastern,62,20,Lost E. Conf. Semis,7.44
2007-08,Boston Celtics,Eastern,66,16,Won Finals,9.3
2006-07,Boston Celtics,Eastern,24,58,,-3.7
2005-06,Boston Celtics,Eastern,33,49,,-1.59
2004-05,Boston Celtics,Eastern,45,37,Lost E. Conf. 1st Rnd.,0.35
2003-04,Boston Celtics,Eastern,36,46,Lost E. Conf. 1st Rnd.,-1.99
2002-03,Boston Celtics,Eastern,44,38,Lost E. Conf. Semis,-0.75
2001-02,Boston Celtics,Eastern,49,33,Lost E. Conf. Finals,1.75
2000-01,Boston Celtics,Eastern,36,46,,-2.4
1999-00,Boston Celtics,Eastern,35,47,,-1
1998-99,Boston Celtics,Eastern,19,31,,-1.75
1997-98,Boston Celtics,Eastern,36,46,,-1.96
1996-97,Boston Celtics,Eastern,15,67,,-6.62
1995-96,Boston Celtics,Eastern,33,49,,-3.37
1994-95,Boston Celtics,Eastern,35,47,Lost E. Conf. 1st Rnd.,-1.92
1993-94,Boston Celtics,Eastern,32,50,,-4.28
1992-93,Boston Celtics,Eastern,48,34,Lost E. Conf. 1st Rnd.,0.93
1991-92,Boston Celtics,Eastern,51,31,Lost E. Conf. Semis,3.41
1990-91,Boston Celtics,Eastern,56,26,Lost E. Conf. Semis,5.22
1989-90,Boston Celtics,Eastern,52,30,Lost E. Conf. 1st Rnd.,3.23
1988-89,Boston Celtics,Eastern,42,40,Lost E. Conf. 1st Rnd.,1.26
1987-88,Boston Celtics,Eastern,57,25,Lost E. Conf. Finals,6.15
1986-87,Boston Celtics,Eastern,59,23,Lost Finals,6.57
1985-86,Boston Celtics,Eastern,67,15,Won Finals,9.06
1984-85,Boston Celtics,Eastern,63,19,Lost Finals,6.47
1983-84,Boston Celtics,Eastern,62,20,Won Finals,6.42
1982-83,Boston Celtics,Eastern,56,26,Lost E. Conf. Semis,5.34
1981-82,Boston Celtics,Eastern,63,19,Lost E. Conf. Finals,6.35
1980-81,Boston Celtics,Eastern,62,20,Won Finals,6.05
1979-80,Boston Celtics,Eastern,61,21,Lost E. Conf. Finals,7.37
1978-79,Boston Celtics,Eastern,29,53,,-4.78
1977-78,Boston Celtics,Eastern,32,50,,-1.86
1976-77,Boston Celtics,Eastern,44,38,Lost E. Conf. Semis,-1.9
1975-76,Boston Celtics,Eastern,54,28,Won Finals,2.25
1974-75,Boston Celtics,Eastern,60,22,Lost E. Conf. Finals,5.4
1973-74,Boston Celtics,Eastern,56,26,Won Finals,3.42
1972-73,Boston Celtics,Eastern,68,14,Lost E. Conf. Finals,7.35
1971-72,Boston Celtics,Eastern,56,26,Lost E. Conf. Finals,4.38
1970-71,Boston Celtics,Eastern,44,38,,2.3
1969-70,Boston Celtics,Eastern,34,48,,-1.6
1968-69,Boston Celtics,Eastern,48,34,Won Finals,5.35
1967-68,Boston Celtics,Eastern,54,28,Won Finals,3.87
1966-67,Boston Celtics,Eastern,60,21,Lost E. Div. Finals,7.24
1965-66,Boston Celtics,Eastern,54,26,Won Finals,4.34
1964-65,Boston Celtics,Eastern,62,18,Won Finals,7.46
1963-64,Boston Celtics,Eastern,59,21,Won Finals,6.93
1962-63,Boston Celtics,Eastern,58,22,Won Finals,6.38
1961-62,Boston Celtics,Eastern,60,20,Won Finals,8.25
1960-61,Boston Celtics,Eastern,57,22,Won Finals,4.94
1959-60,Boston Celtics,Eastern,59,16,Won Finals,7.62
1958-59,Boston Celtics,Eastern,52,20,Won Finals,5.84
1957-58,Boston Celtics,Eastern,49,23,Lost Finals,5.02
1956-57,Boston Celtics,Eastern,44,28,Won Finals,4.78
1955-56,Boston Celtics,Eastern,39,33,Lost E. Div. Semis,0.72
1954-55,Boston Celtics,Eastern,36,36,Lost E. Div. Finals,-0.03
1953-54,Boston Celtics,Eastern,42,30,Lost E. Div. Finals,1.97
1952-53,Boston Celtics,Eastern,46,25,Lost E. Div. Finals,1.94
1951-52,Boston Celtics,Eastern,39,27,Lost E. Div. Semis,3.6
1950-51,Boston Celtics,Eastern,39,30,Lost E. Div. Semis,-0.41
1949-50,Boston Celtics,Eastern,22,46,,-1.73
1948-49,Boston Celtics,Eastern,25,35,,-2.76
1947-48,Boston Celtics,Eastern,20,28,Lost Quarterfinals,-3.76
1946-47,Boston Celtics,Eastern,22,38,,-4.45
2021-22,Brooklyn Nets,Eastern,44,38,Lost E. Conf. 1st Rnd.,0.82
2020-21,Brooklyn Nets,Eastern,48,24,Lost E. Conf. Semis,4.24
2019-20,Brooklyn Nets,Eastern,35,37,Lost E. Conf. 1st Rnd.,-1.01
2018-19,Brooklyn Nets,Eastern,42,40,Lost E. Conf. 1st Rnd.,-0.4
2017-18,Brooklyn Nets,Eastern,28,54,,-3.67
2016-17,Brooklyn Nets,Eastern,20,62,,-6.74
2015-16,Brooklyn Nets,Eastern,21,61,,-7.12
2014-15,Brooklyn Nets,Eastern,38,44,Lost E. Conf. 1st Rnd.,-3.13
2013-14,Brooklyn Nets,Eastern,44,38,Lost E. Conf. Semis,-1.58
2012-13,Brooklyn Nets,Eastern,49,33,Lost E. Conf. 1st Rnd.,1.25
2011-12,New Jersey Nets,Eastern,22,44,,-6.37
2010-11,New Jersey Nets,Eastern,24,58,,-6.28
2009-10,New Jersey Nets,Eastern,12,70,,-8.93
2008-09,New Jersey Nets,Eastern,34,48,,-2.31
2007-08,New Jersey Nets,Eastern,34,48,,-5.15
2006-07,New Jersey Nets,Eastern,41,41,Lost E. Conf. Semis,-1
2005-06,New Jersey Nets,Eastern,49,33,Lost E. Conf. Semis,1.11
2004-05,New Jersey Nets,Eastern,42,40,Lost E. Conf. 1st Rnd.,-1.82
2003-04,New Jersey Nets,Eastern,47,35,Lost E. Conf. Semis,1.88
2002-03,New Jersey Nets,Eastern,49,33,Lost Finals,4.42
2001-02,New Jersey Nets,Eastern,52,30,Lost Finals,3.67
2000-01,New Jersey Nets,Eastern,26,56,,-5.3
1999-00,New Jersey Nets,Eastern,31,51,,-1.18
1998-99,New Jersey Nets,Eastern,16,34,,-3.2
1997-98,New Jersey Nets,Eastern,43,39,Lost E. Conf. 1st Rnd.,1.88
1996-97,New Jersey Nets,Eastern,26,56,,-3.89
1995-96,New Jersey Nets,Eastern,30,52,,-4.14
1994-95,New Jersey Nets,Eastern,30,52,,-3.28
1993-94,New Jersey Nets,Eastern,45,37,Lost E. Conf. 1st Rnd.,2.11
1992-93,New Jersey Nets,Eastern,43,39,Lost E. Conf. 1st Rnd.,1.2
1991-92,New Jersey Nets,Eastern,40,42,Lost E. Conf. 1st Rnd.,-1.54
1990-91,New Jersey Nets,Eastern,26,56,,-4.53
1989-90,New Jersey Nets,Eastern,17,65,,-7.82
1988-89,New Jersey Nets,Eastern,26,56,,-5.69
1987-88,New Jersey Nets,Eastern,19,63,,-6.98
1986-87,New Jersey Nets,Eastern,24,58,,-4.42
1985-86,New Jersey Nets,Eastern,39,43,Lost E. Conf. 1st Rnd.,-1.39
1984-85,New Jersey Nets,Eastern,42,40,Lost E. Conf. 1st Rnd.,0.64
1983-84,New Jersey Nets,Eastern,45,37,Lost E. Conf. Semis,1.27
1982-83,New Jersey Nets,Eastern,49,33,Lost E. Conf. 1st Rnd.,2.77
1981-82,New Jersey Nets,Eastern,44,38,Lost E. Conf. 1st Rnd.,0.87
1980-81,New Jersey Nets,Eastern,24,58,,-5.15
1979-80,New Jersey Nets,Eastern,34,48,,-0.98
1978-79,New Jersey Nets,Eastern,37,45,Lost E. Conf. 1st Rnd.,-4
1977-78,New Jersey Nets,Eastern,24,58,,-5.61
1976-77,New York Nets,Eastern,22,60,,-6.54
1975-76,New York Nets,Eastern,55,29,Won Finals,2.56
1974-75,New York Nets,Eastern,58,26,Lost E. Div. Semis,6.58
1973-74,New York Nets,Eastern,55,29,Won Finals,4.8
1972-73,New York Nets,Eastern,30,54,Lost E. Div. Semis,-5.8
1971-72,New York Nets,Eastern,44,40,Lost Finals,0.21
1970-71,New York Nets,Eastern,40,44,Lost E. Div. Semis,-0.86
1969-70,New York Nets,Eastern,39,45,Lost E. Div. Semis,-1.02
1968-69,New York Nets,Eastern,17,61,,-7.89
1967-68,New Jersey Americans,Eastern,36,42,,-1.13
2021-22,New York Knicks,Eastern,37,45,,-0.01
2020-21,New York Knicks,Eastern,41,31,Lost E. Conf. 1st Rnd.,2.13
2019-20,New York Knicks,Eastern,21,45,,-6.72
2018-19,New York Knicks,Eastern,17,65,,-8.93
2017-18,New York Knicks,Eastern,29,53,,-3.53
2016-17,New York Knicks,Eastern,31,51,,-3.87
2015-16,New York Knicks,Eastern,32,50,,-2.74
2014-15,New York Knicks,Eastern,17,65,,-9.5
2013-14,New York Knicks,Eastern,37,45,,-1.4
2012-13,New York Knicks,Eastern,54,28,Lost E. Conf. Semis,3.73
2011-12,New York Knicks,Eastern,36,30,Lost E. Conf. 1st Rnd.,2.39
2010-11,New York Knicks,Eastern,42,40,Lost E. Conf. 1st Rnd.,0.48
2009-10,New York Knicks,Eastern,29,53,,-4.01
2008-09,New York Knicks,Eastern,32,50,,-2.33
2007-08,New York Knicks,Eastern,23,59,,-6.55
2006-07,New York Knicks,Eastern,33,49,,-3.06
2005-06,New York Knicks,Eastern,23,59,,-6.3
2004-05,New York Knicks,Eastern,33,49,,-2.72
2003-04,New York Knicks,Eastern,39,43,Lost E. Conf. 1st Rnd.,-1.97
2002-03,New York Knicks,Eastern,37,45,,-1.61
2001-02,New York Knicks,Eastern,30,52,,-4.15
2000-01,New York Knicks,Eastern,48,34,Lost E. Conf. 1st Rnd.,1.98
1999-00,New York Knicks,Eastern,50,32,Lost E. Conf. Finals,1.3
1998-99,New York Knicks,Eastern,27,23,Lost Finals,1.45
1997-98,New York Knicks,Eastern,43,39,Lost E. Conf. Semis,2.74
1996-97,New York Knicks,Eastern,57,25,Lost E. Conf. Semis,3.31
1995-96,New York Knicks,Eastern,47,35,Lost E. Conf. Semis,2.24
1994-95,New York Knicks,Eastern,55,27,Lost E. Conf. Semis,2.78
1993-94,New York Knicks,Eastern,57,25,Lost Finals,6.48
1992-93,New York Knicks,Eastern,60,22,Lost E. Conf. Finals,5.87
1991-92,New York Knicks,Eastern,51,31,Lost E. Conf. Semis,3.67
1990-91,New York Knicks,Eastern,39,43,Lost E. Conf. 1st Rnd.,-0.43
1989-90,New York Knicks,Eastern,45,37,Lost E. Conf. Semis,0.78
1988-89,New York Knicks,Eastern,52,30,Lost E. Conf. Semis,3.62
1987-88,New York Knicks,Eastern,38,44,Lost E. Conf. 1st Rnd.,0.14
1986-87,New York Knicks,Eastern,24,58,,-5.42
1985-86,New York Knicks,Eastern,23,59,,-4.82
1984-85,New York Knicks,Eastern,24,58,,-4.09
1983-84,New York Knicks,Eastern,47,35,Lost E. Conf. Semis,3.79
1982-83,New York Knicks,Eastern,44,38,Lost E. Conf. Semis,2.58
1981-82,New York Knicks,Eastern,33,49,,-2.15
1980-81,New York Knicks,Eastern,50,32,Lost E. Conf. 1st Rnd.,2
1979-80,New York Knicks,Eastern,39,43,,-0.96
1978-79,New York Knicks,Eastern,31,51,,-3.29
1977-78,New York Knicks,Eastern,43,39,Lost E. Conf. Semis,-0.53
1976-77,New York Knicks,Eastern,40,42,,0.01
1975-76,New York Knicks,Eastern,38,44,,-1.05
1974-75,New York Knicks,Eastern,40,42,Lost E. Conf. 1st Rnd.,-0.92
1973-74,New York Knicks,Eastern,49,33,Lost E. Conf. Finals,2.42
1972-73,New York Knicks,Eastern,57,25,Won Finals,6.07
1971-72,New York Knicks,Eastern,48,34,Lost Finals,2.28
1970-71,New York Knicks,Eastern,52,30,Lost E. Conf. Finals,5.05
1969-70,New York Knicks,Eastern,60,22,Won Finals,8.42
1968-69,New York Knicks,Eastern,54,28,Lost E. Div. Finals,5.48
1967-68,New York Knicks,Eastern,43,39,Lost E. Div. Semis,1.78
1966-67,New York Knicks,Eastern,36,45,Lost E. Div. Semis,-2.74
1965-66,New York Knicks,Eastern,30,50,,-2.31
1964-65,New York Knicks,Eastern,31,49,,-3.26
1963-64,New York Knicks,Eastern,22,58,,-5.91
1962-63,New York Knicks,Eastern,21,59,,-6.2
1961-62,New York Knicks,Eastern,29,51,,-3.98
1960-61,New York Knicks,Eastern,21,58,,-5.43
1959-60,New York Knicks,Eastern,27,48,,-1.43
1958-59,New York Knicks,Eastern,40,32,Lost E. Div. Semis,0.49
1957-58,New York Knicks,Eastern,35,37,,1.35
1956-57,New York Knicks,Eastern,36,36,,0.07
1955-56,New York Knicks,Eastern,35,37,Lost E. Div. Third Place Tiebreaker,-0.2
1954-55,New York Knicks,Eastern,38,34,Lost E. Div. Semis,0.11
1953-54,New York Knicks,Eastern,44,28,Eliminated in E. Div. Rnd. Robin,-0.16
1952-53,New York Knicks,Eastern,47,23,Lost Finals,4.39
1951-52,New York Knicks,Eastern,37,29,Lost Finals,0.67
1950-51,New York Knicks,Eastern,36,30,Lost Finals,0.49
1949-50,New York Knicks,Eastern,40,28,Lost E. Div. Finals,2.53
1948-49,New York Knicks,Eastern,32,28,Lost E. Div. Finals,1.24
1947-48,New York Knicks,Eastern,26,22,Lost Quarterfinals,2.3
1946-47,New York Knicks,Eastern,33,27,Lost Semis,0.58
2021-22,Philadelphia 76ers,Eastern,51,31,Lost E. Conf. Semis,2.57
2020-21,Philadelphia 76ers,Eastern,49,23,Lost E. Conf. Semis,5.28
2019-20,Philadelphia 76ers,Eastern,43,30,Lost E. Conf. 1st Rnd.,2.25
2018-19,Philadelphia 76ers,Eastern,51,31,Lost E. Conf. Semis,2.25
2017-18,Philadelphia 76ers,Eastern,52,30,Lost E. Conf. Semis,4.3
2016-17,Philadelphia 76ers,Eastern,28,54,,-5.83
2015-16,Philadelphia 76ers,Eastern,10,72,,-9.92
2014-15,Philadelphia 76ers,Eastern,18,64,,-9.04
2013-14,Philadelphia 76ers,Eastern,19,63,,-10.66
2012-13,Philadelphia 76ers,Eastern,34,48,,-3.51
2011-12,Philadelphia 76ers,Eastern,35,31,Lost E. Conf. Semis,3.59
2010-11,Philadelphia 76ers,Eastern,41,41,Lost E. Conf. 1st Rnd.,1.01
2009-10,Philadelphia 76ers,Eastern,27,55,,-3.93
2008-09,Philadelphia 76ers,Eastern,41,41,Lost E. Conf. 1st Rnd.,0.16
2007-08,Philadelphia 76ers,Eastern,40,42,Lost E. Conf. 1st Rnd.,0.19
2006-07,Philadelphia 76ers,Eastern,35,47,,-3.26
2005-06,Philadelphia 76ers,Eastern,38,44,,-2.1
2004-05,Philadelphia 76ers,Eastern,43,39,Lost E. Conf. 1st Rnd.,-1.07
2003-04,Philadelphia 76ers,Eastern,33,49,,-2.95
2002-03,Philadelphia 76ers,Eastern,48,34,Lost E. Conf. Semis,1.76
2001-02,Philadelphia 76ers,Eastern,43,39,Lost E. Conf. 1st Rnd.,1.27
2000-01,Philadelphia 76ers,Eastern,56,26,Lost Finals,3.64
1999-00,Philadelphia 76ers,Eastern,49,33,Lost E. Conf. Semis,1.02
1998-99,Philadelphia 76ers,Eastern,28,22,Lost E. Conf. Semis,2.56
1997-98,Philadelphia 76ers,Eastern,31,51,,-1.89
1996-97,Philadelphia 76ers,Eastern,22,60,,-5.89
1995-96,Philadelphia 76ers,Eastern,18,64,,-9.45
1994-95,Philadelphia 76ers,Eastern,24,58,,-5.06
1993-94,Philadelphia 76ers,Eastern,25,57,,-7.37
1992-93,Philadelphia 76ers,Eastern,26,56,,-5.25
1991-92,Philadelphia 76ers,Eastern,35,47,,-1.34
1990-91,Philadelphia 76ers,Eastern,44,38,Lost E. Conf. Semis,-0.39
1989-90,Philadelphia 76ers,Eastern,53,29,Lost E. Conf. Semis,4.23
1988-89,Philadelphia 76ers,Eastern,46,36,Lost E. Conf. 1st Rnd.,1.68
1987-88,Philadelphia 76ers,Eastern,36,46,,-0.79
1986-87,Philadelphia 76ers,Eastern,45,37,Lost E. Conf. 1st Rnd.,0.11
1985-86,Philadelphia 76ers,Eastern,54,28,Lost E. Conf. Semis,2.46
1984-85,Philadelphia 76ers,Eastern,58,24,Lost E. Conf. Finals,4.17
1983-84,Philadelphia 76ers,Eastern,52,30,Lost E. Conf. 1st Rnd.,2.39
1982-83,Philadelphia 76ers,Eastern,65,17,Won Finals,7.53
1981-82,Philadelphia 76ers,Eastern,58,24,Lost Finals,5.74
1980-81,Philadelphia 76ers,Eastern,62,20,Lost E. Conf. Finals,7.76
1979-80,Philadelphia 76ers,Eastern,59,23,Lost Finals,4.04
1978-79,Philadelphia 76ers,Eastern,47,35,Lost E. Conf. Semis,1.74
1977-78,Philadelphia 76ers,Eastern,55,27,Lost E. Conf. Finals,4.87
1976-77,Philadelphia 76ers,Eastern,50,32,Lost Finals,3.78
1975-76,Philadelphia 76ers,Eastern,46,36,Lost E. Conf. 1st Rnd.,0.33
1974-75,Philadelphia 76ers,Eastern,34,48,,-2.6
1973-74,Philadelphia 76ers,Eastern,25,57,,-5.94
1972-73,Philadelphia 76ers,Eastern,9,73,,-11.5
1971-72,Philadelphia 76ers,Eastern,30,52,,-3.44
1970-71,Philadelphia 76ers,Eastern,47,35,Lost E. Conf. Semis,1.81
1969-70,Philadelphia 76ers,Eastern,42,40,Lost E. Div. Semis,3.32
1968-69,Philadelphia 76ers,Eastern,55,27,Lost E. Div. Semis,4.79
1967-68,Philadelphia 76ers,Eastern,62,20,Lost E. Div. Finals,7.96
1966-67,Philadelphia 76ers,Eastern,68,13,Won Finals,8.5
1965-66,Philadelphia 76ers,Eastern,55,25,Lost E. Div. Finals,4.16
1964-65,Philadelphia 76ers,Eastern,40,40,Lost E. Div. Finals,-0.13
1963-64,Philadelphia 76ers,Eastern,34,46,Lost E. Div. Semis,-3.75
1962-63,Syracuse Nationals,Eastern,48,32,Lost E. Div. Semis,3.4
1961-62,Syracuse Nationals,Eastern,41,39,Lost E. Div. Semis,2.24
1960-61,Syracuse Nationals,Eastern,38,41,Lost E. Div. Finals,1.93
1959-60,Syracuse Nationals,Eastern,45,30,Lost E. Div. Semis,2.77
1958-59,Syracuse Nationals,Eastern,35,37,Lost E. Div. Finals,3.74
1957-58,Syracuse Nationals,Eastern,41,31,Lost E. Div. Semis,2.18
1956-57,Syracuse Nationals,Eastern,38,34,Lost E. Div. Finals,-1.03
1955-56,Syracuse Nationals,Eastern,35,37,Lost E. Div. Finals,0.17
1954-55,Syracuse Nationals,Eastern,43,29,Won Finals,1.23
1953-54,Syracuse Nationals,Eastern,42,30,Lost Finals,4.27
1952-53,Syracuse Nationals,Eastern,47,24,Lost E. Div. Semis,3.62
1951-52,Syracuse Nationals,Eastern,40,26,Lost E. Div. Finals,3.94
1950-51,Syracuse Nationals,Eastern,32,34,Lost E. Div. Finals,0.62
1949-50,Syracuse Nationals,Eastern,51,13,Lost Finals,6.48
2021-22,Toronto Raptors,Eastern,48,34,Lost E. Conf. 1st Rnd.,2.38
2020-21,Toronto Raptors,Eastern,27,45,,-0.54
2019-20,Toronto Raptors,Eastern,53,19,Lost E. Conf. Semis,5.97
2018-19,Toronto Raptors,Eastern,58,24,Won Finals,5.49
2017-18,Toronto Raptors,Eastern,59,23,Lost E. Conf. Semis,7.29
2016-17,Toronto Raptors,Eastern,51,31,Lost E. Conf. Semis,3.65
2015-16,Toronto Raptors,Eastern,56,26,Lost E. Conf. Finals,4.08
2014-15,Toronto Raptors,Eastern,49,33,Lost E. Conf. 1st Rnd.,2.45
2013-14,Toronto Raptors,Eastern,48,34,Lost E. Conf. 1st Rnd.,2.55
2012-13,Toronto Raptors,Eastern,34,48,,-1.96
2011-12,Toronto Raptors,Eastern,23,43,,-3.67
2010-11,Toronto Raptors,Eastern,22,60,,-6.28
2009-10,Toronto Raptors,Eastern,40,42,,-1.83
2008-09,Toronto Raptors,Eastern,33,49,,-2.54
2007-08,Toronto Raptors,Eastern,41,41,Lost E. Conf. 1st Rnd.,2.47
2006-07,Toronto Raptors,Eastern,47,35,Lost E. Conf. 1st Rnd.,0.61
2005-06,Toronto Raptors,Eastern,27,55,,-3.03
2004-05,Toronto Raptors,Eastern,33,49,,-1.81
2003-04,Toronto Raptors,Eastern,33,49,,-3.42
2002-03,Toronto Raptors,Eastern,24,58,,-6.1
2001-02,Toronto Raptors,Eastern,42,40,Lost E. Conf. 1st Rnd.,-0.71
2000-01,Toronto Raptors,Eastern,47,35,Lost E. Conf. Semis,1.69
1999-00,Toronto Raptors,Eastern,45,37,Lost E. Conf. 1st Rnd.,-0.46
1998-99,Toronto Raptors,Eastern,23,27,,-1.32
1997-98,Toronto Raptors,Eastern,16,66,,-8.33
1996-97,Toronto Raptors,Eastern,30,52,,-2.56
1995-96,Toronto Raptors,Eastern,21,61,,-7.2
2021-22,Chicago Bulls,Eastern,46,36,Lost E. Conf. 1st Rnd.,-0.38
2020-21,Chicago Bulls,Eastern,31,41,,-0.94
2019-20,Chicago Bulls,Eastern,22,43,,-4
2018-19,Chicago Bulls,Eastern,22,60,,-8.32
2017-18,Chicago Bulls,Eastern,27,55,,-6.84
2016-17,Chicago Bulls,Eastern,41,41,Lost E. Conf. 1st Rnd.,0.03
2015-16,Chicago Bulls,Eastern,42,40,,-1.46
2014-15,Chicago Bulls,Eastern,50,32,Lost E. Conf. Semis,2.54
2013-14,Chicago Bulls,Eastern,48,34,Lost E. Conf. 1st Rnd.,1.2
2012-13,Chicago Bulls,Eastern,45,37,Lost E. Conf. Semis,-0.02
2011-12,Chicago Bulls,Eastern,50,16,Lost E. Conf. 1st Rnd.,7.43
2010-11,Chicago Bulls,Eastern,62,20,Lost E. Conf. Finals,6.53
2009-10,Chicago Bulls,Eastern,41,41,Lost E. Conf. 1st Rnd.,-1.64
2008-09,Chicago Bulls,Eastern,41,41,Lost E. Conf. 1st Rnd.,-0.16
2007-08,Chicago Bulls,Eastern,33,49,,-3.19
2006-07,Chicago Bulls,Eastern,49,33,Lost E. Conf. Semis,4.52
2005-06,Chicago Bulls,Eastern,41,41,Lost E. Conf. 1st Rnd.,0.51
2004-05,Chicago Bulls,Eastern,47,35,Lost E. Conf. 1st Rnd.,0.65
2003-04,Chicago Bulls,Eastern,23,59,,-6.69
2002-03,Chicago Bulls,Eastern,30,52,,-5.31
2001-02,Chicago Bulls,Eastern,21,61,,-8.52
2000-01,Chicago Bulls,Eastern,15,67,,-9.09
1999-00,Chicago Bulls,Eastern,17,65,,-9.23
1998-99,Chicago Bulls,Eastern,13,37,,-8.58
1997-98,Chicago Bulls,Eastern,62,20,Won Finals,7.24
1996-97,Chicago Bulls,Eastern,69,13,Won Finals,10.7
1995-96,Chicago Bulls,Eastern,72,10,Won Finals,11.8
1994-95,Chicago Bulls,Eastern,47,35,Lost E. Conf. Semis,4.32
1993-94,Chicago Bulls,Eastern,55,27,Lost E. Conf. Semis,2.87
1992-93,Chicago Bulls,Eastern,57,25,Won Finals,6.19
1991-92,Chicago Bulls,Eastern,67,15,Won Finals,10.07
1990-91,Chicago Bulls,Eastern,61,21,Won Finals,8.57
1989-90,Chicago Bulls,Eastern,55,27,Lost E. Conf. Finals,2.74
1988-89,Chicago Bulls,Eastern,47,35,Lost E. Conf. Finals,2.13
1987-88,Chicago Bulls,Eastern,50,32,Lost E. Conf. Semis,3.76
1986-87,Chicago Bulls,Eastern,40,42,Lost E. Conf. 1st Rnd.,1.26
1985-86,Chicago Bulls,Eastern,30,52,Lost E. Conf. 1st Rnd.,-3.12
1984-85,Chicago Bulls,Eastern,38,44,Lost E. Conf. 1st Rnd.,-0.5
1983-84,Chicago Bulls,Eastern,27,55,,-4.69
1982-83,Chicago Bulls,Eastern,28,54,,-4.41
1981-82,Chicago Bulls,Eastern,34,48,,-1.57
1980-81,Chicago Bulls,Eastern,45,37,Lost E. Conf. Semis,2.34
1979-80,Chicago Bulls,Western,30,52,,-2.63
1978-79,Chicago Bulls,Western,31,51,,-3.78
1977-78,Chicago Bulls,Western,40,42,,-0.79
1976-77,Chicago Bulls,Western,44,38,Lost W. Conf. 1st Rnd.,0.92
1975-76,Chicago Bulls,Western,24,58,,-2.89
1974-75,Chicago Bulls,Western,47,35,Lost W. Conf. Finals,2.88
1973-74,Chicago Bulls,Western,54,28,Lost W. Conf. Finals,3.2
1972-73,Chicago Bulls,Western,51,31,Lost W. Conf. Semis,3.43
1971-72,Chicago Bulls,Western,57,25,Lost W. Conf. Semis,7.91
1970-71,Chicago Bulls,Western,51,31,Lost W. Conf. Semis,5.47
1969-70,Chicago Bulls,Western,39,43,Lost W. Div. Semis,-1.71
1968-69,Chicago Bulls,Western,33,49,,-2.11
1967-68,Chicago Bulls,Western,29,53,Lost W. Div. Semis,-3.76
1966-67,Chicago Bulls,Western,33,48,Lost W. Div. Semis,-3.37
2021-22,Cleveland Cavaliers,Eastern,44,38,,2.04
2020-21,Cleveland Cavaliers,Eastern,22,50,,-8.19
2019-20,Cleveland Cavaliers,Eastern,19,46,,-7.77
2018-19,Cleveland Cavaliers,Eastern,19,63,,-9.39
2017-18,Cleveland Cavaliers,Eastern,50,32,Lost Finals,0.59
2016-17,Cleveland Cavaliers,Eastern,51,31,Lost Finals,2.87
2015-16,Cleveland Cavaliers,Eastern,57,25,Won Finals,5.45
2014-15,Cleveland Cavaliers,Eastern,53,29,Lost Finals,4.08
2013-14,Cleveland Cavaliers,Eastern,33,49,,-3.86
2012-13,Cleveland Cavaliers,Eastern,24,58,,-4.87
2011-12,Cleveland Cavaliers,Eastern,21,45,,-7.34
2010-11,Cleveland Cavaliers,Eastern,19,63,,-8.88
2009-10,Cleveland Cavaliers,Eastern,61,21,Lost E. Conf. Semis,6.17
2008-09,Cleveland Cavaliers,Eastern,66,16,Lost E. Conf. Finals,8.68
2007-08,Cleveland Cavaliers,Eastern,45,37,Lost E. Conf. Semis,-0.53
2006-07,Cleveland Cavaliers,Eastern,50,32,Lost Finals,3.33
2005-06,Cleveland Cavaliers,Eastern,50,32,Lost E. Conf. Semis,2.17
2004-05,Cleveland Cavaliers,Eastern,42,40,,0.27
2003-04,Cleveland Cavaliers,Eastern,35,47,,-3.07
2002-03,Cleveland Cavaliers,Eastern,17,65,,-9.59
2001-02,Cleveland Cavaliers,Eastern,29,53,,-3.52
2000-01,Cleveland Cavaliers,Eastern,30,52,,-4.48
1999-00,Cleveland Cavaliers,Eastern,32,50,,-3.64
1998-99,Cleveland Cavaliers,Eastern,22,28,,-0.94
1997-98,Cleveland Cavaliers,Eastern,47,35,Lost E. Conf. 1st Rnd.,3.06
1996-97,Cleveland Cavaliers,Eastern,42,40,,2.32
1995-96,Cleveland Cavaliers,Eastern,47,35,Lost E. Conf. 1st Rnd.,2.49
1994-95,Cleveland Cavaliers,Eastern,43,39,Lost E. Conf. 1st Rnd.,0.55
1993-94,Cleveland Cavaliers,Eastern,47,35,Lost E. Conf. 1st Rnd.,3.64
1992-93,Cleveland Cavaliers,Eastern,54,28,Lost E. Conf. Semis,6.3
1991-92,Cleveland Cavaliers,Eastern,57,25,Lost E. Conf. Finals,5.34
1990-91,Cleveland Cavaliers,Eastern,33,49,,-2.33
1989-90,Cleveland Cavaliers,Eastern,42,40,Lost E. Conf. 1st Rnd.,-0.62
1988-89,Cleveland Cavaliers,Eastern,57,25,Lost E. Conf. 1st Rnd.,7.95
1987-88,Cleveland Cavaliers,Eastern,42,40,Lost E. Conf. 1st Rnd.,1.28
1986-87,Cleveland Cavaliers,Eastern,31,51,,-3.19
1985-86,Cleveland Cavaliers,Eastern,29,53,,-2.19
1984-85,Cleveland Cavaliers,Eastern,36,46,Lost E. Conf. 1st Rnd.,-2.27
1983-84,Cleveland Cavaliers,Eastern,28,54,,-3.71
1982-83,Cleveland Cavaliers,Eastern,23,59,,-6.78
1981-82,Cleveland Cavaliers,Eastern,15,67,,-7.77
1980-81,Cleveland Cavaliers,Eastern,28,54,,-4.15
1979-80,Cleveland Cavaliers,Eastern,37,45,,0.43
1978-79,Cleveland Cavaliers,Eastern,30,52,,-3.57
1977-78,Cleveland Cavaliers,Eastern,43,39,Lost E. Conf. 1st Rnd.,0.44
1976-77,Cleveland Cavaliers,Eastern,43,39,Lost E. Conf. 1st Rnd.,1.08
1975-76,Cleveland Cavaliers,Eastern,49,33,Lost E. Conf. Finals,2.34
1974-75,Cleveland Cavaliers,Eastern,40,42,,-0.31
1973-74,Cleveland Cavaliers,Eastern,29,53,,-4.16
1972-73,Cleveland Cavaliers,Eastern,32,50,,-2.64
1971-72,Cleveland Cavaliers,Eastern,23,59,,-7.9
1970-71,Cleveland Cavaliers,Eastern,15,67,,-12.04
2021-22,Detroit Pistons,Eastern,23,59,,-7.36
2020-21,Detroit Pistons,Eastern,20,52,,-4.38
2019-20,Detroit Pistons,Eastern,20,46,,-4.38
2018-19,Detroit Pistons,Eastern,41,41,Lost E. Conf. 1st Rnd.,-0.56
2017-18,Detroit Pistons,Eastern,39,43,,-0.26
2016-17,Detroit Pistons,Eastern,37,45,,-1.29
2015-16,Detroit Pistons,Eastern,44,38,Lost E. Conf. 1st Rnd.,0.43
2014-15,Detroit Pistons,Eastern,32,50,,-1.39
2013-14,Detroit Pistons,Eastern,29,53,,-4.13
2012-13,Detroit Pistons,Eastern,29,53,,-4.33
2011-12,Detroit Pistons,Eastern,25,41,,-5.19
2010-11,Detroit Pistons,Eastern,30,52,,-3.78
2009-10,Detroit Pistons,Eastern,27,55,,-5.02
2008-09,Detroit Pistons,Eastern,39,43,Lost E. Conf. 1st Rnd.,-0.36
2007-08,Detroit Pistons,Eastern,59,23,Lost E. Conf. Finals,6.67
2006-07,Detroit Pistons,Eastern,53,29,Lost E. Conf. Finals,3.69
2005-06,Detroit Pistons,Eastern,64,18,Lost E. Conf. Finals,6.24
2004-05,Detroit Pistons,Eastern,54,28,Lost Finals,3.31
2003-04,Detroit Pistons,Eastern,54,28,Won Finals,5.04
2002-03,Detroit Pistons,Eastern,50,32,Lost E. Conf. Finals,2.97
2001-02,Detroit Pistons,Eastern,50,32,Lost E. Conf. Semis,1.69
2000-01,Detroit Pistons,Eastern,32,50,,-2.08
1999-00,Detroit Pistons,Eastern,42,40,Lost E. Conf. 1st Rnd.,1.13
1998-99,Detroit Pistons,Eastern,29,21,Lost E. Conf. 1st Rnd.,3.97
1997-98,Detroit Pistons,Eastern,37,45,,1.95
1996-97,Detroit Pistons,Eastern,54,28,Lost E. Conf. 1st Rnd.,5.45
1995-96,Detroit Pistons,Eastern,46,36,Lost E. Conf. 1st Rnd.,2.45
1994-95,Detroit Pistons,Eastern,28,54,,-7.08
1993-94,Detroit Pistons,Eastern,20,62,,-7.46
1992-93,Detroit Pistons,Eastern,40,42,,-1.1
1991-92,Detroit Pistons,Eastern,48,34,Lost E. Conf. 1st Rnd.,2.06
1990-91,Detroit Pistons,Eastern,50,32,Lost E. Conf. Finals,3.08
1989-90,Detroit Pistons,Eastern,59,23,Won Finals,5.41
1988-89,Detroit Pistons,Eastern,63,19,Won Finals,6.24
1987-88,Detroit Pistons,Eastern,54,28,Lost Finals,5.46
1986-87,Detroit Pistons,Eastern,52,30,Lost E. Conf. Finals,3.51
1985-86,Detroit Pistons,Eastern,46,36,Lost E. Conf. 1st Rnd.,1.44
1984-85,Detroit Pistons,Eastern,46,36,Lost E. Conf. Semis,2.73
1983-84,Detroit Pistons,Eastern,49,33,Lost E. Conf. 1st Rnd.,3.52
1982-83,Detroit Pistons,Eastern,37,45,,-0.17
1981-82,Detroit Pistons,Eastern,39,43,,-0.63
1980-81,Detroit Pistons,Eastern,21,61,,-5.58
1979-80,Detroit Pistons,Eastern,16,66,,-7.57
1978-79,Detroit Pistons,Eastern,30,52,,-2.6
1977-78,Detroit Pistons,Western,38,44,,-1.22
1976-77,Detroit Pistons,Western,44,38,Lost W. Conf. 1st Rnd.,-1
1975-76,Detroit Pistons,Western,36,46,Lost W. Conf. Semis,-1.18
1974-75,Detroit Pistons,Western,40,42,Lost W. Conf. 1st Rnd.,-1.19
1973-74,Detroit Pistons,Western,52,30,Lost W. Conf. Semis,4.02
1972-73,Detroit Pistons,Western,40,42,,0.54
1971-72,Detroit Pistons,Western,26,56,,-6.11
1970-71,Detroit Pistons,Western,45,37,,-0.33
1969-70,Detroit Pistons,Eastern,31,51,,-2.94
1968-69,Detroit Pistons,Eastern,32,50,,-2.79
1967-68,Detroit Pistons,Eastern,40,42,Lost E. Div. Semis,-1.7
1966-67,Detroit Pistons,Western,30,51,,-4.98
1965-66,Detroit Pistons,Western,22,58,,-6.07
1964-65,Detroit Pistons,Western,31,49,,-3.03
1963-64,Detroit Pistons,Western,23,57,,-6.77
1962-63,Detroit Pistons,Western,34,46,Lost W. Div. Semis,-3.38
1961-62,Detroit Pistons,Western,37,43,Lost W. Div. Finals,-1.72
1960-61,Detroit Pistons,Western,34,45,Lost W. Div. Semis,-2.11
1959-60,Detroit Pistons,Western,30,45,Lost W. Div. Semis,-3.45
1958-59,Detroit Pistons,Western,28,44,Lost W. Div. Semis,-1.36
1957-58,Detroit Pistons,Western,33,39,Lost W. Div. Finals,-2.32
1956-57,Fort Wayne Pistons,Western,34,38,Lost W. Div. Semis,-2.18
1955-56,Fort Wayne Pistons,Western,37,35,Lost Finals,0.45
1954-55,Fort Wayne Pistons,Western,43,29,Lost Finals,2.01
1953-54,Fort Wayne Pistons,Western,40,32,Eliminated in W. Div. Rnd. Robin,1.45
1952-53,Fort Wayne Pistons,Western,36,33,Lost W. Div. Finals,0.17
1951-52,Fort Wayne Pistons,Western,29,37,Lost W. Div. Semis,-1.83
1950-51,Fort Wayne Pistons,Western,32,36,Lost W. Div. Semis,-1.81
1949-50,Fort Wayne Pistons,Central,40,28,Lost Central Div. Finals,1.84
1948-49,Fort Wayne Pistons,Western,22,38,,-2.85
2021-22,Indiana Pacers,Eastern,25,57,,-3.26
2020-21,Indiana Pacers,Eastern,34,38,,-0.13
2019-20,Indiana Pacers,Eastern,45,28,Lost E. Conf. 1st Rnd.,1.63
2018-19,Indiana Pacers,Eastern,48,34,Lost E. Conf. 1st Rnd.,2.76
2017-18,Indiana Pacers,Eastern,48,34,Lost E. Conf. 1st Rnd.,1.18
2016-17,Indiana Pacers,Eastern,42,40,Lost E. Conf. 1st Rnd.,-0.64
2015-16,Indiana Pacers,Eastern,45,37,Lost E. Conf. 1st Rnd.,1.62
2014-15,Indiana Pacers,Eastern,38,44,,-0.23
2013-14,Indiana Pacers,Eastern,56,26,Lost E. Conf. Finals,3.63
2012-13,Indiana Pacers,Eastern,49,32,Lost E. Conf. Finals,3.34
2011-12,Indiana Pacers,Eastern,42,24,Lost E. Conf. Semis,2.6
2010-11,Indiana Pacers,Eastern,37,45,Lost E. Conf. 1st Rnd.,-1.38
2009-10,Indiana Pacers,Eastern,32,50,,-3.11
2008-09,Indiana Pacers,Eastern,36,46,,-0.76
2007-08,Indiana Pacers,Eastern,36,46,,-1.87
2006-07,Indiana Pacers,Eastern,35,47,,-2.62
2005-06,Indiana Pacers,Eastern,41,41,Lost E. Conf. 1st Rnd.,1.62
2004-05,Indiana Pacers,Eastern,44,38,Lost E. Conf. Semis,0.49
2003-04,Indiana Pacers,Eastern,61,21,Lost E. Conf. Finals,4.93
2002-03,Indiana Pacers,Eastern,48,34,Lost E. Conf. 1st Rnd.,2.79
2001-02,Indiana Pacers,Eastern,42,40,Lost E. Conf. 1st Rnd.,-0.07
2000-01,Indiana Pacers,Eastern,41,41,Lost E. Conf. 1st Rnd.,-0.77
1999-00,Indiana Pacers,Eastern,56,26,Lost Finals,4.15
1998-99,Indiana Pacers,Eastern,33,17,Lost E. Conf. Finals,3.86
1997-98,Indiana Pacers,Eastern,58,24,Lost E. Conf. Finals,6.25
1996-97,Indiana Pacers,Eastern,39,43,,1.49
1995-96,Indiana Pacers,Eastern,52,30,Lost E. Conf. 1st Rnd.,3.11
1994-95,Indiana Pacers,Eastern,52,30,Lost E. Conf. Finals,3.35
1993-94,Indiana Pacers,Eastern,47,35,Lost E. Conf. Finals,3.26
1992-93,Indiana Pacers,Eastern,41,41,Lost E. Conf. 1st Rnd.,1.77
1991-92,Indiana Pacers,Eastern,40,42,Lost E. Conf. 1st Rnd.,1.85
1990-91,Indiana Pacers,Eastern,41,41,Lost E. Conf. 1st Rnd.,-0.37
1989-90,Indiana Pacers,Eastern,42,40,Lost E. Conf. 1st Rnd.,-0.18
1988-89,Indiana Pacers,Eastern,28,54,,-3
1987-88,Indiana Pacers,Eastern,38,44,,-0.18
1986-87,Indiana Pacers,Eastern,41,41,Lost E. Conf. 1st Rnd.,-0.17
1985-86,Indiana Pacers,Eastern,26,56,,-2.66
1984-85,Indiana Pacers,Eastern,22,60,,-5.46
1983-84,Indiana Pacers,Eastern,26,56,,-4.25
1982-83,Indiana Pacers,Eastern,20,62,,-5.36
1981-82,Indiana Pacers,Eastern,35,47,,-1.49
1980-81,Indiana Pacers,Eastern,44,38,Lost E. Conf. 1st Rnd.,1.72
1979-80,Indiana Pacers,Eastern,37,45,,-0.54
1978-79,Indiana Pacers,Western,38,44,,-1.41
1977-78,Indiana Pacers,Western,31,51,,-2.37
1976-77,Indiana Pacers,Western,36,46,,-1.68
1975-76,Indiana Pacers,Western,39,45,Lost 1st Rnd.,0.29
1974-75,Indiana Pacers,Western,45,39,Lost Finals,1.14
1973-74,Indiana Pacers,Western,46,38,Lost W. Div. Finals,0.68
1972-73,Indiana Pacers,Western,51,33,Won Finals,1.97
1971-72,Indiana Pacers,Western,47,37,Won Finals,2.72
1970-71,Indiana Pacers,Western,58,26,Lost W. Div. Finals,5.63
1969-70,Indiana Pacers,Eastern,59,25,Won Finals,2.67
1968-69,Indiana Pacers,Eastern,44,34,Lost Finals,3.35
1967-68,Indiana Pacers,Eastern,38,40,Lost E. Div. Semis,0.5
2021-22,Milwaukee Bucks,Eastern,51,31,Lost E. Conf. Semis,3.22
2020-21,Milwaukee Bucks,Eastern,46,26,Won Finals,5.57
2019-20,Milwaukee Bucks,Eastern,56,17,Lost E. Conf. Semis,9.41
2018-19,Milwaukee Bucks,Eastern,60,22,Lost E. Conf. Finals,8.04
2017-18,Milwaukee Bucks,Eastern,44,38,Lost E. Conf. 1st Rnd.,-0.45
2016-17,Milwaukee Bucks,Eastern,42,40,Lost E. Conf. 1st Rnd.,-0.45
2015-16,Milwaukee Bucks,Eastern,33,49,,-3.98
2014-15,Milwaukee Bucks,Eastern,41,41,Lost E. Conf. 1st Rnd.,-0.09
2013-14,Milwaukee Bucks,Eastern,15,67,,-8.41
2012-13,Milwaukee Bucks,Eastern,38,44,Lost E. Conf. 1st Rnd.,-1.83
2011-12,Milwaukee Bucks,Eastern,31,35,,-0.23
2010-11,Milwaukee Bucks,Eastern,35,47,,-1.02
2009-10,Milwaukee Bucks,Eastern,46,36,Lost E. Conf. 1st Rnd.,1.37
2008-09,Milwaukee Bucks,Eastern,34,48,,-0.88
2007-08,Milwaukee Bucks,Eastern,26,56,,-6.92
2006-07,Milwaukee Bucks,Eastern,28,54,,-4.43
2005-06,Milwaukee Bucks,Eastern,40,42,Lost E. Conf. 1st Rnd.,-1.07
2004-05,Milwaukee Bucks,Eastern,30,52,,-3.09
2003-04,Milwaukee Bucks,Eastern,41,41,Lost E. Conf. 1st Rnd.,0.42
2002-03,Milwaukee Bucks,Eastern,42,40,Lost E. Conf. 1st Rnd.,-0.24
2001-02,Milwaukee Bucks,Eastern,41,41,,-0.62
2000-01,Milwaukee Bucks,Eastern,52,30,Lost E. Conf. Finals,3.14
1999-00,Milwaukee Bucks,Eastern,42,40,Lost E. Conf. 1st Rnd.,-0.06
1998-99,Milwaukee Bucks,Eastern,28,22,Lost E. Conf. 1st Rnd.,1.66
1997-98,Milwaukee Bucks,Eastern,36,46,,-1.33
1996-97,Milwaukee Bucks,Eastern,33,49,,-1.38
1995-96,Milwaukee Bucks,Eastern,25,57,,-4.92
1994-95,Milwaukee Bucks,Eastern,34,48,,-4.3
1993-94,Milwaukee Bucks,Eastern,20,62,,-6.24
1992-93,Milwaukee Bucks,Eastern,28,54,,-3.26
1991-92,Milwaukee Bucks,Eastern,31,51,,-1.46
1990-91,Milwaukee Bucks,Eastern,48,34,Lost E. Conf. 1st Rnd.,2.33
1989-90,Milwaukee Bucks,Eastern,44,38,Lost E. Conf. 1st Rnd.,-1.06
1988-89,Milwaukee Bucks,Eastern,49,33,Lost E. Conf. Semis,4.11
1987-88,Milwaukee Bucks,Eastern,42,40,Lost E. Conf. 1st Rnd.,1.21
1986-87,Milwaukee Bucks,Eastern,50,32,Lost E. Conf. Semis,4.04
1985-86,Milwaukee Bucks,Eastern,57,25,Lost E. Conf. Finals,8.69
1984-85,Milwaukee Bucks,Eastern,59,23,Lost E. Conf. Semis,6.69
1983-84,Milwaukee Bucks,Eastern,50,32,Lost E. Conf. Finals,4.04
1982-83,Milwaukee Bucks,Eastern,51,31,Lost E. Conf. Finals,4.32
1981-82,Milwaukee Bucks,Eastern,55,27,Lost E. Conf. Semis,5.38
1980-81,Milwaukee Bucks,Eastern,60,22,Lost E. Conf. Semis,7.14
1979-80,Milwaukee Bucks,Western,49,33,Lost W. Conf. Semis,3.57
1978-79,Milwaukee Bucks,Western,38,44,,2.12
1977-78,Milwaukee Bucks,Western,44,38,Lost W. Conf. Semis,-0.59
1976-77,Milwaukee Bucks,Western,30,52,,-2.99
1975-76,Milwaukee Bucks,Western,38,44,Lost W. Conf. 1st Rnd.,-1.55
1974-75,Milwaukee Bucks,Western,38,44,,0.25
1973-74,Milwaukee Bucks,Western,59,23,Lost Finals,7.61
1972-73,Milwaukee Bucks,Western,60,22,Lost W. Conf. Semis,7.84
1971-72,Milwaukee Bucks,Western,63,19,Lost W. Conf. Finals,10.7
1970-71,Milwaukee Bucks,Western,66,16,Won Finals,11.92
1969-70,Milwaukee Bucks,Eastern,56,26,Lost E. Div. Finals,4.25
1968-69,Milwaukee Bucks,Eastern,27,55,,-5.07
2021-22,Atlanta Hawks,Eastern,43,39,Lost E. Conf. 1st Rnd.,1.55
2020-21,Atlanta Hawks,Eastern,41,31,Lost E. Conf. Finals,2.14
2019-20,Atlanta Hawks,Eastern,20,47,,-7.71
2018-19,Atlanta Hawks,Eastern,29,53,,-6.06
2017-18,Atlanta Hawks,Eastern,24,58,,-5.3
2016-17,Atlanta Hawks,Eastern,43,39,Lost E. Conf. 1st Rnd.,-1.23
2015-16,Atlanta Hawks,Eastern,48,34,Lost E. Conf. Semis,3.49
2014-15,Atlanta Hawks,Eastern,60,22,Lost E. Conf. Finals,4.75
2013-14,Atlanta Hawks,Eastern,38,44,Lost E. Conf. 1st Rnd.,-0.88
2012-13,Atlanta Hawks,Eastern,44,38,Lost E. Conf. 1st Rnd.,-0.08
2011-12,Atlanta Hawks,Eastern,40,26,Lost E. Conf. 1st Rnd.,2.67
2010-11,Atlanta Hawks,Eastern,44,38,Lost E. Conf. Semis,-1.1
2009-10,Atlanta Hawks,Eastern,53,29,Lost E. Conf. Semis,4.44
2008-09,Atlanta Hawks,Eastern,47,35,Lost E. Conf. Semis,1.7
2007-08,Atlanta Hawks,Eastern,37,45,Lost E. Conf. 1st Rnd.,-2.23
2006-07,Atlanta Hawks,Eastern,30,52,,-4.86
2005-06,Atlanta Hawks,Eastern,26,56,,-4.69
2004-05,Atlanta Hawks,Eastern,13,69,,-9.62
2003-04,Atlanta Hawks,Eastern,28,54,,-5
2002-03,Atlanta Hawks,Eastern,35,47,,-3.87
2001-02,Atlanta Hawks,Eastern,33,49,,-4.41
2000-01,Atlanta Hawks,Eastern,25,57,,-5.55
1999-00,Atlanta Hawks,Eastern,28,54,,-5.41
1998-99,Atlanta Hawks,Eastern,31,19,Lost E. Conf. Semis,2.82
1997-98,Atlanta Hawks,Eastern,50,32,Lost E. Conf. 1st Rnd.,3.85
1996-97,Atlanta Hawks,Eastern,56,26,Lost E. Conf. Semis,5.52
1995-96,Atlanta Hawks,Eastern,46,36,Lost E. Conf. Semis,1.29
1994-95,Atlanta Hawks,Eastern,42,40,Lost E. Conf. 1st Rnd.,1.06
1993-94,Atlanta Hawks,Eastern,57,25,Lost E. Conf. Semis,4.94
1992-93,Atlanta Hawks,Eastern,43,39,Lost E. Conf. 1st Rnd.,-0.67
1991-92,Atlanta Hawks,Eastern,38,44,,-1.15
1990-91,Atlanta Hawks,Eastern,43,39,Lost E. Conf. 1st Rnd.,0.72
1989-90,Atlanta Hawks,Eastern,41,41,,0.64
1988-89,Atlanta Hawks,Eastern,52,30,Lost E. Conf. 1st Rnd.,5.26
1987-88,Atlanta Hawks,Eastern,50,32,Lost E. Conf. Semis,4.02
1986-87,Atlanta Hawks,Eastern,57,25,Lost E. Conf. Semis,7.18
1985-86,Atlanta Hawks,Eastern,50,32,Lost E. Conf. Semis,2.59
1984-85,Atlanta Hawks,Eastern,34,48,,-1.14
1983-84,Atlanta Hawks,Eastern,40,42,Lost E. Conf. 1st Rnd.,-1.08
1982-83,Atlanta Hawks,Eastern,43,39,Lost E. Conf. 1st Rnd.,-0.72
1981-82,Atlanta Hawks,Eastern,42,40,Lost E. Conf. 1st Rnd.,0.81
1980-81,Atlanta Hawks,Eastern,31,51,,-2.37
1979-80,Atlanta Hawks,Eastern,50,32,Lost E. Conf. Semis,2.83
1978-79,Atlanta Hawks,Eastern,46,36,Lost E. Conf. Semis,1.92
1977-78,Atlanta Hawks,Eastern,41,41,Lost E. Conf. 1st Rnd.,-0.13
1976-77,Atlanta Hawks,Eastern,31,51,,-3.87
1975-76,Atlanta Hawks,Eastern,29,53,,-2.66
1974-75,Atlanta Hawks,Eastern,31,51,,-1.32
1973-74,Atlanta Hawks,Eastern,35,47,,-1.47
1972-73,Atlanta Hawks,Eastern,46,36,Lost E. Conf. Semis,-0.15
1971-72,Atlanta Hawks,Eastern,36,46,Lost E. Conf. Semis,-1.94
1970-71,Atlanta Hawks,Eastern,36,46,Lost E. Conf. Semis,-1.3
1969-70,Atlanta Hawks,Western,48,34,Lost W. Div. Finals,0.31
1968-69,Atlanta Hawks,Western,48,34,Lost W. Div. Finals,2.06
1967-68,St. Louis Hawks,Western,56,26,Lost W. Div. Semis,2.37
1966-67,St. Louis Hawks,Western,39,42,Lost W. Div. Finals,-1.44
1965-66,St. Louis Hawks,Western,36,44,Lost W. Div. Finals,-0.5
1964-65,St. Louis Hawks,Western,45,35,Lost W. Div. Semis,2.68
1963-64,St. Louis Hawks,Western,46,34,Lost W. Div. Finals,1.39
1962-63,St. Louis Hawks,Western,48,32,Lost W. Div. Finals,1.38
1961-62,St. Louis Hawks,Western,29,51,,-2.96
1960-61,St. Louis Hawks,Western,51,28,Lost Finals,2.99
1959-60,St. Louis Hawks,Western,46,29,Lost Finals,1.77
1958-59,St. Louis Hawks,Western,49,23,Lost W. Div. Finals,2.89
1957-58,St. Louis Hawks,Western,41,31,Won Finals,0.82
1956-57,St. Louis Hawks,Western,34,38,Lost Finals,-0.27
1955-56,St. Louis Hawks,Western,33,39,Lost W. Div. Finals,-1.42
1954-55,Milwaukee Hawks,Western,26,46,,-2.66
1953-54,Milwaukee Hawks,Western,21,51,,-4.55
1952-53,Milwaukee Hawks,Western,27,44,,-2.49
1951-52,Milwaukee Hawks,Western,17,49,,-7.04
1950-51,Tri-Cities Blackhawks,Western,25,43,,-3.22
1949-50,Tri-Cities Blackhawks,Western,29,35,Lost W. Div. Semis,-1.43
2021-22,Charlotte Hornets,Eastern,43,39,,0.53
2020-21,Charlotte Hornets,Eastern,33,39,,-1.94
2019-20,Charlotte Hornets,Eastern,23,42,,-7.03
2018-19,Charlotte Hornets,Eastern,39,43,,-1.32
2017-18,Charlotte Hornets,Eastern,36,46,,0.07
2016-17,Charlotte Hornets,Eastern,36,46,,-0.07
2015-16,Charlotte Hornets,Eastern,48,34,Lost E. Conf. 1st Rnd.,2.36
2014-15,Charlotte Hornets,Eastern,33,49,,-3.44
2013-14,Charlotte Bobcats,Eastern,43,39,Lost E. Conf. 1st Rnd.,-0.89
2012-13,Charlotte Bobcats,Eastern,21,61,,-9.29
2011-12,Charlotte Bobcats,Eastern,7,59,,-13.96
2010-11,Charlotte Bobcats,Eastern,34,48,,-4.08
2009-10,Charlotte Bobcats,Eastern,44,38,Lost E. Conf. 1st Rnd.,1.3
2008-09,Charlotte Bobcats,Eastern,35,47,,-1.2
2007-08,Charlotte Bobcats,Eastern,32,50,,-4.49
2006-07,Charlotte Bobcats,Eastern,33,49,,-3.97
2005-06,Charlotte Bobcats,Eastern,26,56,,-3.9
2004-05,Charlotte Bobcats,Eastern,18,64,,-6.15
2001-02,Charlotte Hornets,Eastern,44,38,Lost E. Conf. Semis,0.57
2000-01,Charlotte Hornets,Eastern,46,36,Lost E. Conf. Semis,1.45
1999-00,Charlotte Hornets,Eastern,49,33,Lost E. Conf. 1st Rnd.,2.33
1998-99,Charlotte Hornets,Eastern,26,24,,0.63
1997-98,Charlotte Hornets,Eastern,51,31,Lost E. Conf. Semis,2.45
1996-97,Charlotte Hornets,Eastern,54,28,Lost E. Conf. 1st Rnd.,2.13
1995-96,Charlotte Hornets,Eastern,41,41,,-0.48
1994-95,Charlotte Hornets,Eastern,50,32,Lost E. Conf. 1st Rnd.,2.87
1993-94,Charlotte Hornets,Eastern,41,41,,-0.23
1992-93,Charlotte Hornets,Eastern,44,38,Lost E. Conf. Semis,-0.02
1991-92,Charlotte Hornets,Eastern,31,51,,-3.57
1990-91,Charlotte Hornets,Eastern,26,56,,-4.95
1989-90,Charlotte Hornets,Eastern,19,63,,-7
1988-89,Charlotte Hornets,Eastern,20,62,,-7.74
2021-22,Miami Heat,Eastern,53,29,Lost E. Conf. Finals,4.23
2020-21,Miami Heat,Eastern,40,32,Lost E. Conf. 1st Rnd.,-0.06
2019-20,Miami Heat,Eastern,44,29,Lost Finals,2.59
2018-19,Miami Heat,Eastern,39,43,,-0.45
2017-18,Miami Heat,Eastern,44,38,Lost E. Conf. 1st Rnd.,0.15
2016-17,Miami Heat,Eastern,41,41,,0.77
2015-16,Miami Heat,Eastern,48,34,Lost E. Conf. Semis,1.5
2014-15,Miami Heat,Eastern,37,45,,-2.92
2013-14,Miami Heat,Eastern,54,28,Lost Finals,4.15
2012-13,Miami Heat,Eastern,66,16,Won Finals,7.03
2011-12,Miami Heat,Eastern,46,20,Won Finals,5.72
2010-11,Miami Heat,Eastern,58,24,Lost Finals,6.76
2009-10,Miami Heat,Eastern,47,35,Lost E. Conf. 1st Rnd.,1.99
2008-09,Miami Heat,Eastern,43,39,Lost E. Conf. 1st Rnd.,0.49
2007-08,Miami Heat,Eastern,15,67,,-8.53
2006-07,Miami Heat,Eastern,44,38,Lost E. Conf. 1st Rnd.,-1.21
2005-06,Miami Heat,Eastern,52,30,Won Finals,3.59
2004-05,Miami Heat,Eastern,59,23,Lost E. Conf. Finals,5.77
2003-04,Miami Heat,Eastern,42,40,Lost E. Conf. Semis,-0.13
2002-03,Miami Heat,Eastern,25,57,,-5.13
2001-02,Miami Heat,Eastern,36,46,,-1.84
2000-01,Miami Heat,Eastern,50,32,Lost E. Conf. 1st Rnd.,1.73
1999-00,Miami Heat,Eastern,52,30,Lost E. Conf. Semis,2.75
1998-99,Miami Heat,Eastern,33,17,Lost E. Conf. 1st Rnd.,5.11
1997-98,Miami Heat,Eastern,55,27,Lost E. Conf. 1st Rnd.,5.09
1996-97,Miami Heat,Eastern,61,21,Lost E. Conf. Finals,5.56
1995-96,Miami Heat,Eastern,42,40,Lost E. Conf. 1st Rnd.,1.46
1994-95,Miami Heat,Eastern,32,50,,-1.85
1993-94,Miami Heat,Eastern,42,40,Lost E. Conf. 1st Rnd.,2.4
1992-93,Miami Heat,Eastern,36,46,,-0.93
1991-92,Miami Heat,Eastern,38,44,Lost E. Conf. 1st Rnd.,-3.94
1990-91,Miami Heat,Eastern,24,58,,-5.91
1989-90,Miami Heat,Eastern,18,64,,-9.59
1988-89,Miami Heat,Eastern,15,67,,-11.13
2021-22,Orlando Magic,Eastern,22,60,,-7.67
2020-21,Orlando Magic,Eastern,21,51,,-9.02
2019-20,Orlando Magic,Eastern,33,40,Lost E. Conf. 1st Rnd.,-0.93
2018-19,Orlando Magic,Eastern,42,40,Lost E. Conf. 1st Rnd.,0.28
2017-18,Orlando Magic,Eastern,25,57,,-4.92
2016-17,Orlando Magic,Eastern,29,53,,-6.61
2015-16,Orlando Magic,Eastern,35,47,,-1.68
2014-15,Orlando Magic,Eastern,25,57,,-5.87
2013-14,Orlando Magic,Eastern,23,59,,-5.88
2012-13,Orlando Magic,Eastern,20,62,,-7.12
2011-12,Orlando Magic,Eastern,37,29,Lost E. Conf. 1st Rnd.,0.46
2010-11,Orlando Magic,Eastern,52,30,Lost E. Conf. 1st Rnd.,4.92
2009-10,Orlando Magic,Eastern,59,23,Lost E. Conf. Finals,7.12
2008-09,Orlando Magic,Eastern,59,23,Lost Finals,6.48
2007-08,Orlando Magic,Eastern,52,30,Lost E. Conf. Semis,4.79
2006-07,Orlando Magic,Eastern,40,42,Lost E. Conf. 1st Rnd.,0.35
2005-06,Orlando Magic,Eastern,36,46,,-1.26
2004-05,Orlando Magic,Eastern,36,46,,-2.52
2003-04,Orlando Magic,Eastern,21,61,,-7.25
2002-03,Orlando Magic,Eastern,42,40,Lost E. Conf. 1st Rnd.,-0.39
2001-02,Orlando Magic,Eastern,44,38,Lost E. Conf. 1st Rnd.,1.25
2000-01,Orlando Magic,Eastern,43,39,Lost E. Conf. 1st Rnd.,0.39
1999-00,Orlando Magic,Eastern,41,41,,0.43
1998-99,Orlando Magic,Eastern,33,17,Lost E. Conf. 1st Rnd.,3.11
1997-98,Orlando Magic,Eastern,41,41,,-0.53
1996-97,Orlando Magic,Eastern,45,37,Lost E. Conf. 1st Rnd.,-0.07
1995-96,Orlando Magic,Eastern,60,22,Lost E. Conf. Finals,5.4
1994-95,Orlando Magic,Eastern,57,25,Lost Finals,6.44
1993-94,Orlando Magic,Eastern,50,32,Lost E. Conf. 1st Rnd.,3.68
1992-93,Orlando Magic,Eastern,41,41,,1.35
1991-92,Orlando Magic,Eastern,21,61,,-6.52
1990-91,Orlando Magic,Eastern,31,51,,-3.79
1989-90,Orlando Magic,Eastern,18,64,,-8.73
2021-22,Washington Wizards,Eastern,35,47,,-3.23
2020-21,Washington Wizards,Eastern,34,38,Lost E. Conf. 1st Rnd.,-1.85
2019-20,Washington Wizards,Eastern,25,47,,-5.24
2018-19,Washington Wizards,Eastern,32,50,,-3.3
2017-18,Washington Wizards,Eastern,43,39,Lost E. Conf. 1st Rnd.,0.53
2016-17,Washington Wizards,Eastern,49,33,Lost E. Conf. Semis,1.36
2015-16,Washington Wizards,Eastern,41,41,,-0.5
2014-15,Washington Wizards,Eastern,46,36,Lost E. Conf. Semis,0.17
2013-14,Washington Wizards,Eastern,44,38,Lost E. Conf. Semis,0.48
2012-13,Washington Wizards,Eastern,29,53,,-2.78
2011-12,Washington Wizards,Eastern,20,46,,-5.14
2010-11,Washington Wizards,Eastern,23,59,,-7.3
2009-10,Washington Wizards,Eastern,26,56,,-4.72
2008-09,Washington Wizards,Eastern,19,63,,-6.98
2007-08,Washington Wizards,Eastern,43,39,Lost E. Conf. 1st Rnd.,-0.61
2006-07,Washington Wizards,Eastern,41,41,Lost E. Conf. 1st Rnd.,-0.8
2005-06,Washington Wizards,Eastern,42,40,Lost E. Conf. 1st Rnd.,1.57
2004-05,Washington Wizards,Eastern,45,37,Lost E. Conf. Semis,-0.71
2003-04,Washington Wizards,Eastern,25,57,,-6.12
2002-03,Washington Wizards,Eastern,37,45,,-1.47
2001-02,Washington Wizards,Eastern,37,45,,-1.58
2000-01,Washington Wizards,Eastern,19,63,,-6.75
1999-00,Washington Wizards,Eastern,29,53,,-3.47
1998-99,Washington Wizards,Eastern,18,32,,-1.75
1997-98,Washington Wizards,Eastern,42,40,,1.11
1996-97,Washington Bullets,Eastern,44,38,Lost E. Conf. 1st Rnd.,1.77
1995-96,Washington Bullets,Eastern,39,43,,0.99
1994-95,Washington Bullets,Eastern,21,61,,-5.56
1993-94,Washington Bullets,Eastern,24,58,,-7.13
1992-93,Washington Bullets,Eastern,22,60,,-6.49
1991-92,Washington Bullets,Eastern,25,57,,-4.35
1990-91,Washington Bullets,Eastern,30,52,,-4.84
1989-90,Washington Bullets,Eastern,31,51,,-2.43
1988-89,Washington Bullets,Eastern,40,42,,-1.77
1987-88,Washington Bullets,Eastern,38,44,Lost E. Conf. 1st Rnd.,-0.16
1986-87,Washington Bullets,Eastern,42,40,Lost E. Conf. 1st Rnd.,-1.02
1985-86,Washington Bullets,Eastern,39,43,Lost E. Conf. 1st Rnd.,-1.28
1984-85,Washington Bullets,Eastern,40,42,Lost E. Conf. 1st Rnd.,0.15
1983-84,Washington Bullets,Eastern,35,47,Lost E. Conf. 1st Rnd.,-2.36
1982-83,Washington Bullets,Eastern,42,40,,0.2
1981-82,Washington Bullets,Eastern,43,39,Lost E. Conf. Semis,1.06
1980-81,Washington Bullets,Eastern,39,43,,0.42
1979-80,Washington Bullets,Eastern,39,43,Lost E. Conf. 1st Rnd.,-2.27
1978-79,Washington Bullets,Eastern,54,28,Lost Finals,4.75
1977-78,Washington Bullets,Eastern,44,38,Won Finals,0.82
1976-77,Washington Bullets,Eastern,48,34,Lost E. Conf. Semis,0.9
1975-76,Washington Bullets,Eastern,48,34,Lost E. Conf. Semis,2.2
1974-75,Washington Bullets,Eastern,60,22,Lost Finals,6.53
1973-74,Capital Bullets,Eastern,47,35,Lost E. Conf. Semis,1.19
1972-73,Baltimore Bullets,Eastern,52,30,Lost E. Conf. Semis,2.85
1971-72,Baltimore Bullets,Eastern,38,44,Lost E. Conf. Semis,-1.26
1970-71,Baltimore Bullets,Eastern,42,40,Lost Finals,0.91
1969-70,Baltimore Bullets,Eastern,50,32,Lost E. Div. Semis,1.94
1968-69,Baltimore Bullets,Eastern,57,25,Lost E. Div. Semis,4.05
1967-68,Baltimore Bullets,Western,36,46,,-0.23
1966-67,Baltimore Bullets,Western,20,61,,-5.87
1965-66,Baltimore Bullets,Western,38,42,Lost W. Div. Semis,-1.06
1964-65,Baltimore Bullets,Western,37,43,Lost W. Div. Finals,-1.97
1963-64,Baltimore Bullets,Western,31,49,,-1.59
1962-63,Chicago Zephyrs,Western,25,55,,-3.63
1961-62,Chicago Packers,Western,18,62,,-7.54
2021-22,Golden State Warriors,Western,53,29,Won Finals,5.52
2020-21,Golden State Warriors,Western,39,33,,1.1
2019-20,Golden State Warriors,Western,15,50,,-8.12
2018-19,Golden State Warriors,Western,57,25,Lost Finals,6.42
2017-18,Golden State Warriors,Western,58,24,Won Finals,5.79
2016-17,Golden State Warriors,Western,67,15,Won Finals,11.35
2015-16,Golden State Warriors,Western,73,9,Lost Finals,10.38
2014-15,Golden State Warriors,Western,67,15,Won Finals,10.01
2013-14,Golden State Warriors,Western,51,31,Lost W. Conf. 1st Rnd.,5.15
2012-13,Golden State Warriors,Western,47,35,Lost W. Conf. Semis,1.32
2011-12,Golden State Warriors,Western,23,43,,-2.79
2010-11,Golden State Warriors,Western,36,46,,-2
2009-10,Golden State Warriors,Western,26,56,,-3.28
2008-09,Golden State Warriors,Western,29,53,,-3.8
2007-08,Golden State Warriors,Western,48,34,,2.38
2006-07,Golden State Warriors,Western,42,40,,0
2005-06,Golden State Warriors,Western,34,48,Lost W. Conf. Semis,-1.11
2004-05,Golden State Warriors,Western,34,48,,-1.74
2003-04,Golden State Warriors,Western,37,45,,-0.07
2002-03,Golden State Warriors,Western,38,44,,-0.6
2001-02,Golden State Warriors,Western,21,61,,-4.8
2000-01,Golden State Warriors,Western,17,65,,-8.11
1999-00,Golden State Warriors,Western,19,63,,-7.63
1998-99,Golden State Warriors,Western,21,29,,-2.63
1997-98,Golden State Warriors,Western,19,63,,-9.2
1996-97,Golden State Warriors,Western,30,52,,-4.9
1995-96,Golden State Warriors,Western,36,46,,-1.42
1994-95,Golden State Warriors,Western,26,56,,-4.9
1993-94,Golden State Warriors,Western,50,32,Lost W. Conf. 1st Rnd.,1.76
1992-93,Golden State Warriors,Western,34,48,,-0.94
1991-92,Golden State Warriors,Western,55,27,Lost W. Conf. 1st Rnd.,3.77
1990-91,Golden State Warriors,Western,44,38,Lost W. Conf. Semis,1.72
1989-90,Golden State Warriors,Western,37,45,,-2.55
1988-89,Golden State Warriors,Western,43,39,Lost W. Conf. Semis,-0.59
1987-88,Golden State Warriors,Western,20,62,,-8.38
1986-87,Golden State Warriors,Western,42,40,Lost W. Conf. Semis,-2.54
1985-86,Golden State Warriors,Western,30,52,,-3.59
1984-85,Golden State Warriors,Western,22,60,,-7.21
1983-84,Golden State Warriors,Western,37,45,,-3.35
1982-83,Golden State Warriors,Western,30,52,,-3.48
1981-82,Golden State Warriors,Western,45,37,,0.8
1980-81,Golden State Warriors,Western,39,43,,-1.41
1979-80,Golden State Warriors,Western,24,58,,-4.2
1978-79,Golden State Warriors,Western,38,44,,0.46
1977-78,Golden State Warriors,Western,43,39,,0.41
1976-77,Golden State Warriors,Western,46,36,Lost W. Conf. Semis,3.1
1975-76,Golden State Warriors,Western,59,23,Lost W. Conf. Finals,6.23
1974-75,Golden State Warriors,Western,48,34,Won Finals,2.86
1973-74,Golden State Warriors,Western,44,38,,2.42
1972-73,Golden State Warriors,Western,47,35,Lost W. Conf. Finals,3.12
1971-72,Golden State Warriors,Western,51,31,Lost W. Conf. Semis,0.92
1970-71,San Francisco Warriors,Western,41,41,Lost W. Conf. Semis,-0.83
1969-70,San Francisco Warriors,Western,30,52,,-4.15
1968-69,San Francisco Warriors,Western,41,41,Lost W. Div. Semis,-1.53
1967-68,San Francisco Warriors,Western,43,39,Lost W. Div. Finals,-0.66
1966-67,San Francisco Warriors,Western,44,37,Lost Finals,2.58
1965-66,San Francisco Warriors,Western,35,45,,-2.36
1964-65,San Francisco Warriors,Western,17,63,,-5.49
1963-64,San Francisco Warriors,Western,48,32,Lost Finals,4.41
1962-63,San Francisco Warriors,Western,31,49,,-1.86
1961-62,Philadelphia Warriors,Eastern,49,31,Lost E. Div. Finals,2.63
1960-61,Philadelphia Warriors,Eastern,46,33,Lost E. Div. Semis,0.89
1959-60,Philadelphia Warriors,Eastern,49,26,Lost E. Div. Finals,2.77
1958-59,Philadelphia Warriors,Eastern,32,40,,-2.29
1957-58,Philadelphia Warriors,Eastern,37,35,Lost E. Div. Finals,0.21
1956-57,Philadelphia Warriors,Eastern,37,35,Lost E. Div. Semis,1.54
1955-56,Philadelphia Warriors,Eastern,45,27,Won Finals,3.82
1954-55,Philadelphia Warriors,Eastern,33,39,,-0.19
1953-54,Philadelphia Warriors,Eastern,29,43,,-1.89
1952-53,Philadelphia Warriors,Eastern,12,57,,-7.75
1951-52,Philadelphia Warriors,Eastern,33,33,Lost E. Div. Semis,-1.08
1950-51,Philadelphia Warriors,Eastern,40,26,Lost E. Div. Semis,3.4
1949-50,Philadelphia Warriors,Eastern,26,42,Lost E. Div. Semis,-2.27
1948-49,Philadelphia Warriors,Eastern,28,32,Lost E. Div. Semis,0.21
1947-48,Philadelphia Warriors,Eastern,27,21,Lost Finals,0.69
1946-47,Philadelphia Warriors,Eastern,35,25,Won Finals,3.16
2021-22,Los Angeles Clippers,Western,42,40,,0.09
2020-21,Los Angeles Clippers,Western,47,25,Lost W. Conf. Finals,6.02
2019-20,Los Angeles Clippers,Western,49,23,Lost W. Conf. Semis,6.66
2018-19,Los Angeles Clippers,Western,48,34,Lost W. Conf. 1st Rnd.,1.09
2017-18,Los Angeles Clippers,Western,42,40,,0.15
2016-17,Los Angeles Clippers,Western,51,31,Lost W. Conf. 1st Rnd.,4.42
2015-16,Los Angeles Clippers,Western,53,29,Lost W. Conf. 1st Rnd.,4.13
2014-15,Los Angeles Clippers,Western,56,26,Lost W. Conf. Semis,6.8
2013-14,Los Angeles Clippers,Western,57,25,Lost W. Conf. Semis,7.27
2012-13,Los Angeles Clippers,Western,56,26,Lost W. Conf. 1st Rnd.,6.43
2011-12,Los Angeles Clippers,Western,40,26,Lost W. Conf. Semis,2.82
2010-11,Los Angeles Clippers,Western,32,50,,-2.71
2009-10,Los Angeles Clippers,Western,29,53,,-6.01
2008-09,Los Angeles Clippers,Western,19,63,,-8.47
2007-08,Los Angeles Clippers,Western,23,59,,-6.56
2006-07,Los Angeles Clippers,Western,40,42,,-0.07
2005-06,Los Angeles Clippers,Western,47,35,Lost W. Conf. Semis,1.75
2004-05,Los Angeles Clippers,Western,37,45,,-0.47
2003-04,Los Angeles Clippers,Western,28,54,,-3.74
2002-03,Los Angeles Clippers,Western,27,55,,-3.45
2001-02,Los Angeles Clippers,Western,39,43,,-0.09
2000-01,Los Angeles Clippers,Western,31,51,,-2.23
1999-00,Los Angeles Clippers,Western,15,67,,-10.73
1998-99,Los Angeles Clippers,Western,9,41,,-8.94
1997-98,Los Angeles Clippers,Western,17,65,,-7.53
1996-97,Los Angeles Clippers,Western,36,46,Lost W. Conf. 1st Rnd.,-2.66
1995-96,Los Angeles Clippers,Western,29,53,,-3.46
1994-95,Los Angeles Clippers,Western,17,65,,-8.43
1993-94,Los Angeles Clippers,Western,27,55,,-5.28
1992-93,Los Angeles Clippers,Western,41,41,Lost W. Conf. 1st Rnd.,0.33
1991-92,Los Angeles Clippers,Western,45,37,Lost W. Conf. 1st Rnd.,1.1
1990-91,Los Angeles Clippers,Western,31,51,,-3.16
1989-90,Los Angeles Clippers,Western,30,52,,-2.8
1988-89,Los Angeles Clippers,Western,21,61,,-9.5
1987-88,Los Angeles Clippers,Western,17,65,,-10.24
1986-87,Los Angeles Clippers,Western,12,70,,-11
1985-86,Los Angeles Clippers,Western,32,50,,-6.83
1984-85,Los Angeles Clippers,Western,31,51,,-4.55
1983-84,San Diego Clippers,Western,30,52,,-3.21
1982-83,San Diego Clippers,Western,25,57,,-4.61
1981-82,San Diego Clippers,Western,17,65,,-7.05
1980-81,San Diego Clippers,Western,36,46,,-1.78
1979-80,San Diego Clippers,Western,35,47,,-3.97
1978-79,San Diego Clippers,Western,43,39,,-1.76
1977-78,Buffalo Braves,Eastern,27,55,,-3.55
1976-77,Buffalo Braves,Eastern,30,52,,-4.28
1975-76,Buffalo Braves,Eastern,46,36,Lost E. Conf. Semis,0.85
1974-75,Buffalo Braves,Eastern,49,33,Lost E. Conf. Semis,2.16
1973-74,Buffalo Braves,Eastern,42,40,Lost E. Conf. Semis,-0.19
1972-73,Buffalo Braves,Eastern,21,61,,-8.85
1971-72,Buffalo Braves,Eastern,22,60,,-9.44
1970-71,Buffalo Braves,Eastern,22,60,,-8.02
2021-22,Los Angeles Lakers,Western,33,49,,-3.08
2020-21,Los Angeles Lakers,Western,42,30,Lost W. Conf. 1st Rnd.,2.77
2019-20,Los Angeles Lakers,Western,52,19,Won Finals,6.28
2018-19,Los Angeles Lakers,Western,37,45,,-1.33
2017-18,Los Angeles Lakers,Western,35,47,,-1.44
2016-17,Los Angeles Lakers,Western,26,56,,-6.29
2015-16,Los Angeles Lakers,Western,17,65,,-8.92
2014-15,Los Angeles Lakers,Western,21,61,,-6.17
2013-14,Los Angeles Lakers,Western,27,55,,-5.33
2012-13,Los Angeles Lakers,Western,45,37,Lost W. Conf. 1st Rnd.,1.48
2011-12,Los Angeles Lakers,Western,41,25,Lost W. Conf. Semis,1.96
2010-11,Los Angeles Lakers,Western,57,25,Lost W. Conf. Semis,6.01
2009-10,Los Angeles Lakers,Western,57,25,Won Finals,4.78
2008-09,Los Angeles Lakers,Western,65,17,Won Finals,7.11
2007-08,Los Angeles Lakers,Western,57,25,Lost Finals,7.34
2006-07,Los Angeles Lakers,Western,42,40,Lost W. Conf. 1st Rnd.,0.24
2005-06,Los Angeles Lakers,Western,45,37,Lost W. Conf. 1st Rnd.,2.53
2004-05,Los Angeles Lakers,Western,34,48,,-2.32
2003-04,Los Angeles Lakers,Western,56,26,Lost Finals,4.35
2002-03,Los Angeles Lakers,Western,50,32,Lost W. Conf. Semis,2.71
2001-02,Los Angeles Lakers,Western,58,24,Won Finals,7.15
2000-01,Los Angeles Lakers,Western,56,26,Won Finals,3.74
1999-00,Los Angeles Lakers,Western,67,15,Won Finals,8.41
1998-99,Los Angeles Lakers,Western,31,19,Lost W. Conf. Semis,2.68
1997-98,Los Angeles Lakers,Western,61,21,Lost W. Conf. Finals,6.88
1996-97,Los Angeles Lakers,Western,56,26,Lost W. Conf. Semis,3.66
1995-96,Los Angeles Lakers,Western,53,29,Lost W. Conf. 1st Rnd.,4.21
1994-95,Los Angeles Lakers,Western,48,34,Lost W. Conf. Semis,-0.01
1993-94,Los Angeles Lakers,Western,33,49,,-3.93
1992-93,Los Angeles Lakers,Western,39,43,Lost W. Conf. 1st Rnd.,-1.2
1991-92,Los Angeles Lakers,Western,43,39,Lost W. Conf. 1st Rnd.,-0.95
1990-91,Los Angeles Lakers,Western,58,24,Lost Finals,6.73
1989-90,Los Angeles Lakers,Western,63,19,Lost W. Conf. Semis,6.74
1988-89,Los Angeles Lakers,Western,57,25,Lost Finals,6.38
1987-88,Los Angeles Lakers,Western,62,20,Won Finals,4.81
1986-87,Los Angeles Lakers,Western,65,17,Won Finals,8.32
1985-86,Los Angeles Lakers,Western,62,20,Lost W. Conf. Finals,6.84
1984-85,Los Angeles Lakers,Western,62,20,Won Finals,6.48
1983-84,Los Angeles Lakers,Western,54,28,Lost Finals,3.32
1982-83,Los Angeles Lakers,Western,58,24,Lost Finals,5.06
1981-82,Los Angeles Lakers,Western,57,25,Won Finals,4.37
1980-81,Los Angeles Lakers,Western,54,28,Lost W. Conf. 1st Rnd.,3.27
1979-80,Los Angeles Lakers,Western,60,22,Won Finals,5.4
1978-79,Los Angeles Lakers,Western,47,35,Lost W. Conf. Semis,2.95
1977-78,Los Angeles Lakers,Western,45,37,Lost W. Conf. 1st Rnd.,2.59
1976-77,Los Angeles Lakers,Western,53,29,Lost W. Conf. Finals,2.64
1975-76,Los Angeles Lakers,Western,40,42,,0.18
1974-75,Los Angeles Lakers,Western,30,52,,-3.94
1973-74,Los Angeles Lakers,Western,47,35,Lost W. Conf. Semis,0.85
1972-73,Los Angeles Lakers,Western,60,22,Lost Finals,8.16
1971-72,Los Angeles Lakers,Western,69,13,Won Finals,11.65
1970-71,Los Angeles Lakers,Western,48,34,Lost W. Conf. Finals,3.27
1969-70,Los Angeles Lakers,Western,46,36,Lost Finals,1.76
1968-69,Los Angeles Lakers,Western,55,27,Lost Finals,3.84
1967-68,Los Angeles Lakers,Western,52,30,Lost Finals,4.99
1966-67,Los Angeles Lakers,Western,36,45,Lost W. Div. Semis,0.31
1965-66,Los Angeles Lakers,Western,45,35,Lost Finals,2.76
1964-65,Los Angeles Lakers,Western,49,31,Lost Finals,1.7
1963-64,Los Angeles Lakers,Western,42,38,Lost W. Div. Semis,0.87
1962-63,Los Angeles Lakers,Western,53,27,Lost Finals,2.67
1961-62,Los Angeles Lakers,Western,54,26,Lost Finals,1.8
1960-61,Los Angeles Lakers,Western,36,43,Lost W. Div. Finals,-0.11
1959-60,Minneapolis Lakers,Western,25,50,Lost W. Div. Finals,-4.14
1958-59,Minneapolis Lakers,Western,33,39,Lost Finals,-1.42
1957-58,Minneapolis Lakers,Western,19,53,,-5.78
1956-57,Minneapolis Lakers,Western,34,38,Lost W. Div. Finals,-0.89
1955-56,Minneapolis Lakers,Western,33,39,Lost W. Div. Semis,-0.92
1954-55,Minneapolis Lakers,Western,40,32,Lost W. Div. Finals,0.96
1953-54,Minneapolis Lakers,Western,46,26,Won Finals,2.71
1952-53,Minneapolis Lakers,Western,48,22,Won Finals,5.54
1951-52,Minneapolis Lakers,Western,40,26,Won Finals,5.28
1950-51,Minneapolis Lakers,Western,44,24,Lost W. Div. Finals,4.79
1949-50,Minneapolis Lakers,Central,51,17,Won Finals,8.25
1948-49,Minneapolis Lakers,Western,44,16,Won Finals,6.8
2021-22,Phoenix Suns,Western,64,18,Lost W. Conf. Semis,6.94
2020-21,Phoenix Suns,Western,51,21,Lost Finals,5.67
2019-20,Phoenix Suns,Western,34,39,,0.56
2018-19,Phoenix Suns,Western,19,63,,-8.61
2017-18,Phoenix Suns,Western,21,61,,-8.8
2016-17,Phoenix Suns,Western,24,58,,-5.14
2015-16,Phoenix Suns,Western,23,59,,-6.32
2014-15,Phoenix Suns,Western,39,43,,-0.38
2013-14,Phoenix Suns,Western,48,34,,3.02
2012-13,Phoenix Suns,Western,25,57,,-5.75
2011-12,Phoenix Suns,Western,33,33,,0.29
2010-11,Phoenix Suns,Western,40,42,,-0.46
2009-10,Phoenix Suns,Western,54,28,Lost W. Conf. Finals,4.67
2008-09,Phoenix Suns,Western,46,36,,1.62
2007-08,Phoenix Suns,Western,55,27,Lost W. Conf. 1st Rnd.,5.14
2006-07,Phoenix Suns,Western,61,21,Lost W. Conf. Semis,7.28
2005-06,Phoenix Suns,Western,54,28,Lost W. Conf. Finals,5.48
2004-05,Phoenix Suns,Western,62,20,Lost W. Conf. Finals,7.08
2003-04,Phoenix Suns,Western,29,53,,-2.94
2002-03,Phoenix Suns,Western,44,38,Lost W. Conf. 1st Rnd.,1.57
2001-02,Phoenix Suns,Western,36,46,,-0.3
2000-01,Phoenix Suns,Western,51,31,Lost W. Conf. 1st Rnd.,2.63
1999-00,Phoenix Suns,Western,53,29,Lost W. Conf. Semis,5.24
1998-99,Phoenix Suns,Western,27,23,Lost W. Conf. 1st Rnd.,2.15
1997-98,Phoenix Suns,Western,56,26,Lost W. Conf. 1st Rnd.,4.44
1996-97,Phoenix Suns,Western,40,42,Lost W. Conf. 1st Rnd.,0.21
1995-96,Phoenix Suns,Western,41,41,Lost W. Conf. 1st Rnd.,0.28
1994-95,Phoenix Suns,Western,59,23,Lost W. Conf. Semis,3.86
1993-94,Phoenix Suns,Western,56,26,Lost W. Conf. Semis,4.68
1992-93,Phoenix Suns,Western,62,20,Lost Finals,6.27
1991-92,Phoenix Suns,Western,53,29,Lost W. Conf. Semis,5.68
1990-91,Phoenix Suns,Western,55,27,Lost W. Conf. 1st Rnd.,6.49
1989-90,Phoenix Suns,Western,54,28,Lost W. Conf. Finals,7.09
1988-89,Phoenix Suns,Western,55,27,Lost W. Conf. Finals,6.84
1987-88,Phoenix Suns,Western,28,54,,-4.8
1986-87,Phoenix Suns,Western,36,46,,-2.63
1985-86,Phoenix Suns,Western,32,50,,-3.16
1984-85,Phoenix Suns,Western,36,46,Lost W. Conf. 1st Rnd.,-2.34
1983-84,Phoenix Suns,Western,41,41,Lost W. Conf. Finals,0.65
1982-83,Phoenix Suns,Western,53,29,Lost W. Conf. 1st Rnd.,4.61
1981-82,Phoenix Suns,Western,46,36,Lost W. Conf. Semis,3.05
1980-81,Phoenix Suns,Western,57,25,Lost W. Conf. Semis,4.83
1979-80,Phoenix Suns,Western,55,27,Lost W. Conf. Semis,3.25
1978-79,Phoenix Suns,Western,50,32,Lost W. Conf. Finals,3.55
1977-78,Phoenix Suns,Western,49,33,Lost W. Conf. 1st Rnd.,3.5
1976-77,Phoenix Suns,Western,34,48,,0.64
1975-76,Phoenix Suns,Western,42,40,Lost Finals,0.59
1974-75,Phoenix Suns,Western,32,50,,-2.36
1973-74,Phoenix Suns,Western,30,52,,-3.2
1972-73,Phoenix Suns,Western,38,44,,-0.96
1971-72,Phoenix Suns,Western,49,33,,5.57
1970-71,Phoenix Suns,Western,48,34,,2.33
1969-70,Phoenix Suns,Western,39,43,Lost W. Div. Semis,-1.66
1968-69,Phoenix Suns,Western,16,66,,-8.26
2021-22,Sacramento Kings,Western,30,52,,-5.26
2020-21,Sacramento Kings,Western,31,41,,-3.45
2019-20,Sacramento Kings,Western,31,41,,-1.59
2018-19,Sacramento Kings,Western,39,43,,-0.81
2017-18,Sacramento Kings,Western,27,55,,-6.6
2016-17,Sacramento Kings,Western,32,50,,-3.29
2015-16,Sacramento Kings,Western,33,49,,-2.32
2014-15,Sacramento Kings,Western,29,53,,-3.07
2013-14,Sacramento Kings,Western,28,54,,-2.08
2012-13,Sacramento Kings,Western,28,54,,-4.26
2011-12,Sacramento Kings,Western,22,44,,-4.95
2010-11,Sacramento Kings,Western,24,58,,-4.8
2009-10,Sacramento Kings,Western,25,57,,-4.06
2008-09,Sacramento Kings,Western,17,65,,-8.6
2007-08,Sacramento Kings,Western,38,44,,-1.86
2006-07,Sacramento Kings,Western,33,49,,-1.35
2005-06,Sacramento Kings,Western,44,38,Lost W. Conf. 1st Rnd.,1.61
2004-05,Sacramento Kings,Western,50,32,Lost W. Conf. 1st Rnd.,2.56
2003-04,Sacramento Kings,Western,55,27,Lost W. Conf. Semis,5.41
2002-03,Sacramento Kings,Western,59,23,Lost W. Conf. Semis,6.68
2001-02,Sacramento Kings,Western,61,21,Lost W. Conf. Finals,7.61
2000-01,Sacramento Kings,Western,55,27,Lost W. Conf. Semis,6.07
1999-00,Sacramento Kings,Western,44,38,Lost W. Conf. 1st Rnd.,3.04
1998-99,Sacramento Kings,Western,27,23,Lost W. Conf. 1st Rnd.,-0.89
1997-98,Sacramento Kings,Western,27,55,,-5.83
1996-97,Sacramento Kings,Western,34,48,,-3.64
1995-96,Sacramento Kings,Western,39,43,Lost W. Conf. 1st Rnd.,-2.62
1994-95,Sacramento Kings,Western,39,43,,-0.74
1993-94,Sacramento Kings,Western,28,54,,-5.32
1992-93,Sacramento Kings,Western,25,57,,-3
1991-92,Sacramento Kings,Western,29,53,,-5.63
1990-91,Sacramento Kings,Western,25,57,,-6.27
1989-90,Sacramento Kings,Western,23,59,,-4.41
1988-89,Sacramento Kings,Western,27,55,,-5.35
1987-88,Sacramento Kings,Western,24,58,,-5.84
1986-87,Sacramento Kings,Western,29,53,,-3.34
1985-86,Sacramento Kings,Western,37,45,Lost W. Conf. 1st Rnd.,-3.19
1984-85,Kansas City Kings,Western,31,51,,-2.71
1983-84,Kansas City Kings,Western,38,44,Lost W. Conf. 1st Rnd.,-1.62
1982-83,Kansas City Kings,Western,45,37,,1.04
1981-82,Kansas City Kings,Western,30,52,,-3.25
1980-81,Kansas City Kings,Western,40,42,Lost W. Conf. Finals,-0.49
1979-80,Kansas City Kings,Western,47,35,Lost W. Conf. 1st Rnd.,2.82
1978-79,Kansas City Kings,Western,48,34,Lost W. Conf. Semis,2.73
1977-78,Kansas City Kings,Western,31,51,,-1.76
1976-77,Kansas City Kings,Western,40,42,,0.93
1975-76,Kansas City Kings,Western,31,51,,-2.83
1974-75,Kansas City-Omaha Kings,Western,44,38,Lost W. Conf. Semis,-0.16
1973-74,Kansas City-Omaha Kings,Western,33,49,,-3.24
1972-73,Kansas City-Omaha Kings,Western,36,46,,-2.36
1971-72,Cincinnati Royals,Eastern,30,52,,-4.13
1970-71,Cincinnati Royals,Eastern,33,49,,-2.96
1969-70,Cincinnati Royals,Eastern,36,46,,-2.55
1968-69,Cincinnati Royals,Eastern,41,41,,-0.83
1967-68,Cincinnati Royals,Eastern,39,43,,-0.64
1966-67,Cincinnati Royals,Eastern,39,42,Lost E. Div. Semis,-0.23
1965-66,Cincinnati Royals,Eastern,45,35,Lost E. Div. Semis,1.03
1964-65,Cincinnati Royals,Eastern,48,32,Lost E. Div. Semis,2.04
1963-64,Cincinnati Royals,Eastern,55,25,Lost E. Div. Finals,4.43
1962-63,Cincinnati Royals,Eastern,42,38,Lost E. Div. Finals,1.24
1961-62,Cincinnati Royals,Western,43,37,Lost W. Div. Semis,1.28
1960-61,Cincinnati Royals,Western,33,46,,-3.04
1959-60,Cincinnati Royals,Western,19,56,,-5.92
1958-59,Cincinnati Royals,Western,19,53,,-7.89
1957-58,Cincinnati Royals,Western,33,39,Lost W. Div. Semis,-1.47
1956-57,Rochester Royals,Western,31,41,,-2.08
1955-56,Rochester Royals,Western,31,41,,-2.61
1954-55,Rochester Royals,Western,29,43,Lost W. Div. Semis,-1.43
1953-54,Rochester Royals,Western,44,28,Lost W. Div. Finals,2.24
1952-53,Rochester Royals,Western,44,26,Lost W. Div. Semis,2.62
1951-52,Rochester Royals,Western,41,25,Lost W. Div. Finals,2.92
1950-51,Rochester Royals,Western,41,27,Won Finals,2.54
1949-50,Rochester Royals,Central,51,17,Lost Central Div. Semis,7.72
1948-49,Rochester Royals,Western,45,15,Lost W. Div. Finals,6.12
2021-22,Denver Nuggets,Western,48,34,Lost W. Conf. 1st Rnd.,2.16
2020-21,Denver Nuggets,Western,47,25,Lost W. Conf. Semis,4.82
2019-20,Denver Nuggets,Western,46,27,Lost W. Conf. Finals,2.35
2018-19,Denver Nuggets,Western,54,28,Lost W. Conf. Semis,4.19
2017-18,Denver Nuggets,Western,46,36,,1.57
2016-17,Denver Nuggets,Western,40,42,,0.7
2015-16,Denver Nuggets,Western,33,49,,-2.81
2014-15,Denver Nuggets,Western,30,52,,-3.07
2013-14,Denver Nuggets,Western,36,46,,-1.4
2012-13,Denver Nuggets,Western,57,25,Lost W. Conf. 1st Rnd.,5.37
2011-12,Denver Nuggets,Western,38,28,Lost W. Conf. 1st Rnd.,3.16
2010-11,Denver Nuggets,Western,50,32,Lost W. Conf. 1st Rnd.,4.81
2009-10,Denver Nuggets,Western,53,29,Lost W. Conf. 1st Rnd.,4.15
2008-09,Denver Nuggets,Western,54,28,Lost W. Conf. Finals,3.13
2007-08,Denver Nuggets,Western,50,32,Lost W. Conf. 1st Rnd.,3.74
2006-07,Denver Nuggets,Western,45,37,Lost W. Conf. 1st Rnd.,1.69
2005-06,Denver Nuggets,Western,44,38,Lost W. Conf. 1st Rnd.,0.36
2004-05,Denver Nuggets,Western,49,33,Lost W. Conf. 1st Rnd.,2.23
2003-04,Denver Nuggets,Western,43,39,Lost W. Conf. 1st Rnd.,1.65
2002-03,Denver Nuggets,Western,17,65,,-7.41
2001-02,Denver Nuggets,Western,27,55,,-5.19
2000-01,Denver Nuggets,Western,40,42,,-1.83
1999-00,Denver Nuggets,Western,35,47,,-1.76
1998-99,Denver Nuggets,Western,14,36,,-6.67
1997-98,Denver Nuggets,Western,11,71,,-11.74
1996-97,Denver Nuggets,Western,21,61,,-6.4
1995-96,Denver Nuggets,Western,35,47,,-2.62
1994-95,Denver Nuggets,Western,41,41,Lost W. Conf. 1st Rnd.,0.96
1993-94,Denver Nuggets,Western,42,40,Lost W. Conf. Semis,1.54
1992-93,Denver Nuggets,Western,36,46,,-2.14
1991-92,Denver Nuggets,Western,24,58,,-7.59
1990-91,Denver Nuggets,Western,20,62,,-10.31
1989-90,Denver Nuggets,Western,43,39,Lost W. Conf. 1st Rnd.,1.56
1988-89,Denver Nuggets,Western,44,38,Lost W. Conf. 1st Rnd.,0.91
1987-88,Denver Nuggets,Western,54,28,Lost W. Conf. Semis,3.32
1986-87,Denver Nuggets,Western,37,45,Lost W. Conf. 1st Rnd.,-1.14
1985-86,Denver Nuggets,Western,47,35,Lost W. Conf. Semis,0.89
1984-85,Denver Nuggets,Western,52,30,Lost W. Conf. Finals,2.05
1983-84,Denver Nuggets,Western,38,44,Lost W. Conf. 1st Rnd.,-1.27
1982-83,Denver Nuggets,Western,45,37,Lost W. Conf. Semis,0.27
1981-82,Denver Nuggets,Western,46,36,Lost W. Conf. 1st Rnd.,0.13
1980-81,Denver Nuggets,Western,37,45,,-0.95
1979-80,Denver Nuggets,Western,30,52,,-4.22
1978-79,Denver Nuggets,Western,47,35,Lost W. Conf. 1st Rnd.,1.24
1977-78,Denver Nuggets,Western,48,34,Lost W. Conf. Finals,0.8
1976-77,Denver Nuggets,Western,50,32,Lost W. Conf. Semis,4.95
1975-76,Denver Nuggets,Western,60,24,Lost Finals,5.45
1974-75,Denver Nuggets,Western,65,19,Lost W. Div. Finals,6.63
1973-74,Denver Rockets,Western,37,47,Lost W. Div. Tiebreaker,-0.49
1972-73,Denver Rockets,Western,47,37,Lost W. Div. Semis,2.8
1971-72,Denver Rockets,Western,34,50,Lost W. Div. Semis,-0.93
1970-71,Denver Rockets,Western,30,54,Lost W. Div. Tiebreaker,-3.15
1969-70,Denver Rockets,Western,51,33,Lost W. Div. Finals,4.32
1968-69,Denver Rockets,Western,44,34,Lost W. Div. Semis,1.41
1967-68,Denver Rockets,Western,45,33,Lost W. Div. Semis,3.53
2021-22,Minnesota Timberwolves,Western,46,36,Lost W. Conf. 1st Rnd.,2.53
2020-21,Minnesota Timberwolves,Western,23,49,,-5.25
2019-20,Minnesota Timberwolves,Western,19,45,,-4.02
2018-19,Minnesota Timberwolves,Western,36,46,,-1.02
2017-18,Minnesota Timberwolves,Western,47,35,Lost W. Conf. 1st Rnd.,2.35
2016-17,Minnesota Timberwolves,Western,31,51,,-0.64
2015-16,Minnesota Timberwolves,Western,29,53,,-3.38
2014-15,Minnesota Timberwolves,Western,16,66,,-8
2013-14,Minnesota Timberwolves,Western,40,42,,3.1
2012-13,Minnesota Timberwolves,Western,31,51,,-1.83
2011-12,Minnesota Timberwolves,Western,26,40,,-1.83
2010-11,Minnesota Timberwolves,Western,17,65,,-5.97
2009-10,Minnesota Timberwolves,Western,15,67,,-9.06
2008-09,Minnesota Timberwolves,Western,24,58,,-4.74
2007-08,Minnesota Timberwolves,Western,22,60,,-6.26
2006-07,Minnesota Timberwolves,Western,32,50,,-3.16
2005-06,Minnesota Timberwolves,Western,33,49,,-1.75
2004-05,Minnesota Timberwolves,Western,44,38,,1.73
2003-04,Minnesota Timberwolves,Western,58,24,Lost W. Conf. Finals,5.86
2002-03,Minnesota Timberwolves,Western,51,31,Lost W. Conf. 1st Rnd.,2.46
2001-02,Minnesota Timberwolves,Western,50,32,Lost W. Conf. 1st Rnd.,3.58
2000-01,Minnesota Timberwolves,Western,47,35,Lost W. Conf. 1st Rnd.,1.81
1999-00,Minnesota Timberwolves,Western,50,32,Lost W. Conf. 1st Rnd.,2.67
1998-99,Minnesota Timberwolves,Western,25,25,Lost W. Conf. 1st Rnd.,-0.17
1997-98,Minnesota Timberwolves,Western,45,37,Lost W. Conf. 1st Rnd.,0.17
1996-97,Minnesota Timberwolves,Western,40,42,Lost W. Conf. 1st Rnd.,-1.82
1995-96,Minnesota Timberwolves,Western,26,56,,-5.14
1994-95,Minnesota Timberwolves,Western,21,61,,-8.22
1993-94,Minnesota Timberwolves,Western,20,62,,-6.55
1992-93,Minnesota Timberwolves,Western,19,63,,-7.62
1991-92,Minnesota Timberwolves,Western,15,67,,-6.85
1990-91,Minnesota Timberwolves,Western,29,53,,-3.75
1989-90,Minnesota Timberwolves,Western,22,60,,-3.6
2021-22,Oklahoma City Thunder,Western,24,58,,-7.9
2020-21,Oklahoma City Thunder,Western,22,50,,-10.13
2019-20,Oklahoma City Thunder,Western,44,28,Lost W. Conf. 1st Rnd.,2.33
2018-19,Oklahoma City Thunder,Western,49,33,Lost W. Conf. 1st Rnd.,3.56
2017-18,Oklahoma City Thunder,Western,48,34,Lost W. Conf. 1st Rnd.,3.42
2016-17,Oklahoma City Thunder,Western,47,35,Lost W. Conf. 1st Rnd.,1.14
2015-16,Oklahoma City Thunder,Western,55,27,Lost W. Conf. Finals,7.09
2014-15,Oklahoma City Thunder,Western,45,37,,2.47
2013-14,Oklahoma City Thunder,Western,59,23,Lost W. Conf. Finals,6.66
2012-13,Oklahoma City Thunder,Western,60,22,Lost W. Conf. Semis,9.15
2011-12,Oklahoma City Thunder,Western,47,19,Lost Finals,6.44
2010-11,Oklahoma City Thunder,Western,55,27,Lost W. Conf. Finals,3.81
2009-10,Oklahoma City Thunder,Western,50,32,Lost W. Conf. 1st Rnd.,3.55
2008-09,Oklahoma City Thunder,Western,23,59,,-6.04
2007-08,Seattle SuperSonics,Western,20,62,,-8.04
2006-07,Seattle SuperSonics,Western,31,51,,-2.45
2005-06,Seattle SuperSonics,Western,35,47,,-2.88
2004-05,Seattle SuperSonics,Western,52,30,Lost W. Conf. Semis,2.59
2003-04,Seattle SuperSonics,Western,37,45,,0.02
2002-03,Seattle SuperSonics,Western,40,42,,0.37
2001-02,Seattle SuperSonics,Western,45,37,Lost W. Conf. 1st Rnd.,3.24
2000-01,Seattle SuperSonics,Western,44,38,,0.55
1999-00,Seattle SuperSonics,Western,45,37,Lost W. Conf. 1st Rnd.,1.17
1998-99,Seattle SuperSonics,Western,25,25,,-1.43
1997-98,Seattle SuperSonics,Western,61,21,Lost W. Conf. Semis,6.33
1996-97,Seattle SuperSonics,Western,57,25,Lost W. Conf. Semis,6.91
1995-96,Seattle SuperSonics,Western,64,18,Lost Finals,7.4
1994-95,Seattle SuperSonics,Western,57,25,Lost W. Conf. 1st Rnd.,7.91
1993-94,Seattle SuperSonics,Western,63,19,Lost W. Conf. 1st Rnd.,8.68
1992-93,Seattle SuperSonics,Western,55,27,Lost W. Conf. Finals,6.66
1991-92,Seattle SuperSonics,Western,47,35,Lost W. Conf. Semis,1.86
1990-91,Seattle SuperSonics,Western,41,41,Lost W. Conf. 1st Rnd.,1.31
1989-90,Seattle SuperSonics,Western,41,41,,1.4
1988-89,Seattle SuperSonics,Western,47,35,Lost W. Conf. Semis,2.44
1987-88,Seattle SuperSonics,Western,44,38,Lost W. Conf. 1st Rnd.,1.29
1986-87,Seattle SuperSonics,Western,39,43,Lost W. Conf. Finals,0.08
1985-86,Seattle SuperSonics,Western,31,51,,-0.47
1984-85,Seattle SuperSonics,Western,31,51,,-5.44
1983-84,Seattle SuperSonics,Western,42,40,Lost W. Conf. 1st Rnd.,-0.34
1982-83,Seattle SuperSonics,Western,48,34,Lost W. Conf. 1st Rnd.,2.88
1981-82,Seattle SuperSonics,Western,52,30,Lost W. Conf. Semis,3.69
1980-81,Seattle SuperSonics,Western,34,48,,-1.84
1979-80,Seattle SuperSonics,Western,56,26,Lost W. Conf. Finals,4.24
1978-79,Seattle SuperSonics,Western,52,30,Won Finals,2.69
1977-78,Seattle SuperSonics,Western,47,35,Lost Finals,1.48
1976-77,Seattle SuperSonics,Western,40,42,,-1.43
1975-76,Seattle SuperSonics,Western,43,39,Lost W. Conf. Semis,-0.15
1974-75,Seattle SuperSonics,Western,43,39,Lost W. Conf. Semis,-1.19
1973-74,Seattle SuperSonics,Western,36,46,,-2.29
1972-73,Seattle SuperSonics,Western,26,56,,-5.33
1971-72,Seattle SuperSonics,Western,47,35,,0.86
1970-71,Seattle SuperSonics,Western,38,44,,-1.53
1969-70,Seattle SuperSonics,Western,36,46,,-2.43
1968-69,Seattle SuperSonics,Western,30,52,,-4.68
1967-68,Seattle SuperSonics,Western,23,59,,-6
2021-22,Portland Trail Blazers,Western,27,55,,-8.55
2020-21,Portland Trail Blazers,Western,42,30,Lost W. Conf. 1st Rnd.,1.81
2019-20,Portland Trail Blazers,Western,35,39,Lost W. Conf. 1st Rnd.,-0.61
2018-19,Portland Trail Blazers,Western,53,29,Lost W. Conf. Finals,4.43
2017-18,Portland Trail Blazers,Western,49,33,Lost W. Conf. 1st Rnd.,2.6
2016-17,Portland Trail Blazers,Western,41,41,Lost W. Conf. 1st Rnd.,-0.23
2015-16,Portland Trail Blazers,Western,44,38,Lost W. Conf. Semis,0.98
2014-15,Portland Trail Blazers,Western,51,31,Lost W. Conf. 1st Rnd.,4.41
2013-14,Portland Trail Blazers,Western,54,28,Lost W. Conf. Semis,4.44
2012-13,Portland Trail Blazers,Western,33,49,,-2.53
2011-12,Portland Trail Blazers,Western,28,38,,-0.22
2010-11,Portland Trail Blazers,Western,48,34,Lost W. Conf. 1st Rnd.,1.85
2009-10,Portland Trail Blazers,Western,50,32,Lost W. Conf. 1st Rnd.,3.18
2008-09,Portland Trail Blazers,Western,54,28,Lost W. Conf. 1st Rnd.,5
2007-08,Portland Trail Blazers,Western,41,41,,-0.52
2006-07,Portland Trail Blazers,Western,32,50,,-3.78
2005-06,Portland Trail Blazers,Western,21,61,,-8.91
2004-05,Portland Trail Blazers,Western,27,55,,-3.45
2003-04,Portland Trail Blazers,Western,41,41,,-0.58
2002-03,Portland Trail Blazers,Western,50,32,Lost W. Conf. 1st Rnd.,2.97
2001-02,Portland Trail Blazers,Western,49,33,Lost W. Conf. 1st Rnd.,3.21
2000-01,Portland Trail Blazers,Western,50,32,Lost W. Conf. 1st Rnd.,4.52
1999-00,Portland Trail Blazers,Western,59,23,Lost W. Conf. Finals,6.36
1998-99,Portland Trail Blazers,Western,35,15,Lost W. Conf. Finals,5.67
1997-98,Portland Trail Blazers,Western,46,36,Lost W. Conf. 1st Rnd.,0.83
1996-97,Portland Trail Blazers,Western,49,33,Lost W. Conf. 1st Rnd.,3.56
1995-96,Portland Trail Blazers,Western,44,38,Lost W. Conf. 1st Rnd.,2.21
1994-95,Portland Trail Blazers,Western,44,38,Lost W. Conf. 1st Rnd.,3.8
1993-94,Portland Trail Blazers,Western,47,35,Lost W. Conf. 1st Rnd.,2.6
1992-93,Portland Trail Blazers,Western,51,31,Lost W. Conf. 1st Rnd.,2.92
1991-92,Portland Trail Blazers,Western,57,25,Lost Finals,6.94
1990-91,Portland Trail Blazers,Western,63,19,Lost W. Conf. Finals,8.47
1989-90,Portland Trail Blazers,Western,59,23,Lost Finals,6.48
1988-89,Portland Trail Blazers,Western,39,43,Lost W. Conf. 1st Rnd.,0.92
1987-88,Portland Trail Blazers,Western,53,29,Lost W. Conf. 1st Rnd.,3.59
1986-87,Portland Trail Blazers,Western,49,33,Lost W. Conf. 1st Rnd.,2.57
1985-86,Portland Trail Blazers,Western,40,42,Lost W. Conf. 1st Rnd.,0.61
1984-85,Portland Trail Blazers,Western,42,40,Lost W. Conf. Semis,2.8
1983-84,Portland Trail Blazers,Western,48,34,Lost W. Conf. 1st Rnd.,3.13
1982-83,Portland Trail Blazers,Western,46,36,Lost W. Conf. Semis,1.88
1981-82,Portland Trail Blazers,Western,42,40,,0.39
1980-81,Portland Trail Blazers,Western,45,37,Lost W. Conf. 1st Rnd.,0.52
1979-80,Portland Trail Blazers,Western,38,44,Lost W. Conf. 1st Rnd.,-0.87
1978-79,Portland Trail Blazers,Western,45,37,Lost W. Conf. 1st Rnd.,1.12
1977-78,Portland Trail Blazers,Western,58,24,Lost W. Conf. Semis,5.92
1976-77,Portland Trail Blazers,Western,49,33,Won Finals,5.39
1975-76,Portland Trail Blazers,Western,37,45,,-1.11
1974-75,Portland Trail Blazers,Western,38,44,,0.27
1973-74,Portland Trail Blazers,Western,27,55,,-4.3
1972-73,Portland Trail Blazers,Western,21,61,,-5.67
1971-72,Portland Trail Blazers,Western,18,64,,-8.84
1970-71,Portland Trail Blazers,Western,29,53,,-6.2
2021-22,Utah Jazz,Western,49,33,Lost W. Conf. 1st Rnd.,5.67
2020-21,Utah Jazz,Western,52,20,Lost W. Conf. Semis,8.97
2019-20,Utah Jazz,Western,44,28,Lost W. Conf. 1st Rnd.,2.52
2018-19,Utah Jazz,Western,50,32,Lost W. Conf. 1st Rnd.,5.28
2017-18,Utah Jazz,Western,48,34,Lost W. Conf. Semis,4.47
2016-17,Utah Jazz,Western,51,31,Lost W. Conf. Semis,4
2015-16,Utah Jazz,Western,40,42,,1.84
2014-15,Utah Jazz,Western,38,44,,0.71
2013-14,Utah Jazz,Western,25,57,,-6.27
2012-13,Utah Jazz,Western,43,39,,0.3
2011-12,Utah Jazz,Western,36,30,Lost W. Conf. 1st Rnd.,0.92
2010-11,Utah Jazz,Western,39,43,,-1.44
2009-10,Utah Jazz,Western,53,29,Lost W. Conf. Semis,5.33
2008-09,Utah Jazz,Western,48,34,Lost W. Conf. 1st Rnd.,2.31
2007-08,Utah Jazz,Western,54,28,Lost W. Conf. Semis,6.86
2006-07,Utah Jazz,Western,51,31,Lost W. Conf. Finals,3.06
2005-06,Utah Jazz,Western,41,41,,-2.49
2004-05,Utah Jazz,Western,26,56,,-3.74
2003-04,Utah Jazz,Western,42,40,,-0.53
2002-03,Utah Jazz,Western,47,35,Lost W. Conf. 1st Rnd.,2.76
2001-02,Utah Jazz,Western,44,38,Lost W. Conf. 1st Rnd.,1.21
2000-01,Utah Jazz,Western,53,29,Lost W. Conf. 1st Rnd.,5
1999-00,Utah Jazz,Western,55,27,Lost W. Conf. Semis,4.52
1998-99,Utah Jazz,Western,37,13,Lost W. Conf. Semis,5.54
1997-98,Utah Jazz,Western,62,20,Lost Finals,5.73
1996-97,Utah Jazz,Western,64,18,Lost Finals,7.97
1995-96,Utah Jazz,Western,55,27,Lost W. Conf. Finals,6.25
1994-95,Utah Jazz,Western,60,22,Lost W. Conf. 1st Rnd.,7.76
1993-94,Utah Jazz,Western,53,29,Lost W. Conf. Finals,4.1
1992-93,Utah Jazz,Western,47,35,Lost W. Conf. 1st Rnd.,1.74
1991-92,Utah Jazz,Western,55,27,Lost W. Conf. Finals,5.7
1990-91,Utah Jazz,Western,54,28,Lost W. Conf. Semis,3.18
1989-90,Utah Jazz,Western,55,27,Lost W. Conf. 1st Rnd.,4.82
1988-89,Utah Jazz,Western,51,31,Lost W. Conf. 1st Rnd.,4.01
1987-88,Utah Jazz,Western,47,35,Lost W. Conf. Semis,2.96
1986-87,Utah Jazz,Western,44,38,Lost W. Conf. 1st Rnd.,0.04
1985-86,Utah Jazz,Western,42,40,Lost W. Conf. 1st Rnd.,-0.67
1984-85,Utah Jazz,Western,41,41,Lost W. Conf. Semis,-0.33
1983-84,Utah Jazz,Western,45,37,Lost W. Conf. Semis,0.81
1982-83,Utah Jazz,Western,30,52,,-4.22
1981-82,Utah Jazz,Western,25,57,,-5.63
1980-81,Utah Jazz,Western,28,54,,-5.99
1979-80,Utah Jazz,Western,24,58,,-5.71
1978-79,New Orleans Jazz,Western,26,56,,-5.97
1977-78,New Orleans Jazz,Western,39,43,,-1.8
1976-77,New Orleans Jazz,Western,35,47,,-2.68
1975-76,New Orleans Jazz,Western,38,44,,-0.74
1974-75,New Orleans Jazz,Western,23,59,,-7.3
2021-22,Dallas Mavericks,Western,52,30,Lost W. Conf. Finals,3.12
2020-21,Dallas Mavericks,Western,42,30,Lost W. Conf. 1st Rnd.,2.26
2019-20,Dallas Mavericks,Western,43,32,Lost W. Conf. 1st Rnd.,4.87
2018-19,Dallas Mavericks,Western,33,49,,-0.87
2017-18,Dallas Mavericks,Western,24,58,,-2.7
2016-17,Dallas Mavericks,Western,33,49,,-2.53
2015-16,Dallas Mavericks,Western,42,40,Lost W. Conf. 1st Rnd.,-0.02
2014-15,Dallas Mavericks,Western,50,32,Lost W. Conf. 1st Rnd.,3.36
2013-14,Dallas Mavericks,Western,49,33,Lost W. Conf. 1st Rnd.,2.91
2012-13,Dallas Mavericks,Western,41,41,,-0.24
2011-12,Dallas Mavericks,Western,36,30,Lost W. Conf. 1st Rnd.,1.78
2010-11,Dallas Mavericks,Western,57,25,Won Finals,4.41
2009-10,Dallas Mavericks,Western,55,27,Lost W. Conf. 1st Rnd.,2.66
2008-09,Dallas Mavericks,Western,50,32,Lost W. Conf. Semis,1.68
2007-08,Dallas Mavericks,Western,51,31,Lost W. Conf. 1st Rnd.,4.7
2006-07,Dallas Mavericks,Western,67,15,Lost W. Conf. 1st Rnd.,7.28
2005-06,Dallas Mavericks,Western,60,22,Lost Finals,5.96
2004-05,Dallas Mavericks,Western,58,24,Lost W. Conf. Semis,5.86
2003-04,Dallas Mavericks,Western,52,30,Lost W. Conf. 1st Rnd.,4.86
2002-03,Dallas Mavericks,Western,60,22,Lost W. Conf. Finals,7.9
2001-02,Dallas Mavericks,Western,57,25,Lost W. Conf. Semis,4.41
2000-01,Dallas Mavericks,Western,53,29,Lost W. Conf. Semis,4.61
1999-00,Dallas Mavericks,Western,40,42,,-0.29
1998-99,Dallas Mavericks,Western,19,31,,-2.5
1997-98,Dallas Mavericks,Western,20,62,,-6.33
1996-97,Dallas Mavericks,Western,24,58,,-6.47
1995-96,Dallas Mavericks,Western,26,56,,-4.71
1994-95,Dallas Mavericks,Western,36,46,,-2.39
1993-94,Dallas Mavericks,Western,13,69,,-8.19
1992-93,Dallas Mavericks,Western,11,71,,-14.68
1991-92,Dallas Mavericks,Western,22,60,,-7.47
1990-91,Dallas Mavericks,Western,28,54,,-4.27
1989-90,Dallas Mavericks,Western,47,35,Lost W. Conf. 1st Rnd.,0.42
1988-89,Dallas Mavericks,Western,38,44,,-1.79
1987-88,Dallas Mavericks,Western,53,29,Lost W. Conf. Finals,3.59
1986-87,Dallas Mavericks,Western,55,27,Lost W. Conf. 1st Rnd.,5.54
1985-86,Dallas Mavericks,Western,44,38,Lost W. Conf. Semis,0.7
1984-85,Dallas Mavericks,Western,44,38,Lost W. Conf. 1st Rnd.,1.8
1983-84,Dallas Mavericks,Western,43,39,Lost W. Conf. Semis,0.15
1982-83,Dallas Mavericks,Western,38,44,,-0.7
1981-82,Dallas Mavericks,Western,28,54,,-4.48
1980-81,Dallas Mavericks,Western,15,67,,-8.33
2021-22,Houston Rockets,Western,20,62,,-8.26
2020-21,Houston Rockets,Western,17,55,,-7.5
2019-20,Houston Rockets,Western,44,28,Lost W. Conf. Semis,3.13
2018-19,Houston Rockets,Western,53,29,Lost W. Conf. Semis,4.96
2017-18,Houston Rockets,Western,65,17,Lost W. Conf. Finals,8.21
2016-17,Houston Rockets,Western,55,27,Lost W. Conf. Semis,5.84
2015-16,Houston Rockets,Western,41,41,Lost W. Conf. 1st Rnd.,0.34
2014-15,Houston Rockets,Western,56,26,Lost W. Conf. Finals,3.82
2013-14,Houston Rockets,Western,54,28,Lost W. Conf. 1st Rnd.,5.06
2012-13,Houston Rockets,Western,45,37,Lost W. Conf. 1st Rnd.,3.69
2011-12,Houston Rockets,Western,34,32,,0.57
2010-11,Houston Rockets,Western,43,39,,2.37
2009-10,Houston Rockets,Western,42,40,,-0.02
2008-09,Houston Rockets,Western,53,29,Lost W. Conf. Semis,3.73
2007-08,Houston Rockets,Western,55,27,Lost W. Conf. 1st Rnd.,4.83
2006-07,Houston Rockets,Western,52,30,Lost W. Conf. 1st Rnd.,5.04
2005-06,Houston Rockets,Western,34,48,,-1.3
2004-05,Houston Rockets,Western,51,31,Lost W. Conf. 1st Rnd.,4.27
2003-04,Houston Rockets,Western,45,37,Lost W. Conf. 1st Rnd.,2.28
2002-03,Houston Rockets,Western,43,39,,1.89
2001-02,Houston Rockets,Western,28,54,,-4.31
2000-01,Houston Rockets,Western,45,37,,2.71
1999-00,Houston Rockets,Western,34,48,,-0.57
1998-99,Houston Rockets,Western,31,19,Lost W. Conf. 1st Rnd.,1.39
1997-98,Houston Rockets,Western,41,41,Lost W. Conf. 1st Rnd.,-1.23
1996-97,Houston Rockets,Western,57,25,Lost W. Conf. Finals,3.85
1995-96,Houston Rockets,Western,48,34,Lost W. Conf. Semis,1.63
1994-95,Houston Rockets,Western,47,35,Won Finals,2.32
1993-94,Houston Rockets,Western,58,24,Won Finals,4.19
1992-93,Houston Rockets,Western,55,27,Lost W. Conf. Semis,3.57
1991-92,Houston Rockets,Western,42,40,,-1.94
1990-91,Houston Rockets,Western,52,30,Lost W. Conf. 1st Rnd.,3.27
1989-90,Houston Rockets,Western,41,41,Lost W. Conf. 1st Rnd.,1.71
1988-89,Houston Rockets,Western,45,37,Lost W. Conf. 1st Rnd.,0.22
1987-88,Houston Rockets,Western,46,36,Lost W. Conf. 1st Rnd.,0.82
1986-87,Houston Rockets,Western,42,40,Lost W. Conf. Semis,0.6
1985-86,Houston Rockets,Western,51,31,Lost Finals,2.1
1984-85,Houston Rockets,Western,48,34,Lost W. Conf. 1st Rnd.,1.38
1983-84,Houston Rockets,Western,29,53,,-3.12
1982-83,Houston Rockets,Western,14,68,,-11.12
1981-82,Houston Rockets,Western,46,36,Lost W. Conf. 1st Rnd.,-0.39
1980-81,Houston Rockets,Western,40,42,Lost Finals,-0.2
1979-80,Houston Rockets,Eastern,41,41,Lost E. Conf. Semis,0.27
1978-79,Houston Rockets,Eastern,47,35,Lost E. Conf. 1st Rnd.,0.92
1977-78,Houston Rockets,Eastern,28,54,,-3.83
1976-77,Houston Rockets,Eastern,49,33,Lost E. Conf. Finals,1.44
1975-76,Houston Rockets,Eastern,40,42,,-0.71
1974-75,Houston Rockets,Eastern,41,41,Lost E. Conf. Semis,0.84
1973-74,Houston Rockets,Eastern,32,50,,-0.34
1972-73,Houston Rockets,Eastern,33,49,,-1.81
1971-72,Houston Rockets,Eastern,34,48,,-1.22
1970-71,San Diego Rockets,Western,40,42,,0.21
1969-70,San Diego Rockets,Western,27,55,,-2.95
1968-69,San Diego Rockets,Western,37,45,Lost W. Div. Semis,-0.3
1967-68,San Diego Rockets,Western,15,67,,-7.94
2021-22,Memphis Grizzlies,Western,56,26,Lost W. Conf. Semis,5.37
2020-21,Memphis Grizzlies,Western,38,34,Lost W. Conf. 1st Rnd.,1.07
2019-20,Memphis Grizzlies,Western,34,39,,-0.91
2018-19,Memphis Grizzlies,Western,33,49,,-2.08
2017-18,Memphis Grizzlies,Western,22,60,,-5.81
2016-17,Memphis Grizzlies,Western,43,39,Lost W. Conf. 1st Rnd.,0.96
2015-16,Memphis Grizzlies,Western,42,40,Lost W. Conf. 1st Rnd.,-2.14
2014-15,Memphis Grizzlies,Western,55,27,Lost W. Conf. Semis,3.62
2013-14,Memphis Grizzlies,Western,50,32,Lost W. Conf. 1st Rnd.,2.18
2012-13,Memphis Grizzlies,Western,56,26,Lost W. Conf. Finals,4.32
2011-12,Memphis Grizzlies,Western,41,25,Lost W. Conf. 1st Rnd.,2.43
2010-11,Memphis Grizzlies,Western,46,36,Lost W. Conf. Semis,2.55
2009-10,Memphis Grizzlies,Western,40,42,,-1.39
2008-09,Memphis Grizzlies,Western,24,58,,-5.23
2007-08,Memphis Grizzlies,Western,22,60,,-5.76
2006-07,Memphis Grizzlies,Western,22,60,,-4.44
2005-06,Memphis Grizzlies,Western,49,33,Lost W. Conf. 1st Rnd.,3.74
2004-05,Memphis Grizzlies,Western,45,37,Lost W. Conf. 1st Rnd.,2.64
2003-04,Memphis Grizzlies,Western,50,32,Lost W. Conf. 1st Rnd.,2.95
2002-03,Memphis Grizzlies,Western,28,54,,-2.6
2001-02,Memphis Grizzlies,Western,23,59,,-6.74
2000-01,Vancouver Grizzlies,Western,23,59,,-4.94
1999-00,Vancouver Grizzlies,Western,22,60,,-5.1
1998-99,Vancouver Grizzlies,Western,8,42,,-8.94
1997-98,Vancouver Grizzlies,Western,19,63,,-7.47
1996-97,Vancouver Grizzlies,Western,14,68,,-10.17
1995-96,Vancouver Grizzlies,Western,15,67,,-9.55
2021-22,New Orleans Pelicans,Western,36,46,Lost W. Conf. 1st Rnd.,-0.84
2020-21,New Orleans Pelicans,Western,31,41,,-0.2
2019-20,New Orleans Pelicans,Western,30,42,,-0.55
2018-19,New Orleans Pelicans,Western,33,49,,-1.1
2017-18,New Orleans Pelicans,Western,48,34,Lost W. Conf. Semis,1.48
2016-17,New Orleans Pelicans,Western,34,48,,-1.69
2015-16,New Orleans Pelicans,Western,30,52,,-3.56
2014-15,New Orleans Pelicans,Western,45,37,Lost W. Conf. 1st Rnd.,1.13
2013-14,New Orleans Pelicans,Western,34,48,,-1.98
2012-13,New Orleans Hornets,Western,27,55,,-3.12
2011-12,New Orleans Hornets,Western,21,45,,-3.11
2010-11,New Orleans Hornets,Western,46,36,Lost W. Conf. 1st Rnd.,1.28
2009-10,New Orleans Hornets,Western,37,45,,-2.27
2008-09,New Orleans Hornets,Western,49,33,Lost W. Conf. 1st Rnd.,1.41
2007-08,New Orleans Hornets,Western,56,26,Lost W. Conf. Semis,5.46
2006-07,New Orleans/Oklahoma City Hornets,Western,39,43,,-1.19
2005-06,New Orleans/Oklahoma City Hornets,Western,38,44,,-2.51
2004-05,New Orleans Hornets,Western,18,64,,-6.3
2003-04,New Orleans Hornets,Eastern,41,41,Lost E. Conf. 1st Rnd.,-0.72
2002-03,New Orleans Hornets,Eastern,47,35,Lost E. Conf. 1st Rnd.,1.52
2021-22,San Antonio Spurs,Western,34,48,,0.02
2020-21,San Antonio Spurs,Western,33,39,,-1.58
2019-20,San Antonio Spurs,Western,32,39,,-0.65
2018-19,San Antonio Spurs,Western,48,34,Lost W. Conf. 1st Rnd.,1.8
2017-18,San Antonio Spurs,Western,47,35,Lost W. Conf. 1st Rnd.,2.89
2016-17,San Antonio Spurs,Western,61,21,Lost W. Conf. Finals,7.13
2015-16,San Antonio Spurs,Western,67,15,Lost W. Conf. Semis,10.28
2014-15,San Antonio Spurs,Western,55,27,Lost W. Conf. 1st Rnd.,6.34
2013-14,San Antonio Spurs,Western,62,20,Won Finals,8
2012-13,San Antonio Spurs,Western,58,24,Lost Finals,6.67
2011-12,San Antonio Spurs,Western,50,16,Lost W. Conf. Finals,7.28
2010-11,San Antonio Spurs,Western,61,21,Lost W. Conf. 1st Rnd.,5.86
2009-10,San Antonio Spurs,Western,50,32,Lost W. Conf. Semis,5.07
2008-09,San Antonio Spurs,Western,54,28,Lost W. Conf. 1st Rnd.,3.36
2007-08,San Antonio Spurs,Western,56,26,Lost W. Conf. Finals,5.1
2006-07,San Antonio Spurs,Western,58,24,Won Finals,8.35
2005-06,San Antonio Spurs,Western,63,19,Lost W. Conf. Semis,6.69
2004-05,San Antonio Spurs,Western,59,23,Won Finals,7.84
2003-04,San Antonio Spurs,Western,57,25,Lost W. Conf. Semis,7.51
2002-03,San Antonio Spurs,Western,60,22,Won Finals,5.65
2001-02,San Antonio Spurs,Western,58,24,Lost W. Conf. Semis,6.28
2000-01,San Antonio Spurs,Western,58,24,Lost W. Conf. Finals,7.92
1999-00,San Antonio Spurs,Western,53,29,Lost W. Conf. 1st Rnd.,5.92
1998-99,San Antonio Spurs,Western,37,13,Won Finals,7.12
1997-98,San Antonio Spurs,Western,56,26,Lost W. Conf. Semis,3.3
1996-97,San Antonio Spurs,Western,20,62,,-7.93
1995-96,San Antonio Spurs,Western,59,23,Lost W. Conf. Semis,5.98
1994-95,San Antonio Spurs,Western,62,20,Lost W. Conf. Finals,5.9
1993-94,San Antonio Spurs,Western,55,27,Lost W. Conf. 1st Rnd.,5.05
1992-93,San Antonio Spurs,Western,49,33,Lost W. Conf. Semis,2.21
1991-92,San Antonio Spurs,Western,47,35,Lost W. Conf. 1st Rnd.,2.81
1990-91,San Antonio Spurs,Western,55,27,Lost W. Conf. 1st Rnd.,4.3
1989-90,San Antonio Spurs,Western,56,26,Lost W. Conf. Semis,3.58
1988-89,San Antonio Spurs,Western,21,61,,-7.45
1987-88,San Antonio Spurs,Western,31,51,Lost W. Conf. 1st Rnd.,-5.02
1986-87,San Antonio Spurs,Western,28,54,,-5.09
1985-86,San Antonio Spurs,Western,35,47,Lost W. Conf. 1st Rnd.,-2.06
1984-85,San Antonio Spurs,Western,41,41,Lost W. Conf. 1st Rnd.,0.63
1983-84,San Antonio Spurs,Western,37,45,,-0.5
1982-83,San Antonio Spurs,Western,53,29,Lost W. Conf. Finals,3.1
1981-82,San Antonio Spurs,Western,48,34,Lost W. Conf. Finals,1.79
1980-81,San Antonio Spurs,Western,52,30,Lost W. Conf. Semis,2.18
1979-80,San Antonio Spurs,Eastern,41,41,Lost E. Conf. 1st Rnd.,-0.24
1978-79,San Antonio Spurs,Eastern,48,34,Lost E. Conf. Finals,4.97
1977-78,San Antonio Spurs,Eastern,52,30,Lost E. Conf. Semis,3.2
1976-77,San Antonio Spurs,Eastern,44,38,Lost E. Conf. 1st Rnd.,0.53
1975-76,San Antonio Spurs,Western,50,34,Lost Semis,3.82
1974-75,San Antonio Spurs,Western,51,33,Lost W. Div. Semis,3.89
1973-74,San Antonio Spurs,Western,45,39,Lost W. Div. Semis,0.74
1972-73,Dallas Chaparrals,Western,28,56,,-3.79
1971-72,Dallas Chaparrals,Western,42,42,Lost W. Div. Semis,0.26
1970-71,Texas Chaparrals,Western,30,54,Lost W. Div. Semis,-2.21
1969-70,Dallas Chaparrals,Western,45,39,Lost W. Div. Semis,2.13
1968-69,Dallas Chaparrals,Western,41,37,Lost W. Div. Semis,-0.31
1967-68,Dallas Chaparrals,Western,46,32,Lost W. Div. Finals,0.98`

export default nbaData
