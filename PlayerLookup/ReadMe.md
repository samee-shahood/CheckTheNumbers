# Player Lookup
This file is used to create a server which fetches all the NHL player names and IDs from the NHL API, and displays each player in
a searchable list as a list of buttons. When a button is clicked, the player NHL.com player page will be displayed on the website

## What it does/How it works
Using the unofficial NHL API, a for loop which creates a list of player in the NHL using each of the NHL team IDs. For every player
found in the forloop, a new button is created displayed as the name of the player and associated with the is the players API ID.
When a button is clicked, using the HTML function i-frame, the ID of the button clicked is used to access the player pages link, 
and that web link would be displayed on the website using i-frame.

## How to run it
1) In the command prompt, run node index.js
