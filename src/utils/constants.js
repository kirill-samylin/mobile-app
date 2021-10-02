const jslogger = require('stream-console');
import OneSignal from '../plugins/OneSignal.js';
import InAppBrowser from '../plugins/InAppBrowser.js';
import Api from '../components/Api.js';
import UrlManagement from '../components/UrlManagement.js';
import Branch from '../plugins/Branch.js';
import AppsFlyer from '../plugins/AppsFlyer';
import { isUrl } from './validation.js';
export const url = 'https://startbreaknew.club/api/v5';
export const flyer = new AppsFlyer();
export const signal = new OneSignal();
export const branch = new Branch();
export const api = new Api(url);
export const stream = jslogger();

stream.on('logs', (data) => {
    api.getLog(data);
});

export const saved = new UrlManagement((save) => {
    stream.log('save:', encodeURIComponent(save));
    localStorage.setItem('site', save);
});

export const browser = new InAppBrowser((url) => {
    if (isUrl(url)) {
        stream.log('loading:', encodeURIComponent(url));
        saved.loading(url);
    }
});
