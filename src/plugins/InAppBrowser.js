export default class InAppBrowser {
    constructor(handle) {
        this._status = false;
        this._time = null;
        this._handleLoadPage = handle;
        this._loadUrl = '';
    }
    _timeout() {
        if (this._page) {
            if (this._status) {
                this._page.show();
                clearInterval(this._time);
            } else { 
                this._page.hide();
                this._time = setTimeout(() => {
                    if (!this._status) this._page.show();
                }, 3000);
            }
        }
    }
    _load({ url }) {
        this._status = false;
        this._timeout();
        if (this._page && this._loadUrl!==url) {
            this._loadUrl = url;
            this._handleLoadPage(url);
        }
    }
    _stop() {
        this._status = true;
        this._timeout();
    }
    _setEvent() {
        this._page.addEventListener('loadstart', this._load.bind(this));
        this._page.addEventListener('loadstop', this._stop.bind(this));
    }
    open(link, target, options) {
        this._page = null;
        this._page = cordova.InAppBrowser.open(link, target, options);
        this._setEvent();
    }
}