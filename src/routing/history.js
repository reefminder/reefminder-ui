import { hashHistory } from 'react-router';

const history = hashHistory;

export const push = function() {
    history.push.apply(null, arguments);
};

export const replace = function() {
    history.replace.apply(null, arguments);
};

export default {
    push, replace
};