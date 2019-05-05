const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');
const TMP_DIR = './tmp';

const createWindow = () => {
  let win = new BrowserWindow({
    width: 19200,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile(__dirname + '/index.html');

  win.on('closed', () => {
    win = null;

    fs.readdir(TMP_DIR, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        if (file.match(/.*.mid$/)) {
          fs.unlink(path.join(TMP_DIR, file), (err) => {
            if (err) throw err;
          });
        }
      }
    });
  });
};

app.on('ready', createWindow);
