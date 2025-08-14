import {elementTypes} from '@vueform/builder';

export default {
    ...elementTypes.h1,
    category: 'static',
    schema: {
        ...elementTypes.h1.schema,
        builder: {
            resize: false,
        },
    },
}