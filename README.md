## Description

A [NestJs](https://github.com/nestjs/nest) template repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## DB Migrations

```bash
# Create a new empty migration.
$ npm run typeorm:migration:create --name=NameOfTheMigration

# Creates a new migration file and writes all sql queries that must be executed to update the database.
# If no there were no changes generated, the command will exit with code 1.
$ npm run typeorm:migration:generate --name=NameOfTheMigration

# Execute all pending migrations.
$ npm run typeorm:migration:run

# Revert the most recently executed migration.
$ npm run typeorm:migration:revert

# Show all migrations and whether they've been run or not.
$ npm run typeorm:migration:show

# Synchronize a database schema.
# Be careful running this command in production.
$ npm run typeorm:schema:sync

# Check what sql queries schema:sync is going to run use.
$ npm run typeorm:schema:log

# Completely drop a database schema.
# Be careful with this command on production.
$ npm run typeorm:schema:drop
```

## Swagger

http://localhost:9001/swagger/

## First Start

```bash
# use the docker-compose.yaml file, to create a mariadb docker container
# start up the container

# Check for migrations
$ npm run typeorm:migration:show

# if theres any pending migration, execute them with the following command.
$ npm run typeorm:migration:run

# run the application in development mode
$ npm run start:dev
```
