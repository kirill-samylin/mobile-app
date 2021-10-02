export default function crypt(data) {
    function random(count) {
        let str = '';
        const symbols = 'abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM0123456789';
        for ( let i=0; i < count; i++ ) {
            str += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }
        return str;
    }
    const cryption = (str) => str.slice(0, 10) + random(4) + str.slice(10);
    return cryption(btoa(JSON.stringify(data)));
}