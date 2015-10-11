PlayList = new Meteor.Collection( 'playlist' );

PlayList.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

PlayList.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let PlayListSchema = new SimpleSchema({
  "owner": {
    type: String,
    label: "The ID of the owner of this document."
  }
});

PlayList.attachSchema( PlayListSchema );


