const { BrowserWindow, app } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        //Width and height of the window
        width: 800,
        height: 600,
        //Electron shouldn't have direct access to files, so we should use a preload file to load UI/frontend
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }


    })

    win.loadFile('index.html')
}

app.whenReady().then(()=>{
    createWindow();
})

app.on('window-all-closed', () => {
    if(process.platform != 'darwin') app.quit()
})