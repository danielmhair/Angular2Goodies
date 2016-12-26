# Prepare Angular 2 App for Production using Angular CLI

## 1. Run `ng build --env=prod`
After this, your production files will be locations in a dist folder. 
This command will convert all your js, css and html files and minify 
them into relatively few files.

## 2. Serve the `dist` folder using your server
You need to serve the files in the `dist` folder from your server. 

### Serving from `Node` - ([Node Typescript Template](https://github.com/danielmhair/node-typescript-template.git))
A template to serve files from Node (and integration with Mongo, if
desired) is at the link here ([Node Typescript Template](https://github.com/danielmhair/node-typescript-template.git))

### Serving from `Java Play`
In order to serve files from Java Play, so here: 

#### The Assets controller

Play 2.0 comes with a built-in controller to serve public assets. By default, this controller provides caching, ETag, gzip compression and JavaScript minification support.

The controller is available in the default Play JAR as controllers.Assets, and defines a single at action with two parameters:
```
Assets.at(folder: String, file: String)
```

The folder parameter must be fixed and defines the directory managed by the action. The file parameter is usually dynamically extracted from the request path.

Here is the typical mapping of the Assets controller in your conf/routes file:
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

The folder structure would be as follows
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