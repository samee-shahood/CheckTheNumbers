var socket = io.connect();

socket.on('connected', function(data){
    getPlayerList();
})

function getPlayerList(){
    
    var teamIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 52, 53, 54];
    teamIds.forEach(function(teamID) {
        $.ajax({
            async: false,
            type: 'GET',
            url: 'https://statsapi.web.nhl.com/api/v1/teams/' + teamID + '/roster/',
            success: function(copyrightAndRoster){
                $.each(copyrightAndRoster, function (index, player){
                    if (index == "roster"){
                        for (var i = 0; i < player.length; i++) {
                            var element = $("#" + player[i].person.id);
                            element.remove();  
                            $('#user-standings-table tr:last').after($('<tr id="'+ player[i].person.id +'"><td><button id="playerbutton" Onclick="buttonClicked('+ player[i].person.id +')">' + player[i].person.fullName + '</button></td></tr>'));
                        }
                    }
                });
            }
        });
    });
}

function buttonClicked(id){
    var element = $("#1");
    element.remove();
    $('.player').append($('<div id="1"><iframe src="https://www.nhl.com/player/'+id+'" width="980" height="500" seamless></iframe></div>'));
}