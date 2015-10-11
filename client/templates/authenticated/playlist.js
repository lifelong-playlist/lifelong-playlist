var displayResults = function displayResults(tracks) {
    var resultsList = $('#search-results').children('ul');
    resultsList.empty();
    for (track of tracks) {
        resultsList.append($('<li>').text(track.title));
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
    }
});

Template.playlist.helpers({
  getPlayList:function(){

        return PlayList.findOne();



  }
});
