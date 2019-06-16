var socket = io.connect();

var teams;
var currentpoints;
var points;

socket.on('getTeamData', function(list){
    teams = list;
    getTeams();
});

function getTeams(){

    for (var i = 0; i < teams['items'].length; i++){
        points = [];
        var total = 0;

      //  $('.teamlist').append($('<div>"'+teams.items[i].team+'"</div>'));

        for (var j =0; j < teams.items[i].team.length; j++){
          //  $('.teamlist').append($('<div>"'+1+'"</div>'))
            getStats(teams.items[i].team[j]);

            points.push(currentpoints);
        }
        socket.emit('sendSkaterStats', points);

        for (var k = 0; k < points.length; k++){
            total += (points[k])
        }
     //   socket.emit('sendSkaterStats', total);
     $('#user-standings-table tr:last').after('<tr><td><button Onclick="buttonClicked('+i+')">'+teams.items[i].name+'</button></td><td>'+total+'</td></tr>');
    }
}

function buttonClicked(data){
  //socket.emit('sendSkaterStats', data);
  var username = teams.items[data].name;
  socket.emit('sendSkaterStats', username);

  for (var i = 0; i < teams['items'].length; i++){
    if (teams.items[i].name == username){
      socket.emit('sendSkaterStats', teams.items[i].team);

      var element = $("#2");
    element.remove();

      $('.teamlist').append($('<div id="2"><div>Team:'+username+'</div><br></br><div>Players:</div></div>'));


      for (var j = 0; j < teams.items[i].team.length; j++){
        socket.emit('sendSkaterStats', teams.items[i].team[j]);
        getPlayerName(teams.items[i].team[j], username);
      }
    }
  }

  //for (var j = 0; j < teamarray.length; j++){
  //  getPlayerName(teamarray[j]);
  //}
}

function getStats(id, callback){

    $.ajax({
        async: false,
        type: 'GET',
        url: 'https://statsapi.web.nhl.com/api/v1/people/' + id + '/stats?stats=statsSingleSeason',
        success: function(copyrightAndStats) {
          $.each(copyrightAndStats, function (index, stats) {
            if (index == "stats") {
              var playerStats = {};
              playerStats['goals'] = stats[0].splits[0].stat.goals;
              if (playerStats['goals'] != null) {
                playerStats['assists'] = stats[0].splits[0].stat.assists;
                playerStats['shots'] = stats[0].splits[0].stat.shots;
                playerStats['powerPlayPoints'] = stats[0].splits[0].stat.powerPlayPoints;
                playerStats['hits'] = stats[0].splits[0].stat.hits;
                playerStats['blocked'] = stats[0].splits[0].stat.blocked;
                calculateSkaterScore(playerStats);
              } else {
                playerStats['wins'] = stats[0].splits[0].stat.wins;
                playerStats['goalsAgainst'] = stats[0].splits[0].stat.goalsAgainst;
                playerStats['saves'] = stats[0].splits[0].stat.saves;
                playerStats['shutouts'] = stats[0].splits[0].stat.shutouts;
              }
            }
          });
        }
      });
}

function calculateSkaterScore(playerStats) {
    var totalScore = 0;
    totalScore += playerStats['goals'] * 3;
    totalScore += playerStats['assists'] * 2;
    totalScore += playerStats['shots'] * 0.5;
    totalScore += playerStats['powerPlayPoints'] * 0.5;
    totalScore += playerStats['hits'] * 1;
    totalScore += playerStats['blocked'] * 0.5;
    currentpoints = (Math.round(totalScore * 100) / 100);
}
  
function calculateGoalieScore(playerStats) {
    var totalScore = 0;
    totalScore += playerStats['wins'] * 5;
    totalScore += -1 * (playerStats['goalsAgainst'] * 0.1);
    totalScore += playerStats['saves'] * 0.2;
    totalScore += playerStats['shutouts'] * 2;
    return (Math.round(totalScore * 100) / 100);
}

function getPlayerName(playerid, teamname){
  var element = $("#1");
  element.remove();
  socket.emit('sendSkaterStats', playerid);
	$.ajax({
    type: 'GET',
    url: 'https://statsapi.web.nhl.com/api/v1/people/'+playerid,
    success: function(copyrightAndStats) {
      $.each(copyrightAndStats, function (index, player) {
        if (index == "people") {
            $('.teamlist').append($('<div id="1"><div>'+player[0].fullName+'</div></div>'));
        }
      });
    }
});
}