const { app, BrowserWindow} =  require('electron')

function createWindow () {
  const Window = new BrowserWindow({
      fullscreen:true,
      kiosk:true,
      backgroundColor: "#121212",
      webPreferences:{
        nodeIntegration: true,
        contextIsolation: false
      }
  })
  Window.webContents.openDevTools()
  Window.loadFile("./index.html")
}
app.whenReady().then( () => {
  createWindow()
})