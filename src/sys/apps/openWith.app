<div class="window" id="Open With" onclick="windowLogic.bringToFront(this);">
    <div class="windowTitle" onclick="windowLogic.bringToFront(parentNode);">
        <p class="titleText">Open With</p>
        <button onclick="windowLogic.closewindow(this.parentNode.parentNode);" class="title close"><span
                class="material-icons">close</span></button>
    </div>
    <div class="body" onclick="windowLogic.bringToFront(parentNode);">
        <p>Open this file: </p>
        <input class="fullWidth" id="openWithFileInput">
        <br>
        <p>With this application:</p>
        <button class="fullWidth folder big openWith"
            onclick="windowLogic.closewindow(document.getElementById('Open With'));openWithNotepad(document.getElementById('openWithFileInput').value);">
            <img src="./../img/notepad.svg">
            &nbsp;&nbsp;Notepad
        </button>
        <button class="fullWidth folder big openWith"
            onclick="windowLogic.closewindow(document.getElementById('Open With'));executeECS(document.getElementById('openWithFileInput').value);">
            <img src="./../img/execute command.svg">
            &nbsp;&nbsp;Execute Command Shortcut Executer
        </button>
        <button class="fullWidth folder big openWith"
            onclick="windowLogic.closewindow(document.getElementById('Open With'));windowLogic.loadWindow(document.getElementById('openWithFileInput').value,0);">
            <img src="./../img/addappicon.svg">
            &nbsp;&nbsp;Application Loader
        </button>
        <button class="fullWidth folder big openWith"
            onclick="windowLogic.closewindow(document.getElementById('Open With'))">
            <img src="./../img/errormessage.svg">
            &nbsp;&nbsp;Cancel
        </button>
    </div>
</div>

<link rel="stylesheet" href="./../apps/openWith.css">