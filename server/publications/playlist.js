Meteor.publish('playlists',function(){
	return   PlayList.find();
});


//Meteor.publish('playlist',function(id){
//  check(id,String);
//  return PlayList.find( { _id:id,'owner': this.userId } );
//});
