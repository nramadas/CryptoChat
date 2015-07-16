import AJAX from "../utils/AJAX";

class AsyncModel {
    static fetch(params) {
        let {ENDPOINT} = this;
        let p = AJAX.post(ENDPOINT, params)
        return new this(p);
    }

    static PROPERTIES = {}
    static ENDPOINT = ""
    static KEY = ""

    constructor(initialPromise) {
        let currentPromise = initialPromise;
        let currentObjectDescription = {};
        let stateSyncTimer = null;
        let isDeleted = false;

        let createProperty = (property) => {
            Object.defineProperty(this, property, {
                get: () => {
                    return currentPromise.then((response) => {
                        currentObjectDescription = response[this.constructor.KEY];
                        let responseValue = currentObjectDescription[property];
                        let type = this.constructor.PROPERTIES[property];
                        return type(responseValue);
                    });
                },

                set: (newValue) => {
                    currentPromise = currentPromise.then(() => {
                        currentObjectDescription[property] = newValue;
                        clearTimeout(stateSyncTimer);
                        stateSyncTimer = setTimeout(() => {
                            AJAX.put(this.constructor.ENDPOINT, currentObjectDescription);
                        }, 25);
                    });
                }
            });
        };

        for (let modelProperty in this.constructor.PROPERTIES) {
            createProperty(modelProperty);
        }

        this.remove = () => {
            currentPromise = AJAX.delete(this.constructor.ENDPOINT).then(() => {
                isDeleted = true;
                return {};
            });
        };
    }
}

export default AsyncModel;
