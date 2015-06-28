export default function* objIterate(obj) {
    for (let key of Object.keys(obj)) {
        yield {key: key, value: obj[key]};
    }
};
