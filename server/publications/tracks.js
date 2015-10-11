Meteor.publish("playlist-tracks",function(){
  return Tracks.find({owner:this.userId},{sort:{score:-1}});
});
