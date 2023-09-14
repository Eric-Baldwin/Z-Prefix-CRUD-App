# Z-Prefix-CRUD-App

--- Installation ---

Clone the Repository:
- git clone https://github.com/Eric-Baldwin/Z-Prefix-CRUD-App

Navigate to the project directory:
- cd Z-Prefix-CRUD-App


--- Backend Setup ---


Navigate to the Backend (server) directory:
- cd server

Install the necessary dependencies:
- npm install

Create a .env file in the server directory to store environment variables, like the database connection details and port number. For instance, you might have:
- DATABASE_URL=postgres://username:password@localhost:5432/mydatabase
- PORT=3002
(Replace username, password, localhost, 5432, and mydatabase with your PostgreSQL setup details.)

Run the necessary database migrations to set up your tables:
- npx knex migrate:latest

Seed the database:
- npx knex seed:run

Start the Backend in the "server" directory:
- npm start
(Your server should now be running on http://localhost:3002)


--- Frontend Setup ---


Navigate to the Frontend (client) React-App (gamestore) directory:
- cd ../client/gamestore

Install the necessary dependencies:
- npm install
- npm install @mui/material @mui/icons-material @emotion/react @emotion/styled

Start the Frontend in the "gamestore" directory:
- npm start
(Your application should now be running on http://localhost:3000)


--- Application Features ---


- As a signed out user, you will be able to view a list of games in the game inventory as well as view the details of those games.

 - If you sign up and sign in with your first and last name, user id, and password, you will be considered an "Inventory Manager". As an Inventory Manager, you will be able to view all games and their details, create new games, delete games, and edit games.