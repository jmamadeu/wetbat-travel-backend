# WetBat Quotes API

this is the backend for the WetBat web app

# How to run
You will need to instal:

- [Node.JS](https://nodejs.org/en/download/)

> This API uses `Postgres` as the database, so you can download a `native driver`or use `docker`(it was my option). Take a look at the `.env` file to see/change the user credentials to connect to the database

 - Clone the repo, using `ssh`, `github-cli` or `https` and navigate to the main folder

```bash
$ yarn # To install the dependencies
$ yarn start:dev to run the API
```

Now that the API is running you can go to the [web app](https://github.com/jmamadeu/wetbat-travel-front-end) and follow the instructions to run it.

> You can test the API yourself, there is a `Insomnia-All_2022-11-02.json` file which is the documentation, to open that you need to download [Insomnia app](https://insomnia.rest/download) and then import the file, you will be able to see/test all of the routes.

Feel free to create an issue or open a PR, made with :heart: by [João Amadeu](https://twitter.com/jmamadeu)