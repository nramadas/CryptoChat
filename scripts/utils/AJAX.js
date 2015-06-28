import Qwest from "../lib/Qwest";

let AJAX = {};
let methods = ["get", "post", "put", "delete"];

for (let index in methods) {
    let method = methods[index];
    AJAX[method] = function() {
        let args = arguments;
        return new Promise((resolve, reject) => {
            Qwest[method].apply(Qwest, args).then((response) => {
                resolve(response);
            }).catch((e, response) => {
                if (!response) { response = {}; }
                reject({msg: e, errors: response.errors});
            });
        });
    };
};

export default AJAX;
