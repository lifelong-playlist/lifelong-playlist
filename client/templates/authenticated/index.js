Template.index.onCreated( () => {
  Template.instance().subscribe( 'template' );
  Session.setDefault("playing", false);
  Meteor.subscribe("playlists");
});

Template.playlist.rendered = function(){

};

var findMusic = function findMusic(query) {
  console.log('Searching for ' + query);
  SC.get('/tracks', {
    q: query
  }).then(function(tracks) {

    Session.set("tracks", tracks);
    //displayResults(tracks);
  });
};


Template.index.events({
  'click #search-btn': function(event) {
    event.preventDefault();
    var query = $('#search-value').val();
    findMusic(query);
  },
  'keypress input.form-control': function(event) {
    if (event.which === 13) {
      event.preventDefault();
      var query = event.currentTarget.value;
      findMusic(query);
    }
  },
  'click .btn-play': function(e, template) {
    e.preventDefault();
    Session.set("current_track_id", this.id);
    Session.set("current_track", this.permalink_url);

    var playing = Session.get("playing");

    var player = template.find('#player' + this.id);
    console.log(this);
    if (!playing) {
      player.play();
    } else {
      player.pause();

    }
    Session.set("playing", !playing);
  },
  'click .btn-add-track':function (e,template) {
    console.log("====> THIS : ", this);
    var currentPlaylist = PlayList.findOne({owner: Meteor.userId()});
    var playlistId = currentPlaylist._id;
    var t  = {
      soundcloud_id: this.id,
      artwork: this.artwork_url,
      title: this.title,
      playlist_id: playlistId,
      uri: this.uri,
      owner:Meteor.userId(),
      score:0
    };

    Meteor.call("add_track",t);

    Bert.alert("Track: " + this.title  + " added to your playlist.");
  },
  'click .btn-delete-playlist':function(e,template){

    if(confirm("Are you sure want to remove: \n" + this.name)){
      Meteor.call("delete_playlist",this._id);
      Bert.alert("Playlist: " + this.name + " removed from your collection.");
    }

  }
});


Template.index.helpers({
  isCurrentTrack: function(id) {
    var current_track = Session.get("current_track");
    return (current_track === id) ? true : false;
  },
  getPlayList: function() {
    return PlayList.findOne();
  },
  tracks: function() {
    return Session.get("tracks");
  },
  button_state: function(id) {
    var playing = Session.get("playing");
    var current_track = Session.get("current_track_id");
    return (playing && (current_track === id)) ? "pause" : "play";
  },
  current_track: function() {
    return Session.get("current_track");
  },
  getSource:function(uri){
    // adding production client_id here
    return uri + "/stream?client_id=9d89feee299c63a4528347005516a1a8";
  },
  current_album_art:function(url){
    return url || "/default_cover.jpg";
  },
  playlists:function(){
    return PlayList.find().fetch();
  }
});


Meteor.methods({
    'add_track': function(t){
        Tracks.insert(t);
        console.log("===> inserted", Tracks.findOne(t));
    }
});