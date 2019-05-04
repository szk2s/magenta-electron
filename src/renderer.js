const { PythonShell } = require('python-shell');
const path = require('path');
const PYTHON_DIR = './src/python';
const globalVars = {
  song: null
}

const genSong = () => {
  console.log('Generating song...');

  const options = {
    mode: 'text',
    pythonPath: './venv/bin/python',
    args: ['hello', 'I am satoshi'],
  };

  // @ts-ignore
  PythonShell.run(path.join(PYTHON_DIR, 'hello.py'), options, (err, output) => {
    if (err) throw err;
    console.log('results', output);
  });
};

document.getElementById('generate-button').addEventListener('click', genSong);
