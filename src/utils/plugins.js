import appMetrica from '../plugins/appMetrica.js';
import { branch, signal, flyer } from './constants.js';

export async function getDeeplinks(extra={}, id) {
    const { 
        branch_active=false, 
        activate_send_branch_data=false,
        one_signal_key='',
        apps_flyer_key='',
        activate_send_conversion_data=false,
    } = extra;
    const links = await Promise.all([
        branch.init(branch_active, activate_send_branch_data),
        new Promise((resovle) => facebookConnectPlugin.getDeferredApplink((link) => resovle((link) ? { deeplink_fb: link } : {}))),
        signal.init(one_signal_key),
        flyer.init(apps_flyer_key, activate_send_conversion_data),
        { access_token: id },
    ]);
    const deeplinks = Object.assign(...links);
    deeplinks.deeplink = deeplinks.deeplink_branch || deeplinks.deeplink_fb || '';
    return deeplinks;
}

export function onPlugins({ app_metrica_key, one_signal_key, apps_flyer_key }) {
    appMetrica(app_metrica_key, true);
    signal.init(one_signal_key);
    flyer.init(apps_flyer_key);
}