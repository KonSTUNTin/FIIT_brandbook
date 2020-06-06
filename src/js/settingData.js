const settings = [
    {
        title: "Logotype",
        type: 'radio',
        value: 0,
        options: [
            {
                name: 'None',
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
        title: "Format",
        type: 'radio',
        value: 0,
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
        title: "Color",
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
        title: "Generator",
        type: 'range',
        options: [
            {
                name: 'Scale',
                value: 50,
            },
            {
                name: 'Black',
                value: 50
            }
        ]
    },
]

export default settings