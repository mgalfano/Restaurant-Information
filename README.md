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

## API Documentation
---

`GET /currentRestaurant`

  Return JSON data for the current restaurant

  Sample response:
  
    [{"id":11,"category":"French","restaurantname":"Jerde - Yundt","claimed":"true","prize":"$","restaurant_id":7,"rating":3,"date":"2019-11-14T08:00:00.000Z"}]

`POST /currentRestaurant`

  Add new restaurant

`PUT /currentRestaurant`

  Replace data for current restaurant

`DELETE /currentRestaurant`

  Delete entry of current restaurant

`GET /restaurant`

  Return randomly selected restaurant

`POST /resaurant`

  Add new restaurant

`PUT /restaurant`

  Replace data for specified restaurant

`DELETE /restaurant`

  Delete entry of specified restaurant
