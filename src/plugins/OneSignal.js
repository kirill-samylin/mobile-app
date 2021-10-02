import ClassControl from './ClassControl';
export default class OneSignal extends ClassControl {
    init(key) {
        if (this._isKey(key)) {
            return new Promise((resolve) => {
                this._call(resolve);
                const plugin = window.plugins.OneSignal;
                plugin
                    .startInit(key)
                    .inFocusDisplaying(plugin.OSInFocusDisplayOption.Notification)
                    .endInit();
                plugin.getIds((user)=>{
                    if (user.userId) {
                        resolve({ onesignal_id: user.userId });
                    }
                });
              
            })
        } else {
            return Promise.resolve({});
        }
    }
    sendTag(pid) {
        window.plugins.OneSignal.sendTag("pid", pid);
    }
}