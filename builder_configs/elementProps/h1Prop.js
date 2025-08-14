export default {
    properties: {
        type: false,
        name: false,
        label: false,
        tooltip: false,
        description: true,
    },
    options: {
        tag: false,
        content: true,
        img: {
            src: false,
            alt: false,
            title: false,
            width: false,
            height: false,
        },
        link: {
            href: false,
            target: false,
        },
        attrs: false,
    },
    layout: {
        align: false,
        space: false,
        size: false,
        columns: false,
    },
}