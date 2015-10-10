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
    BlazeLayout.render( 'default', { yield: 'index' } );
  }
});

authenticatedRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render( 'default', { yield: 'dashboard' } );
  }
});


authenticatedRoutes.route( '/playlists/new', {
  name: 'new_playlist',
  action() {
    Meteor.subscribe('playlists');
    BlazeLayout.render( 'default', { yield: 'new_playlist' } );
  }
});


authenticatedRoutes.route( '/playlist/:id', {
  name: 'playlist',
  action(params) {
    Meteor.subscribe('playlist',params.id);
    BlazeLayout.render( 'default', { yield: 'playlist' ,content:'currentPlayList'} );
  }
});
