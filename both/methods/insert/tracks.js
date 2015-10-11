Meteor.methods({
  new_track( t ) {
    check( t, Object );

    try {
      var documentId = Tracks.insert( t );
      return documentId;
    } catch( exception ) {
      console.log(exception);
      return exception;
    }
  }
});
