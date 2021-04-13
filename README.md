# Library
This application allows you to add books that you've read and want to read to a library.

# Getting Started
## Step 1. Clone the code into a fresh folder
```
git clone https://github.com/granaj91/Library.git
cd Library
```

## Step 2. Create your own mongoDB database and set your environmennt variables
### Creating a mongoDB database
1. Create an account or login to [mongoDB](https://account.mongodb.com/account/login)
2. Click on build a cluster
3. Click create a cluster under Starter Clusters (Free)
4. Choose a provider (I used AWS) and click create cluster

### Set environment variables
Create a .env file and copy the .env.example contents into it.

After the cluster has been created, click on connect. In the setup connection security add your IP address and create a Database User, be sure to copy your password (you will need it when setting up the environment variables). I recommend temporarily pasting it at the end of your .env since you will need to copy the connection string in the next step.

In choose a connection method, click on connect your application and copy the connection string. Replace YOUR_DATABASE_URI in your .env with this connection string. Replace <password> with the password that you copied from creating a Database User.

## Running the application with docker
To run the app in development mode, run the command:

`docker-compose up`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Running the application locally
### Install dependencies
```
npm install
cd client npm install
cd ..
```

### Run the application
To run the app in development mode, open the package.json in the client and replace:

`"proxy": "http://server:8000"`

with:

`"proxy": "http://localhost:8000"`

Then run the next command in the Library directory:

`npm run dev`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.