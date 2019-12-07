# Hotel - React

## I used the Create React App Script to build the boilerplate project.

## Installing

To get deploy the app, you need to have [node.js](https://nodejs.org/) downloaded and installed. 

I used the package manager [yarn](https://yarnpkg.com) for my package management, to get the app up and running, yarn is not required, but recommended. 

To install yarn, open cmd or a terminal and type
```
npm i -g yarn
```
use sudo if you are on linux/osx

Now to install the required dependencies, (react, etc.) type this in a terminal in the project's root directory.

```
yarn
```
or for npm
```
npm install
```

## Running

To start the development server, type this into a terminal in the project's root directory.
```
yarn start
```
or for npm
```
npm start
```

## Using Docker
### Building
```
docker build -t hotel-react:dev
```

### Running
```
docker run hotel-react:dev
```

Thanks for reading! The project should automatically open up in a new browser window, if not it should be on http://localhost:3000

## Special Features
- use * to clean out all members
- check logs in console

## Kubernetes
To use the gihub workflow files, you need a
- Kubernetes Instance (I use 2x1c2GB)
- A docker hub account
- Patience

The KUBECONFIG (which you can download if you use [linode](https://linode.com)) is encoded in base64 and then stored as a secret, along with your docker hub username & docker hub password. Make sure to edit the workflow configuration to your username and the name of the repo. 

Hopefully it will just work, if not, send me a email and I'll help ya out.

### Built by Zachary Myers <zackmyers@lavabit.com>
