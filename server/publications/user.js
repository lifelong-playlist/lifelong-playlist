//By default the accounts package only publishes the id, username and profile fields.
//We need services and emails as well
Meteor.publish(null, function() {
    if (this.userId != null) {
        return Meteor.users.find({
            _id: this.userId
        }, {
            fields: {
                'services': 1,
                'emails': 1,
            }
        });
    } else {
        return this.ready();
    }
});