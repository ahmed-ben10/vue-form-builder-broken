export default {
    properties: {
        type: true,
        name: false,
        label: true,
        tooltip: false,
        placeholder: {
            floating: false,
        },
        description: true,
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
    options: {
        autogrow: false,
        rows: false,
    },
    data: {
        default: false,
        submit: false,
    },
    validation: {
        fieldName: false,
    },
    attributes: {
        disabled: false,
        readonly: false,
        id: false,
        autocomplete: false,
        attrs: false,
    },
};