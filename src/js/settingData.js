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
        value: 0,
        options: [
            {
                name: 'Red',
                value: 0,
                select: 1
            },
            {
                name: 'Blue',
                value: 1,
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
]

export default settings