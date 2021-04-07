CREATE DATABASE IF NOT EXISTS account_book;
GRANT ALL ON account_book.* TO 'root'@'%';
USE account_book;
DROP TABLE IF EXISTS incomes, expenses;

CREATE TABLE incomes (
    id integer,
    amount integer
);

CREATE TABLE expenses (
    id integer,
    amount integer
);
