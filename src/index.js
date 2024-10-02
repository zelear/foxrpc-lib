'use strict';

const util = require('./util');
const { getIPCPath, getIPC } = require('./transports/ipc');

module.exports = {
  Client: require('./client'),
  getIPCPath,
  getIPC,
  register(id) {
    return util.register(`discord-${id}`);
  },
};
