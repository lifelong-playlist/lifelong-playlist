let loadSoundCloudConfiguration = settings => {
    ServiceConfiguration.configurations.upsert(
        {service: "soundcloud"},
        {
            $set: {
                clientId: settings.soundcloud.clientId,
                secret: settings.soundcloud.secret,
                loginStyle: "popup"
            }
        }
    );
};

let loadServiceConfiguration = () => {
    let environment = process.env.NODE_ENV;
    console.info(`Current environment: ${environment}`);
    console.info('Loading tokens...');
    let settings = Meteor.settings[environment];

    loadSoundCloudConfiguration(settings);
}

Modules.server.loadServiceConfiguration = loadServiceConfiguration;