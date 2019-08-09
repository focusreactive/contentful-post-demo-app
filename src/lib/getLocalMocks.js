const jsonFiles = require.context('../../mocks', false, /\.json$/);

const mocks = jsonFiles.keys().map(file => jsonFiles(file));

console.log('TCL: jsonFiles', mocks);

const byId = id => mock => {
  try {
    return mock.sys.id === id;
  } catch (err) {
    return false;
  }
};

const getLocalMocks = id => mocks.find(byId(id));

module.exports = {
  getLocalMocks,
};
