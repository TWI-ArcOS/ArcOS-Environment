async function switchControlPanelPage(pageFile) {
    let controlPanelContent = document.getElementById("controlPanelContent");
    fs.readFile(pageFile, 'utf8', (error, data) => {
        if (error) {
            errorLogic.sendError(`Unable to open settings applet`, `The settings applet specified is invalid. Please check the path to the applet and try again.<br><br>Details: ` + error)
        } else {
            controlPanelContent.classList.add("slide-out-right");
            setTimeout(() => {
                controlPanelContent.innerHTML = data;    
                controlPanelContent.classList.remove("slide-out-right");
            }, 700);
            try {
                let userData = getCurrentUserData();

                document.getElementById("preferencesAnimationsSwitch").checked = userData.enableAnimations;
                document.getElementById("preferencesTaskbarButtonLabelsSwitch").checked = !userData.noTaskbarButtonLabels;
                document.getElementById("preferencesTitlebarButtonsSwitch").checked = userData.titlebarButtonsLeft;
                document.getElementById("preferencesSmallStartSwitch").checked = userData.smallStart;
                document.getElementById("preferencesCenteredTaskbarButtonsSwitch").checked = userData.centeredTaskbarButtons;

                onloadLogic.loadTitlebarButtonPos();
                onloadLogic.setStartMenuSize();
                onloadLogic.setTaskbarButtonLocation();
            } catch (e) {}
        }
    })
}

async function openSettingsPane(name, buttonNode) {
    for (let i = 0; i < document.getElementsByClassName(`controlPanelSidebar`).length; i++) {
        document.getElementsByClassName(`controlPanelSidebar`)[i].classList.remove(`active`);
    }
    switch (name) {
        case `home`:
            switchControlPanelPage(path.join(__dirname, `system/applications/programdata/settings/inline/home.inline`));
            break;
        case `user`:
            switchControlPanelPage(path.join(__dirname, `system/applications/programdata/settings/inline/user.inline`));
            break;
        case `personalize`:
            switchControlPanelPage(path.join(__dirname, `system/applications/programdata/settings/inline/personalize.inline`));
            break;
        case `addapp`:
            switchControlPanelPage(path.join(__dirname, `system/applications/programdata/settings/inline/addapp.inline`));
            break;
        case `profpicsel`:
            switchControlPanelPage(path.join(__dirname, `system/applications/programdata/settings/inline/profilePictureSelector.inline`));
            break;
        case `manusers`:
            switchControlPanelPage(path.join(__dirname, `system/applications/programdata/settings/inline/manageOtherUsers.inline`));
            break;
        case `manacc`:
            switchControlPanelPage(path.join(__dirname, `system/applications/programdata/settings/inline/manageProfile.inline`));
            break;
        case `about`:
            switchControlPanelPage(path.join(__dirname, `system/applications/programdata/settings/inline/about.inline`));
            break;
        case 'updates':
            if (process.platform == "win32") {
                await switchControlPanelPage(path.join(__dirname, 'system/applications/programdata/settings/inline/noupdates.inline'));
            } else {
                await switchControlPanelPage(path.join(__dirname, 'system/applications/programdata/settings/inline/updates.inline'));
            }
            break;
    }
    try { buttonNode.classList.add(`active`); } catch {}

}