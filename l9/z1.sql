use TestDB
-- CREATE TABLE OSOBA (id INT IDENTITY(1,1) PRIMARY KEY NOT NULL, name VARCHAR(50), surname VARCHAR(50), sex NVARCHAR(1), age INT);
go
insert into OSOBA (name, surname, sex, age) Values ("Michał","Martusewicz","M", 15);
insert into OSOBA (name, surname, sex, age) Values ("Micha1","Martusewicz","M",15);
insert into OSOBA (name, surname, sex, age) Values ("Micha7","Martusewicz","M",15);
insert into OSOBA (name, surname, sex, age) Values ("Micha7","Martusewicz23","M",15);
insert into OSOBA (name, surname, sex, age) Values ("Michał","Martusewicz","K", 16);
insert into OSOBA (name, surname, sex, age) Values ("Micha1","Martusewicz","K",18);
insert into OSOBA (name, surname, sex, age) Values ("Micha7","Martusewicz","K",12);
insert into OSOBA (name, surname, sex, age) Values ("Micha7","Martusewicz23","K",10);
select * from osoba
    where sex = 'K' and age > 13;
go
