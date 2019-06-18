# League Standings
This file is used to create a server which displays all the teams players in the database along with the number of fantasy points
associated with the team using a calculator.

## What it does
Using socketio and mongoose, the database is fetched in server.js the collection "team-data" is accessed and 
sent to to the client using socket.io. Upon recieving the data from the database, the client will proceed to display
each team, and associated with each team is a list of players and their fantasy points that can be accessed when the
team name is clicked on by the user

## How to run it
1) Ensure that the mongoDB is working
2) In the command prompt, run node server.js
