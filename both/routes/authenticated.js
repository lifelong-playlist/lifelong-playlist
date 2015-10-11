const authenticatedRedirect = () => {
  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    FlowRouter.go( 'login' );
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ authenticatedRedirect ]
});

authenticatedRoutes.route( '/', {
  name: 'index',
  action() {
    Meteor.subscribe('playlist-tracks');
    BlazeLayout.render( 'default', { yield: 'index' } );
  }
});


authenticatedRoutes.route( '/playlist', {
  name: 'playlist',
  action() {
    Meteor.subscribe('playlists');
    BlazeLayout.render( 'default', { yield: 'playlist' } );
  }
});

authenticatedRoutes.route( '/playlists', {
  name: 'playlists',
  action() {
    Meteor.subscribe('playlists');
    BlazeLayout.render( 'default', { yield: 'playlists' } );
  }
});


authenticatedRoutes.route( '/playlist/:id', {
  name: 'playlist',
  action(params) {
    Session.set("current_playlist",params.id);
    Meteor.subscribe('playlist',params.id);
    Meteor.subscribe('playlist-tracks',params.id);
    BlazeLayout.render( 'default', { yield: 'playlist' ,content:'currentPlayList'} );
  }
});
