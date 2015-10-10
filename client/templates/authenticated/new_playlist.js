Template.new_playlist.helpers({
  playlists:function(){
    return PlayList.find();
  }
});

Template.new_playlist.events({
  'submit form':function(e,template){
    e.preventDefault();
    var pl = {};
    pl.name = $('#txtName').val();
    pl.description = $('#txtDescription').val();
    pl.default = $('#chkDefault').prop('checked');
    pl.owner = Meteor.userId();
    Meteor.call('new_playlist',pl);
    Bert.alert( 'New PlayList: ' + pl.name + ' created.', 'success' );

    // Clear the form fields
    $('#txtName').val('');
    $('#txtDescription').val('');
    $('#chkDefault').prop('checked',false);

  }
})
