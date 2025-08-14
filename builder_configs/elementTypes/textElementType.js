import {elementTypes} from '@vueform/builder';

export default {
    ...elementTypes.text,
    category: 'fields',
    schema: {
        ...elementTypes.text.schema,
        builder: {
            resize: false,
        },
    },
}