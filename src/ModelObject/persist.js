import _ from 'lodash';
import TYPE from 'enumerations/type';

export default function persist(target, template) {
    _.forOwn(template, (property, key) => {
        if (property.transient) {
            return;
        }

        if (property.type === TYPE.Object) {
            target[key] = this[key];
        } else if (property.type === TYPE.Complex) {
            if (this[key]) {
                target[key] = this[key]::persist({}, property.properties);
            }
        } else if (property.type === TYPE.ModelObject) {
            if (_.isFunction(property.transform)) {
                target[key] = property.transform(this[key]);
            }
        } else {
            target[key] = this[key];
        }
    });

    return target;
}