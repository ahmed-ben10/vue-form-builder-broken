import {elementTypes} from '@vueform/builder';

export default {
    ...elementTypes.container,
    category: 'fields',
    schema: {
        ...elementTypes.container.schema,
        label: 'Section',
        builder: {
            resize: false,
        },
    },
}