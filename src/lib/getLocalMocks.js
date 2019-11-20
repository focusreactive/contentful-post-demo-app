let mocks = [];

try {
  const jsonFiles = require.context('../../mocks', false, /\.json$/);
  mocks = jsonFiles.keys().map(file => jsonFiles(file));
} catch (err) {
  console.warn(err);
}

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
