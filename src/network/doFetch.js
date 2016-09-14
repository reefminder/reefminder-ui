import _ from 'lodash';

export const DEFAULT_OPTS = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
};

export default (path, options) =>
{
    const opts = _.assign({}, DEFAULT_OPTS, options);

    if (!_.isUndefined(opts.body)) {
        opts.body = JSON.stringify(opts.body);
    }

/*    return new Promise((resolve, reject) => {
        fetch(path, opts).then(function (response) {
            return response;
        }).catch(function (err) {
            // Error :(
        });
    });*/
};
