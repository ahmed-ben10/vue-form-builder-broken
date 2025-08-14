export default {
    properties: {
        type: true,
        name: false,
        inputType: false,
        label: true,
        tooltip: false,
        placeholder: {
            floating: false,
        },
        description: true,
    },
    data: {
        default: false,
        submit: false,
    },
    decorators: {
        addons: false,
        before: false,
        between: false,
        after: false,
    },
    layout: {
        size: false,
        columns: false,
    },
    validation: {
        fieldName: false,
    },
    conditions: {
        conditions: true,
    },
    attributes: {
        disabled: false,
        readonly: false,
        id: false,
        autocomplete: false,
        attrs: false,
    },
};