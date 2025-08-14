import {elementTypes} from '@vueform/builder';

export default {
    ...elementTypes.checkbox,
    category: 'fields',
    schema: {
        ...elementTypes.checkbox.schema,
        builder: {
            resize: false,
        },
    },
}