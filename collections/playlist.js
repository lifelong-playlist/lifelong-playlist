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
  "name":{
    type:String,
    label:"Name of the Playlist"
  },
  "description":{
    type:String,
    label:"Brief description about the playlist."
  },
  "default":{
    type:Boolean,
    label:"Set as Default playlist"
  },
  "owner": {
    type: String,
    label: "The ID of the owner of this document."
  }
});

PlayList.attachSchema( PlayListSchema );
