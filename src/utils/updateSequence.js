// @ts-nocheck

const getMostRecentFileName = require('./getMostRecentFileName');
const { urlToNoteSequence } = require('@magenta/music');

const updateSequence = async () => {
  const filename = getMostRecentFileName('./tmp');
  const sequence = await urlToNoteSequence(__dirname + '/../../tmp/' + filename);
  globalVars.sequence = sequence;
};

module.exports = updateSequence;
