# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

# API Documentation

<!-- ## Get all restaurants
```
GET /api/restaurants
```

Example output:  -->

## Get a restaurant info
```
GET /api/restaurants/:id
```
Returns JSON data for a restaurant with the specified `id`

Sample response:
```
{"id":11,"category":"French","restaurantname":"Jerde - Yundt","claimed":"true","prize":"$","restaurant_id":7,"rating":3,"date":"2019-11-14T08:00:00.000Z"}]
```

## Get reviews for one restaurant
```
GET /api/restaurants/:id/reviews
```
Returns JSON data of all reviews for a restaurant with specified `id`

Response data:
```
{"id":1,"user_id":1,"rating":3,"date":"2019-11-14T08:00:00.000Z"}
```

## Get info about one user
```
GET /api/users/:id
```
Returns JSON data of info about a specified user of `id`

Response data:
```
{"id":1,"first_name":"bob","last_name":"builder","email":"email@domain.com"}
```

## Get all reviews from one user
```
GET /api/users/:id/reviews
```
Return JSON data of all reviews by user of `id`

Sample response of one review:
```
{"id":1,"restaurant_id":314,"user_id":33,"rating":4,"date":"2019-11-14T08:00:00.000Z"}
```

## Add new restaurant
```
POST /api/restaurants
```
Send JSON data to add a new restaurant

Sample request:
```
{"name":"burger shop","category":"american","price":2,"is_claimed":"false"}
```

## Add a new review for a restaurant
```
POST /api/restaurants/:id/reviews
```
Send JSON data to add a review for restaurant `id`

Sample request:
```
{"restaurant_id":54,"user_id":3,"rating":4,"date":"2019-11-14T08:00:00.000Z"}
```

## Add a new user
```
POST /api/users
```
Send JSON data to add a user
Sample request:
```
{"first_name":"bob","last_name":"builder","email":"email@domain.com"}
```

## Edit info for a restaurant
```
PUT /api/restaurants/:id
```
Update info for a restaurant at `id`

Sample request:
```
{"id":4,"name":"burgerland","category":"american","price":2,"is_claimed":"true"}
```

<!-- ## Edit a review of a restaurant
```
PUT /api/restaurants/:id/reviews/:id
``` -->


<!-- PUT /api/users/:id
# Edit info for a user -->

## Delete a restaurant
```
DELETE /api/restaurants/:id
```
Remove restaurant info at `id`

Sample request:
```
{"id":5}
```

<!-- DELETE /api/restaurants/:id/reviews/:id
# Delete a review of a restaurant -->

## Delete a user
```
DELETE /api/users/:id
```
Remove user info at `id`

Sample request:
```
{"id":41}
```
