Meteor.methods({
  new_playlist( p ) {
    check( p, Object );

    try {
      var documentId = PlayList.insert( p );
      return documentId;
    } catch( exception ) {
      console.log(exception);
      return exception;
    }
  }
});
