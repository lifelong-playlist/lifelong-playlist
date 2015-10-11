

Meteor.loginWithSoundcloud();


Template.playlist.helpers({
  getPlayList:function() {
  		var currentUser = Meteor.userId();
  		var PL = PlayList.findOne({owner: currentUser});
        return PL;
        }
});
