let startup = () => {
  _setBrowserPolicies();
  _generateAccounts();
  _loadServiceConfiguration();
};

var _setBrowserPolicies = () => {};

var _generateAccounts = () => Modules.server.generateAccounts();

var _loadServiceConfiguration = () => Modules.server.loadServiceConfiguration();

Modules.server.startup = startup;
