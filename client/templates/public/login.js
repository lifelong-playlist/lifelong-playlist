Template.login.onRendered( () => {
  Modules.client.login( { form: "#login", template: Template.instance() } );
});

Template.login.events({
  'submit form': ( event ) => event.preventDefault(),
    'click #connect-with-soundcloud': event => Meteor.loginWithSoundcloud()
});
