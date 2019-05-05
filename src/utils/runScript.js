const { spawn } = require('child_process');

// Run shell script to generate songs
const runScript = (filename) =>
  new Promise((resolve, reject) => {
    const childProcess = spawn(`chmod a+rx ${filename} && ./${filename}`, [], { shell: true });
    childProcess.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    childProcess.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    childProcess.on('close', (code) => {
      if (code == 0) {
        resolve(code);
        return;
      }
      reject();
    });
  });

module.exports = runScript;
