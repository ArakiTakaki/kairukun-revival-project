import { app, BrowserWindow, screen } from 'electron';
import { resolve } from 'path';
console.log(process.env.NODE_ENV);

// window.gcをonにする
app.commandLine.appendSwitch('js-flags', '--expose-gc');

app.on('window-all-closed',function(){
  if(process.platform !== 'darwin'){
    app.quit();
  }
});

app.on('ready',function(){
  const { width, height } = screen.getPrimaryDisplay().size;
  const mainWindow = new BrowserWindow({ 
    x: 0,
    y: 0, 
    width: width,
    height: height,
    show: true,
    frame: false,
    transparent: true,
    resizable: false,
  });

  switch(process.env.NODE_ENV) {
    case 'development':
      mainWindow.loadURL('http://localhost:8181');
      break;
    case 'production': 
    default:
      mainWindow.loadFile(resolve(__dirname, '../out/index.html'));
      break;
  }
  mainWindow.setMenu(null);
  mainWindow.setIgnoreMouseEvents(true);
  mainWindow.setAlwaysOnTop(true);

  mainWindow.on("closed" ,function(){
  	app.quit();
  });
});

