import VuexModelObject, { TYPE } from 'vuex-model-template';
import ArticleService from 'services/article';

let persistedField = (type, defaultValue) => {
    return {
        type: type,
        defaultValue: defaultValue
    };
};

let transientField = (type, defaultValue) => {
    return {
        type: type,
        defaultValue: defaultValue,
        transient: true
    };
};

let dirtyCorollary = {
    corollary() {
        this.actions.dirty.set(true);
    }
};

const ARTICLE_TEMPLATE = {
    id: {
        ...persistedField(TYPE.String),
        ...dirtyCorollary
    },
    content: {
        ...persistedField(TYPE.Complex),
        ...dirtyCorollary,

        properties: {
            title: {
                ...persistedField(TYPE.String),
                ...dirtyCorollary
            },
            subTitle: {
                ...persistedField(TYPE.String),
                ...dirtyCorollary
            },
            text: {
                ...persistedField(TYPE.String),
                ...dirtyCorollary
            },
            references: {
                ...persistedField(TYPE.Array, []),
                ...dirtyCorollary,
                items: {
                    ...persistedField(TYPE.Object),
                    ...dirtyCorollary,
                    serialize(item) {
                        return item.id;
                    },
                    deserialize(id) {
                        if (this.resolveReferences) {
                            return ArticleService.get(id).then(rawData => {
                                return new Article.hydrate(rawData);
                            });
                        } else {
                            return { id: id };
                        }
                    }
                }
            },
            year: {
                ...persistedField(TYPE.Number),
                ...dirtyCorollary
            }
        }
    },
    dirty: {
        ...transientField(TYPE.Boolean, false)
    },
    resolveReferences: {
        ...transientField(TYPE.Boolean, false)
    }
};

const ARTICLE_MODULE = {
    // save({ }, [target]) {
    //     return ArticleService.save(target).then(result => {
    //         return target.actions.dirty.set(false).then(() => result);
    //     });
    // }
};

export default class Article extends VuexModelObject {
    constructor(data) {
        super(data, ARTICLE_TEMPLATE, ARTICLE_MODULE);
    }

    static hydrate(rawData) {
        return VuexModelObject.hydrate(rawData, ARTICLE_TEMPLATE).then(data => {
            return new Article(data);
        });
    }
}