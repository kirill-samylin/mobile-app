export default function appMetrica(apiKey, status) {
    if (apiKey && status) {
        const options = { apiKey, locationTracking: true, handleFirstActivationAsUpdate: status, sessionTimeout: 15 };
        window.appMetrica.activate(options);
    }
}