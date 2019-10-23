<h1 align="center">
  <img alt="Express API ES6 Starter" src="https://i.imgur.com/qeAbxtQ.png">
</h1>

> Starter application for building APIs with Express.js

Comes with:

- [ES6](http://babeljs.io/learn-es2015/) features/modules
- ES7 [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Mongoose](https://mongoosejs.com) ODM or [mongo-migrate](https://www.npmjs.com/package/migrate-mongo) migrations
- Mongodb 
- [ESLint](http://eslint.org/) for code linting
- Request validation using [Joi](https://www.npmjs.com/package/joi)
- Code formatting using [Prettier](https://www.npmjs.com/package/prettier)
- Configuration management using [dotenv](https://www.npmjs.com/package/dotenv)
- Logging using [winston](https://www.npmjs.com/package/winston)

---

## Prerequisites

- [Node.js](https://yarnpkg.com/en/docs/install)
- [NPM](https://docs.npmjs.com/getting-started/installing-node)
- Mongodb
## Setup

Clone the repository, install the dependencies and get started right away.

    $ git clone https://github.com/SagunPandit/nodejs-mongoose-boilerplate
    $ cd <application-name>
    $ rm -rf .git
    $ npm install

Make a copy of `.env.example` as `.env` and update your application details and database credentials. Now, run the migrations and seed the database.

    $ npm migrate

Finally, start the application.

    $ npm start:dev (For development)
    $ NODE_ENV=production yarn start (For production)

Navigate to http://localhost:8000/api/ to verify installation.

## Creating new Migrations(if using mongo-migrate)

These are the commands to create a new migration.

    $ npm make:migration <name>

Example,

    $ npm make:migration create_tags_table

## Setup Using Docker

Use [docker-compose](https://docs.docker.com/compose/) to quickly bring up a stack with pre-configured Postgres database container. Data is ephemeral and containers will disappear when stack is removed.

Specific configuration for Docker is in `.env.docker`

- `0.0.0.0` as `$APP_HOST` to expose app on Docker network interface
- Pre-configured Postgres settings - can be updated to point to another Postgres host

Bring up stack,

    $ docker-compose up

Navigate to http://localhost:8000/api/ to verify application is running from docker.

Bring down stack,

    $ docker-compose down


That's it, you are ready to roll.

## Contributing

For contribution and feature requests, please create an [issue](https://github.com/SagunPandit/nodejs-mongoose-boilerplate/issues) first.

## License

express-api-es6-starter is under [MIT License](LICENSE).
