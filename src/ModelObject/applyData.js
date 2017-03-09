import _ from 'lodash';
import ModelObject from 'ModelObject';
import TYPE from 'enumerations/type';

function validateProperty(template) {
    if (_.isUndefined(this)) {
        return;
    }

    switch (template.type) {
        case TYPE.Any:
            break;
        case TYPE.Array:
            if (!_.isArray(this)) {
                throwError(template.type, this);
            } else {
                _.each(this, item => {
                    item::validateProperty(template.items);
                });
            }
            break;
        case TYPE.Boolean:
            if (!_.isBoolean(this)) {
                throwError(template.type, this);
            }
            break;
        case TYPE.Complex:
            if (!_.isObject(this)) {
                throwError(template.type, this);
            }

            this::validate(template.properties);
            break;
        case TYPE.ModelObject:
            if (this && !(this instanceof ModelObject)) {
                throwError(template.type, this);
            }
            break;
        case TYPE.Number:
            if (!_.isNumber(this)) {
                throwError(template.type, this);
            }
            break;
        case TYPE.Object:
            if (!_.isObject(this)) {
                throwError(template.type, this);
            }
            break;
        case TYPE.String:
            if (!_.isString(this)) {
                throwError(template.type, this);
            }
            break;
        default:
            throw new Error(`unexpected type`);
    }
}

function throwError(type, data) {
    throw new Error(`expected '${type.toString()}' but got '${typeof data}' in '${prefixes.join('.')}'`);
}

let prefixes = [];
function validate(template) {
    let unexpectedProperties = _.difference(
        _.keys(this),
        _.keys(template)
    );

    if (unexpectedProperties.length) {
        throw new Error(`unexpected properties found in '${prefixes.join('.') || 'data'}': '${unexpectedProperties}'`);
    }

    let expectedProperties = _.intersection(
        _.keys(this),
        _.keys(template)
    );

    _.each(expectedProperties, expectedProperty => {
        prefixes.push(expectedProperty);
        this[expectedProperty]::validateProperty(template[expectedProperty]);
        prefixes.splice(-1);
    });
}

function apply(data, template) {
    _.defaults(this, data);

    let defaultProperties = _.difference(
        _.keys(template),
        _.keys(data)
    );

    _.each(defaultProperties, property => {
        if (template[property].type !== TYPE.Complex) {
            this[property] = _.cloneDeep(template[property].defaultValue);
        } else {
            console.log('apply default value to complex type', property);
            this[property] = {};

            let propData = data && data[property];
            this[property]::apply(propData, template[property].properties);
        }
    });
}

export default function(data, template) {
    if (!this) {
        return;
    }

    prefixes = [];
    data::validate(template);
    this::apply(data, template);
}