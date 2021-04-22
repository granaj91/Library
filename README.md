# Library
This application allows you to add books that you've read and want to read to a library.

# Getting Started
## Clone the code into a fresh folder
```
git clone https://github.com/granaj91/Library.git
cd Library
```

## Create your own mongoDB database and set your environment variables
### Creating a mongoDB database
1. Create an account or login to [mongoDB](https://account.mongodb.com/account/login)
2. Click on build a cluster
3. Click create a cluster under Starter Clusters (Free)
4. Choose a provider (I used AWS) and click create cluster

### Set environment variables
Create a .env file in the config directory and copy the .env.example contents into it.

#### Connect to your mongoDB database
After your mongoDB cluster has been created, click on connect. 

In setup connection security add your IP address and create a Database User, be sure to copy your password (you will need it when setting up the environment variables). I recommend temporarily pasting it at the end of your .env since you will need to copy the connection string in the next step.

In choose a connection method, click on connect your application and copy the connection string. Replace YOUR_DATABASE_URI in your .env with this connection string. Replace \<password\> with the password that you copied from creating a Database User.

## Running the application with docker
### Production
To run the app in production mode, run the command:

```
docker-compose -f prod.yml up
```

Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

### Development
To run the app in development mode, first open the package.json in the client and replace:

```
"proxy": "http://localhost:8000"
```

with:

```
"proxy": "http://server:8000"
```
*Note: server is a service that will be created with docker-compose and is where the client can make API requests from*

then run the following command from the Library directory:

```
docker-compose -f dev.yml up
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Removing containers created by docker-compose
Run the following command: 
```
docker-compose -f <file.yml> down
```
*Replace \<file.yml\> with either prod.yml or dev.yml, depending on which file you ran*

### Rebuilding images
To rebuild the docker images after making an edit, run the following command: 
```
docker-compose -f <file.yml> up --build
```
*Replace \<file.yml\> with either prod.yml or dev.yml, depending on which file you edited*

## Running the application locally
### Install dependencies
```
cd client 
npm install
cd server
npm install
```

### Run the application
#### Production
In your .env file, set NODE_ENV=production

From the client directory, run the following command to create a build folder:
```
npm run build
```

From the server directory, run the following command to run the application:
```
npm start
```

Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

#### Development
While in the server directory, run the command: 
```
npm run dev
```
*Make sure NODE_ENV=development in your .env and the proxy in the client package.json is http://localhost:8000*

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
