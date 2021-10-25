const rewireYarnWorkspaces = require("react-app-rewire-yarn-workspaces")

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    return rewireYarnWorkspaces(config, env);
}