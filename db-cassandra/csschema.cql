CREATE KEYSPACE restaurantinfo_cs 
  WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE restaurantinfo_cs;

CREATE TABLE restaurantinfo_cs.restaurants (
  id UUID,
  name TEXT,
  category TEXT,
  price SMALLINT,
  is_claimed BOOLEAN,
  PRIMARY KEY (id)
);

CREATE TABLE restaurantinfo_cs.reviews (
  id UUID,
  restaurant_id UUID,
  user_id UUID,
  rating SMALLINT,
  date TIMESTAMP,
  PRIMARY KEY (restaurant_id, id)
);

CREATE TABLE restaurantinfo_cs.users (
  id UUID,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  -- restaurant_id UUID,
  -- rating SMALLINT,
  -- date DATE,
  PRIMARY KEY (id)
);
