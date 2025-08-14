export default {
    properties: {
        type: false,
        name: false,
        label: true,
        tooltip: false,
        description: true,
    },
    data: {
        items: {
            list: true,
            json: false,
            endpoint: false,
        },
        default: false,
        submit: false,
    },
    layout: {
        view: false,
        size: false,
        columns: false,
    },
};