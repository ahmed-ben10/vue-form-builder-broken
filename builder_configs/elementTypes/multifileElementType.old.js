import {elementTypes} from '@vueform/builder';

export default {
    ...elementTypes.multifile,
    category: 'fields',
    schema: {
        ...elementTypes.multifile.schema,
        builder: {
            resize: false,
        },
        drop: true,
        clickable: false,
    },
};