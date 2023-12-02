# ms-users

### Dependencies to run the project
- Have Node installed, preferably version 16.14.2
- Have package manager installed like npm or yarn
- Have the Serverless framework installed globally “npm install -g Serverless”

### How to run the project
to clone this repository
```
git clone https://github.com/SisFinADS2023/coinc-ms-transactions.git
```

In your terminal navigate to the project directory and run the command `yarn` if you have yarn installed or `npm install`

Rename the **".env.example"** file to **".env"** and fill in the variables with your database information if you have it installed on your machine or with the information you prefer if you have Docker installed.
> Note: host and port must match your bank's default data.

#### Run the `serverless offline` command to start the project.
> Note: if the error "serverless is not recognized as an internal command" occurs, try to start the project with the command `npx serverless offline`
