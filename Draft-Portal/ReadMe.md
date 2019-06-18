# Draft Portal
The draft portal is used to run a draft between multiple users.

## What it does
It uses socket.IO to create a real time server which connects multiple users to the draft and conduct a draft between the users.

Using socket.io, a login system is used to authenticate users by sending data from the database to the MongoDB.

Once enough users are connected to the server, a draft-order is created in order to begin processing picks.

Upon each pick made by the user, a turn is passed onto the next user and the pick is stored in an array.

Once the draft is complete, the server will send each team to the database.

## How to run it
1) Ensure that the mongoDB is working
2) In the command prompt, run node server.js
