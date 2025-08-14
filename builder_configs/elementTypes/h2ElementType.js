import {elementTypes} from '@vueform/builder';

export default {
    ...elementTypes.h2,
    category: 'static',
    schema: {
        ...elementTypes.h2.schema,
        builder: {
            resize: false,
        },
    },
}