import axios from 'axios';

import { useSettingsStore } from '../stores/settings';

export class NuiProxy {
    static async call(method, parameters) {
        try {
            const response = await axios.post(`https://${GetParentResourceName()}/${method}`, parameters);
            const data     = response.data;

            if (!data || !data.success) {
                return false;
            }

            return data.data || {};
        } catch(err) {
            return false;
        }
    }
}

export function registerCloseHandler() {
    const settings = useSettingsStore();

    document.addEventListener('keydown', (event) => {
        if (!settings.display || event.key !== 'Escape') {
            return;
        }

        settings.close();
    });
}

export function subscribeToNuiEvents() {
    const settings = useSettingsStore();

    window.addEventListener('message', (event) => {
        let eventData = event.data;

        if (eventData.type === 'display') {
            settings.display = eventData.value;
        }
    });
}
