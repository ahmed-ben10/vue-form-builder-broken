import {elementTypes, BaseElementField} from '@vueform/builder';
import { cloneDeep } from 'lodash';

const ContentField = class extends BaseElementField {
    name = 'ContentField';

    get schema() {
        return {
            content: {
                type: 'textarea',
                placeholder: this.tags.content_content_placeholder,
                floating: this.tags.content_content_floating,
                presets: ['prop-multiline'],
            },
        };
    }

    save(value, old, key, el$) {
        let update = {};
        let remove = [];

        if (value && value.length) {
            update[key] = value.replace(/\n/g, '<br>');
        } else if (old && old.length) {
            remove.push(key);
        }

        this.update(update, remove);
    }

    load(data) {
        let load = {};

        if (data.content) {
            load.content = data.content.replace(/<br>/g, '\n');
        }

        return load;
    }
};

const p = cloneDeep(elementTypes.p);
p.sections = cloneDeep(elementTypes.html.sections);
p.sections.options.fields.content.type = ContentField;
export default p;