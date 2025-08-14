import {elementTypes} from '@vueform/builder';

export default {
    ...elementTypes.h3,
    category: 'static',
    schema: {
        ...elementTypes.h3.schema,
        builder: {
            resize: false,
        },
    },
}