# graphql-server

To clone the project use the 'Code' button at the top right corner and choose one of the available options.

After that, please, switch to the `develop` branch and install all dependenices with the command

```console
npm i
```

or adjust all commands to use yarn instead of npm if you prefer to use yarn as the package manager

### Start

Before starting make sure that you have already run the microservices with a connected database. 

To start the project in the **development** mode use command

```console
npm run start
```

To start the project in the **production** mode use command

```console
npm run start:prod
```

You can set the port to run the application using a `.env` file with the `PORT` variable. Otherwise it will be running on the 5000 port. 


### Using

To use the application, please, open the graphql playground at `localhost:{PORT}/graphhql` and write your queries there. 


