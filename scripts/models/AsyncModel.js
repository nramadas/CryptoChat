import AJAX from "../utils/AJAX";

class AsyncModel {
    static fetch(params) {
        let {ENDPOINT} = this.prototype;
        let p = AJAX.post(ENDPOINT, params)
        return new this(p);
    }

    constructor(initialPromise) {
        let self = this;
        let currentPromise = initialPromise;
        let currentObjectDescription = {};
        let stateSyncTimer = null;
        let isDeleted = false;

        let createProperty = (property) => {
            Object.defineProperty(self, property, {
                get: () => {
                    return currentPromise.then((objectDescription) => {
                        currentObjectDescription = objectDescription;
                        return currentObjectDescription;
                    });
                },

                set: (newValue) => {
                    currentPromise = currentPromise.then(() => {
                        currentObjectDescription[property] = newValue;
                        clearTimeout(stateSyncTimer);
                        stateSyncTimer = setTimeout(() => {
                            AJAX.put(self.ENDPOINT, currentObjectDescription);
                        }, 25);
                    });
                }
            });
        };

        for (let index in this.PROPERTIES) {
            let modelProperty = this.PROPERTIES[index];
            createProperty(modelProperty);
        }

        this.remove = () => {
            currentPromise = AJAX.delete(self.ENDPOINT).then(() => {
                isDeleted = true;
                return {};
            });
        };
    }
}

AsyncModel.prototype.PROPERTIES = [];
AsyncModel.prototype.ENDPOINT = "";

export default AsyncModel;
