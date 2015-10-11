var displayResults = function displayResults(tracks) {
    var resultsList = $('#search-results').children('ul');
    resultsList.empty();
    for (track of tracks) {
        var $a = $('<a>').attr('href',track.permalink_url).text(track.title);
        resultsList.append($('<li>').html($a));
    }
};
var findMusic = function findMusic(query) {
    console.log('Searching for ' + query);
    SC.get('/tracks', {
        q: query
    }).then(function(tracks) {
        displayResults(tracks);
    });
};
Template.playlist.events({
    'click #search-btn': function(event){
        event.preventDefault();
        var query = $('#search-value').val();
        console.log(query);
        findMusic(query);
    },
    'keypress input.form-control': function(event) {
        if (event.which === 13) {
            event.preventDefault();
            var query = event.currentTarget.value;
            console.log(query);
            findMusic(query);

        }
    },
    'click #search-results a': function(event) {
        event.preventDefault();
        //insert SC widget
        $('#player').empty();
        SC.oEmbed(event.currentTarget.href, { auto_play: true }).then(function(oEmbed) {
            $('#player').append(oEmbed.html);
        });
    }
});

Template.playlist.helpers({
  getPlayList:function(){

        return PlayList.findOne();



  }
});
