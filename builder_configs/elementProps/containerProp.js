export default {
    properties: {
        type: true,
        name: false,
        label: true,
        tooltip: false,
        description: false,
    },
    data: {
        nested: false,
    },
    decorators: {
        before: false,
        between: false,
        after: false,
    },
    layout: {
        size: false,
        columns: false,
    },
    conditions: {
        conditions: true,
    },
};