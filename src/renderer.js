// @ts-nocheck

const mm = require('@magenta/music');
const updateSequence = require('./utils/updateSequence');
const runScript = require('./utils/runScript');

const globalVars = {
  sequence: null,
  player: null,
};

const setup = () => {
  globalVars.player = new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus');
};

const updateVisualizer = () => {
  const { sequence } = globalVars;
  new mm.PianoRollCanvasVisualizer(sequence, document.getElementById('visualizer'));
};

const genVariation = async () => {
  document.getElementById('console').innerHTML = 'Generating variation on Clair De Lune...';
  await runScript('genVariation.sh');
  document.getElementById('console').innerHTML = 'Done!';
  await updateSequence();
  updateVisualizer();
};

const genSongWithC = async () => {
  document.getElementById('console').innerHTML = 'Generating a song which has only "C"...';
  await runScript('genSongWithC.sh');
  document.getElementById('console').innerHTML = 'Done!';
  await updateSequence();
  updateVisualizer();
};

const play = async () => {
  document.getElementById('console').innerHTML = 'Now playing...';
  const { sequence, player } = globalVars;
  if (sequence == null) {
    document.getElementById('console').innerHTML = 'You have not generated any song yet';
    return;
  }
  player.setTempo(78);
  await player.start(sequence);
  document.getElementById('console').innerHTML = 'Thank you!';
};

setup();
document.getElementById('variation-button').addEventListener('click', genVariation);
document.getElementById('only-c-button').addEventListener('click', genSongWithC);
document.getElementById('play-button').addEventListener('click', play);
