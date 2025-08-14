export default {
    properties: {
        type: true,
        name: false,
        label: true,
        tooltip: false,
        description: true,
    },
    layout: {
        align: false,
        size: false,
        columns: false,
    },
    options: {
        text: true,
        boolValue: false,
    },
    validation: {
        validation: {
            different: false,
            in: false,
            not_in: false,
            required: true,
            same: false,
        },
    },
};