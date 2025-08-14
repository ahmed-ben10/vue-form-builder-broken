import {elementTypes} from '@vueform/builder';
import {ItemsField_simple} from '@vueform/builder/presets/simple';

export default {
    ...elementTypes.checkboxgroup,
    category: 'fields',
    schema: {
        ...elementTypes.checkboxgroup.schema,
        builder: {
            resize: false,
        },
        items: ['Optie 1', 'Optie 2', 'Optie 3'],
    },
    sections: {
        ...elementTypes.checkboxgroup.sections,
        data: {
            name: 'data',
            label: 'simple_section_options',
            fields: {
                items: { type: ItemsField_simple, },
            },
        },
    }
}