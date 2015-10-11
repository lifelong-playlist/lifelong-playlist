Meteor.methods({
  removeMethod( argument ) {
    check( argument, String );

    try {
      Collection.remove( argument );
    } catch( exception ) {
      return exception;
    }
  },

  delete_track:function(id){
    check(id,String);
    try{
      Tracks.remove({ _id:id});
    } catch(exception){
      console.log(exception);
      return exception;
    }
  },
  delete_playlist:function(id){
    check(id,String);
    try{
      PlayList.remove({ _id:id});
    } catch(exception){
      console.log(exception);
      return exception;
    }
  }
});
