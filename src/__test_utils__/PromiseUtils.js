import _ from 'lodash';

const createAndResolvePromise = function (data) {
    return {
        then: callback => createAndResolvePromise(callback(data)),
        catch: () => {
        }
    };
};

const createPromise = function () {
    const promise = {
        _callback: null,
        _errCallback: null,
        then: callback => {
            this._callback = callback;
            return promise;
        },
        catch: callback => this._errCallback = callback,
        resolve: data => {
            if (_.isUndefined(this._callback)) {
                throw new Error('Ensure you have called the then function...');
            }

            this._callback(data);
        },
        reject: err => this._errCallback(err)
    };
    return promise;
};

export default {
    createPromise,
    createAndResolvePromise
};
