const electron= require('electron')
const {Menu} = require('electron');
const fs = require('fs')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// const mysql = require("remote").require("mysql");
// const client =mysql.createConnection({
//     user:'root',
//     password:'root'
// })
// client.connect(function () {
//     console.log('连接成功');
// })



// const path = require('path');
// const Datastore = require('nedb');
// const db = {};
// db.dbconfig = new Datastore({filename:`${__dirname}/config/dbconfig`});
// db.dbconfig.loadDatabase(function(err){
//     console.log('载入失败')
// })
//
global.configpath = {
    dbconfig:`${__dirname}/config/dbconfig`,
    templateUrl:`${__dirname}/templates`


};

app.setName('辅助工具')
var menu = new Menu();

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1100, height: 648,fullscreenable :false,resizable:false,autoHideMenuBar:true})

  // and load the index.html of the app.
    if(fs.existsSync('/public/index.js')){
        mainWindow.loadURL(`file://${__dirname}/modules/index.html`)
    }else{
      mainWindow.loadURL('http://localhost:3000')
    }

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.