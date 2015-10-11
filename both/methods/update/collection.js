Meteor.methods({
  updateMethod( argument ) {
    check( argument, Object );

    try {
      var documentId = Collection.update( argument._id, {
        $set: { 'key': argument.key }
      });
      return documentId;
    } catch( exception ) {
      return exception;
    }
  },

  update_score(id){
    check(id,String);
    try{
      var documentId = Tracks.update({_id:id},{
        $inc:{ score: 1}
      });
      return documentId;
    }catch(exception){
      return exception;
    }
  }
});
