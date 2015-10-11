Meteor.publish("playlist-tracks",function(id){
  check(id,String);
  return Tracks.find({playlist_id:id,owner:this.userId},{sort:{score:-1}});
});
