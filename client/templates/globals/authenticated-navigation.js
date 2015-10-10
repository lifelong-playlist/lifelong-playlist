Template.authenticatedNavigation.helpers({
    displayCurrentUser: () => {
        let currentUser = Meteor.user();
        let displayEntity = {};
        if (currentUser && currentUser.services && currentUser.services.soundcloud) {
            displayEntity.name = currentUser.services.soundcloud.username;
            displayEntity.avatar = currentUser.services.soundcloud.avatar_url;
        } else {
            let email = currentUser.emails[0].address;
            displayEntity.name = email;
            displayEntity.avatar = `http://api.adorable.io/avatars/40/${email}.png`
        }
        return displayEntity;
    }
})