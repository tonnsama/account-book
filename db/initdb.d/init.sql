GRANT ALL ON account_book.* TO 'root'@'%';
USE account_book;
DROP TABLE IF EXISTS users, income_categories, expense_categories, incomes, expenses;

CREATE TABLE users (
    id INT(11) AUTO_INCREMENT NOT NULL,
    username VARCHAR(10),
    PRIMARY KEY (id)
);

CREATE TABLE income_categories (
    id INT(11) AUTO_INCREMENT NOT NULL,
    item_name VARCHAR(10),
    PRIMARY KEY (id)
);

CREATE TABLE expense_categories (
    id INT(11) AUTO_INCREMENT NOT NULL,
    item_name VARCHAR(10),
    PRIMARY KEY (id)
);

CREATE TABLE incomes (
    id INT(11) AUTO_INCREMENT NOT NULL,
    date_time datetime,
    userid INT(11),
    category_id INT(11),
    amount INT(11),
    memo VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE expenses (
    id INT(11) AUTO_INCREMENT NOT NULL,
    date_time datetime,
    userid INT(11),
    category_id INT(11),
    amount INT(11),
    memo VARCHAR(30),
    PRIMARY KEY (id)
);
