# Prepare Angular 2 App for Production using Angular CLI

## 1. Run `ng build --env=prod`
After this, your production files will be locations in a dist folder. 
This command will convert all your js, css and html files and minify 
them into relatively few files.

## 2. Serve the `dist` folder using your server
You need to serve the files in the `dist` folder from your server. 

### a. Serving from `Node`
First off, run this command in your project root directory (same
location that your dist folder is in):
```
git clone https://github.com/danielmhair/node-typescript-template.git server
```
This will create a folder named server and will copy all the files in the GIT repository.
Then follow the [instructions here](https://github.com/danielmhair/node-typescript-template)
to setup a NodeJS Server with Typescript.

NOTE: There are a few files that are to integrate with MongoDB, but
you can easily remove a few lines of code in `Server.ts` (outlines by TODO comments)
and then delete `MongoManager.ts`.

Also, what is great about this, is when you run the command below to
run NodeJS, it will save your changes on the spot. In other words, when
you change and save any file in your Node server, it will restart the
server with the new changes
```
npm start
```

### b. Serving from `Java Play`
In order to serve files from Java Play, go
[here](https://www.playframework.com/documentation/2.0/Assets) and read
the `/public folder` heading. Instead of the public folder, you will
be using the `dist` folder in replace of the `public` folder.
In summary, here is your typical mapping of the Assets controller in your conf/routes file:
```
GET  /*file        Assets.at("../dist", file)
```

Note that we define the *file dynamic part that will match the .* regular expression. So for example, if you send this request to the server:
```
GET /index.html
```

The router will invoke the Assets.at action with the following parameters:
```
controllers.Assets.at("../dist", "index.html")
```

This action will look-up the file and serve it, if it exists.

## 3. The folder structure if following the instructions above, would be as follows:
```
src                                             # Angular Files used to develop the app
dist                                            # Files that `ng build` creates for your Angular App
  └ index.html
  └ js and css files
  └ assets folder
    └ images
server                                          # node-typescript-template repository
  └ api folder                                  # Holds your db models, controllers and endpoints
  └ seeds folder                                # Holds json files that populate your database (for initalization purposes)
    └ json collection files to be used to initialize your Mongo database (if you choose to use Mongo)
  └ Server.ts
  └ *.ts and config files
```