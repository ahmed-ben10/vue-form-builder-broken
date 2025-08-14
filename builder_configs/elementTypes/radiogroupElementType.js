import {elementTypes} from '@vueform/builder';
import {ItemsField_simple} from '@vueform/builder/presets/simple';

export default {
    ...elementTypes.radiogroup,
    category: 'fields',
    schema: {
        ...elementTypes.radiogroup.schema,
        builder: {
            resize: false,
        },
        items: ['Optie 1', 'Optie 2', 'Optie 3'],
    },
    sections: {
        ...elementTypes.radiogroup.sections,
        data: {
            name: 'options',
            label: 'simple_section_options',
            fields: {
                items: { type: ItemsField_simple, },
            },
        },
    }
}