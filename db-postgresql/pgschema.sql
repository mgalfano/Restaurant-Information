REVOKE CONNECT ON DATABASE restaurantinfo_pg FROM public;

SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'restaurantinfo_pg';

DROP DATABASE IF EXISTS restaurantinfo_pg;

CREATE DATABASE restaurantinfo_pg;

\c restaurantinfo_pg msx;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  category VARCHAR(30),
  price SMALLINT,
  is_claimed BOOLEAN
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  email VARCHAR(50)
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  restaurant_id INT REFERENCES restaurants(id),
  user_id INT REFERENCES users(id),
  rating SMALLINT,
  date DATE
);

