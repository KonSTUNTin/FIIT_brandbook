const settings = [
    {
        header: 'Логотип',
        name: 'Logotype',
        type: 'radio',
        value: "none",
        options: [
            {
                name: "None",
                value: 'none',
                select: true
            },
            {
                name: "Yes",
                value: 'yes',
                select: false
            },
            {
                name: 'Only borders',
                value: 'borders',
                select: false
            },
            {
                name: 'One bracket',
                value: 'bracket',
                select: false
            }
        ]
    },
    {
        name: "Logo size",
        type: 'range',
        value: 50
    },
    {
        name: "Format",
        type: 'radio',
        value: [1024, 1024],
        options: [
            {
                name: 'Square logo',
                value: [1024, 1024],
                select: 1
            },
            {
                name: 'Youtube header',
                value: [2560, 1440],
                select: 0,
            },
            {
                name: 'VK header',
                value: [1590, 400],
                select: 0
            },
            
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
        abstract: 1,
        value: 72
    },
    {
        name: "Scale",
        type: 'range',
        abstract: 1,
        value: 50
    },
    {
        name: "Form",
        type: 'range',
        abstract: 1,
        value: 50
    },
    {
        name: "Trace",
        type: 'range',
        abstract: 1,
        value: 96
    },
    {
        name: "Split",
        type: 'range',
        abstract: 1,
        value: 4
    }
]

export default settings