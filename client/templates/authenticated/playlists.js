Template.playlists.helpers({
  getPlayLists:function(){
  		var currentUser = Meteor.userId();
  		var PL = PlayList.find({"_id": {$not: currentUser}});
        return PL;
  }
});
