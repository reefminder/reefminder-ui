import { PropTypes } from 'react';
import _ from 'lodash';

export const childContext = propertiesForChildren => {
    return function (target) {
        if (!propertiesForChildren || !Object.keys(propertiesForChildren).length) {
            throw new Error('Please provide a hash map of child context parameters');
        }

        makeAllPropertiesForChildrenRequired(target, propertiesForChildren);

        target.prototype.getChildContext = function () {
            const childContext = {};

            _.forOwn(propertiesForChildren, (value, key) => {
                childContext[key] = value;
                if (_.isFunction(value)) {
                    childContext[key] = value(this.props, this.context);
                }
            });

            return childContext;
        };
    };
};

const makeAllPropertiesForChildrenRequired = (target, propertiesForChildren) => {
    target.childContextTypes = {};
    Object.keys(propertiesForChildren).forEach(childContextName => {
        target.childContextTypes[childContextName] = PropTypes.any.isRequired;
    });
};