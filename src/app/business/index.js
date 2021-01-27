const facade = require("./core/facade");
const pipeline = require("./core/pipeline");

const globals = {
};

const actions = {
};

const businessFacade = facade(actions, globals);

module.exports = businessFacade;
