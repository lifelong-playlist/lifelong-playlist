Tracks = new Meteor.Collection( 'tracks' );

Tracks.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Tracks.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let TracksSchema = new SimpleSchema({
  "soundcloud_id":{
    type:String,
    label:"The SoundCloud track id"
  },
  "artwork":{
    type:String,
    label:"Artwork url"
  },
  "title":{
    type:String,
    label:"Album title"
  },
  "playlist_id":{
    type:String,
    label:"Playlist id"
  },
  "uri":{
    type:String,
    label:"SoundCloud uri"
  },
  "owner": {
    type: String,
    label: "The ID of the owner of this document."
  },
  score:{
    type:Number,
    label:"the Track score"
  }
});

Tracks.attachSchema( TracksSchema );
