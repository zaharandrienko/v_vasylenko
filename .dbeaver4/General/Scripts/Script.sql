


INSERT INTO employee
(firstname, lastname, age)


VALUES('zahar2', 'Andriko2', 11);


select firstname, lastname, age  from employee

select * from employee


CREATE TABLE Car (
	marka varchar not NULL,
	year int  not NULL

);



INSERT INTO car
(marka, year)
VALUES('Bmw', 2000);

INSERT INTO car
(marka, year)
VALUES('Mercedes', 2010);

select * from Car;

select * from car
order by year desc


select * from "User"
where id > 2

--

--where "year" > 2005 and "year" < 2017




