
export const fail = message => {
    if (_.isUndefined(message) || _.isEmpty(message)) {
        expect('You need to pass a custom message for the fail function!').toBeUndefined();
    }
    expect(message).toBeUndefined();
};

export default {
    fail
};