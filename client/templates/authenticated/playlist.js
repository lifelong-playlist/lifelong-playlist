Template.playlist.created = function() {
  Session.setDefault("playing", false);
};

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
Template.playlist.events({
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
    Session.set("current_track_id", this._id);
    Meteor.call("update_score",this._id);
    Session.set("current_track", this.uri);

    var playing = Session.get("playing");

    var player = template.find('#player');

    var btn = $(e.currentTarget);
    $('li').removeClass('active');
    btn.parents('li').addClass('active');

    if (!playing) {
      player.play();
    } else {
      player.pause();

    }
    Session.set("playing", !playing);
  },
  'click .btn-add-track':function (e,template) {
    var t  = {
      soundcloud_id: this.id,
      artwork: this.artwork_url || "/default_cover.jpg",
      title: this.title,
      uri:this.uri,
      owner:Meteor.userId(),
      playlist_id:Session.get("current_playlist"),
      score:0
    };
    $(e.currentTarget).addClass('disabled');
    var icon = $(e.currentTarget).find('i');
    icon.removeClass('glyphicon-plus').addClass('glyphicon-ok');
    Meteor.call("new_track",t);

    Bert.alert("Track: " + this.title  + " added to your playlist.");
  },
  'click .btn-delete-track':function(e,template){

    if(confirm("Are you sure want to remove: \n" + this.title)){
      Meteor.call("delete_track",this._id);
      Bert.alert("Track: " + this.title + " removed from your playlist.");
    }

  }
});

Template.playlist.helpers({

  isCurrentTrack: function(id) {
    var current_track = Session.get("current_track");
    return (current_track === id) ? true : false;
  },

  tracks: function() {
    return Session.get("tracks");
  },
  tracks_in_playlist:function(){
    return Tracks.find({playlist_id:Session.get("current_playlist")},{sort:{score:-1}}).fetch();
  },
  button_state: function(id) {
    var playing = Session.get("playing");
    var current_track = Session.get("current_track_id");
    return (playing && (current_track === id)) ? "pause" : "play";
  },
  current_track: function() {
    // adding production client_id here
    return Session.get("current_track") + "/stream?client_id=9d89feee299c63a4528347005516a1a8";
  },
  getSource:function(uri){

    return uri + "/stream?client_id=9d89feee299c63a4528347005516a1a8";
  },
  current_album_art:function(url) {
      return url || "/default_cover.jpg";
  },
  getPlayList:function(){
      var currentUser = Meteor.userId();
      var PL = PlayList.findOne({owner: currentUser});
      return PL;

  }
});
