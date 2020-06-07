const settings = [
    {
        name: 'Logotype',
        type: 'radio',
        value: "None",
        options: [
            {
                name: "None",
                value: 'none',
                select: true
            },
            {
                name: 'Only borders',
                value: 'Only borders',
                select: false
            }
        ]
    },
    {
        name: "Format",
        type: 'radio',
        value: [800, 400],
        options: [
            {
                name: 'Youtube',
                value: [800, 400],
                select: 1,
            },
            {
                name: 'VK',
                value: [300, 200],
                select: 0
            }
        ]
    },
    {
        name: "Color",
        type: 'radio',
        value: 'pink',
        color: 1,
        options: [
            {
                name: 'Pink',
                value: 'pink',
                class: 'PinkColor',
                select: 1
            },
            {
                name: 'Blue',
                value: "blue",
                class: 'BlueColor',
                select: 0
            },
            {
                name: 'White',
                value: "white",
                class: 'WhiteColor',
                select: 0
            }
        ]
    },
    {
        name: "Black",
        type: 'range',
        value: 50
    },
    {
        name: "Scale",
        type: 'range',
        value: 50
    },
    {
        name: "Form",
        type: 'range',
        value: 50
    },
    {
        name: "Trace",
        type: 'range',
        value: 50
    },
    {
        name: "Split",
        type: 'range',
        value: 50
    }
]

export default settings