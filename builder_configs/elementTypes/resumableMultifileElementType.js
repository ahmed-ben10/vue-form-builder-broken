import {elementTypes} from '@vueform/builder';

export default {
    ...elementTypes.multifile,
    label: 'multifile_label',
    description: 'multifile_description',
    icon: ['fas', 'copy'],
    category: 'fields',
    schema: {
        ...elementTypes.multifile.schema,
        type: 'resumable_multifile',
        label: 'multifile_field_label'
    },
    sections: {
        properties: elementTypes.multifile.sections.properties,
        validation: elementTypes.multifile.sections.validation,
        conditions: elementTypes.multifile.sections.conditions
    },
    separators: {
        properties: elementTypes.multifile.separators.properties,
        validation: elementTypes.multifile.separators.validation
    }
};