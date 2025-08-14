import {elementTypes} from '@vueform/builder';

export default {
    ...elementTypes.textarea,
    category: 'fields',
    schema: {
        ...elementTypes.textarea.schema,
        builder: {
            resize: false,
        },
    },
}