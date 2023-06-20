## Bookstore Api CRUD

This api is created to handle the CRUD operation of book store.

#### Dependencies:
Node.js
Express.js
Mongoose
Jsonwebtoken

#### Install dependencies:
npm install

#### Create a .env file in the root of the project and add your MongoDB connection string, JWT_SECRET, and other necessary configurations:
MONGODB_URI=your-mongodb-connection-string

JWT_SECRET_KEY=your-secret-key

PORT=your-port-number

#### Start the server:
npm start

#### Following Endpoints:
This api have following endpoints.

- GET `/api/items` - Retrieve all items from the database.

- GET `/api/items/:id` - Retrieve a specific item by its ID.

- POST `/api/items` - Create a new item in the database.

- PUT `/api/items/:id` - Update an existing item by its ID.

- DELETE `/api/items/:id` - Delete an item by its ID.

#### Usage:
This api created for managing user and bookstore data in the database.. where every user can add, delete, update the data uniquely. No other user can access others data.

#### License:
This project is licensed under the MIT License. See the LICENSE file for more details.

#### Author:
Swarup Karmokar