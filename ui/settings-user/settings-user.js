import {$qs, stateModal} from "../Utils.js";

class SettingsUser {
    constructor() {
        this.event()
    }

    event() {
        this.eventEditSetting()
        this.eventSaveSetting()
        this.eventEditAvatar()
        this.eventDownloadAvatar()
    }

    eventSaveSetting() {
        const $button = $qs('.modal-edit-settings__button-save')

        if ($button) {
            $button.addEventListener('click', this.saveSetting.bind(this))
        }
    }

    eventEditSetting() {
        const $settings = $qs('.settings-user__main')

        if ($settings) {
            $settings.addEventListener('click', this.editSettings.bind(this))
        }
    }

    eventEditAvatar() {
        const $button = $qs('.settings-user__button-edit-avatar')

        if ($button) {
            $button.addEventListener('click', this.editAvatar.bind(this))
        }
    }

    eventDownloadAvatar() {
        const $input = $qs('.settings-user__input[name="avatar"]')

        if ($input) {
            $input.addEventListener('change', this.downloadAvatar.bind(this))
        }
    }

    editSettings(e) {
        const $buttonEdit = e.target

        if ($buttonEdit.dataset.name) {
            stateModal('.modal-edit-settings', 'show')
            this.addDataEditInput($buttonEdit.dataset.name)
        }
    }

    addDataEditInput(name) {
        const $input = $qs('.modal-edit-settings__input')

        $input.name = name
    }

    saveSetting() {
        const $input = $qs('.modal-edit-settings__input')
        //stateModal('.modal-edit-settings', 'hide')
    }

    editAvatar() {
        const $file = $qs('.settings-user__input[name="avatar"]')

        if ($file) {
            $file.click()
        }
    }

    downloadAvatar() {
        const $file = $qs('.settings-user__input[name="avatar"]')
        console.log($file.files[0])
    }

}

new SettingsUser()