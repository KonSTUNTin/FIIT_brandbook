const brandbookContent = [
    {   
        type: 'static',
        className: 'section mobile_border mobile_center',
        columns:[
            {   
                className: 'column width12',
                h2: 'ФИИТ — это новое учебное заведение на базе УРФУ.\u000a Оно ставит перед собой инновационные задачи, а мы сделали для него инновационный логотип и фирменный стиль.'}
        ]
    },
    {   
        type: 'static',
        className: 'section mobile_border mobile_center',
        navigation: 'conception',
        columns:[
            {
                h2: 'Концепция',
                className: 'column width4 border '
            },
            {
                img: './images/code.png',
                className: 'column width4 arrow border concept',
                h3: 'Берем фигурную скобку',
                text: 'Такая скобка используется как в математике, так\u00A0и\u00A0в\u00A0программинге (JS, Python).'
            },
            {
                className: 'column width4 border concept',
                img: './images/shield.png',
                h3: 'Переворачиваем',
                text: 'Получается основа для\u00A0геральдического символа с\u00A0любым содержимым, по\u00A0ситуации.'
            },

        ]
    },
    {
        type: 'static',
        navigation: 'major_logo',
        className: 'section gradientBlack mobile_center',
        columns: [
            {
                h2: 'Основной знак',
                text: 'Самый самостоятельный знак по\u2011умолчанию.',
                className: 'column width3 horizontal_center',
                radioRow: [
                    // {
                    //     name: 'language',
                    //     type: 'text',
                    //     values: [
                    //         {
                    //             name: 'logo_rus',
                    //             value: 'RUS',
                    //             text: "RUS",
                    //             select: true
                    //         },
                    //         {
                    //             name: 'logo_eng',
                    //             value: 'ENG',
                    //             text: "ENG",
                    //             select: false
                    //         },
                    //     ]
                    // },
                    {
                        name: 'colorAnimation',
                        type: 'color',
                        handler: 'logoColor',
                        values: [
                            {
                                name: 'logo_white',
                                text: "white",
                                value: "white",
                                select: true
                            },
                            {
                                name: 'logo_pink',
                                text: "pink",
                                value: "pink",
                                select: false
                            },
                            {
                                name: 'logo_blue',
                                text: "blue",
                                value: "blue",
                                select: false
                            },
                        ]
                    }
                ],
                buttonRow:[
                    {
                        text: 'PNG',
                        file: './downloads/major_logo.png'
                    },
                    {
                        text: 'SVG',
                        file: './downloads/major_logo.svg'
                    }
                ]
            },
            {
                lottie: './lottie/main.json',
                className: 'animate_sign column width5 center'
            },
            {
                text:'Знак содержит и\u00A0геральдические трактовки.',
                className: 'column width4 horizontal_center',
                aboutGeraldic: [
                    {
                        img:'./images/1_heraldic.svg',
                        title: 'Уробoрос',
                        text: 'Репрезентация циклической природы жизни:\
                        чередования созидания и\u00A0разрушения, жизни и\u00A0смерти.'
                    },
                    {
                        img:'./images/2_heraldic.svg',
                        title: 'Молния',
                        text: 'Начало революционного шторма.\
                        Молния, озаряющая мрак, также\u00A0символ борьбы света с\u00A0тьмой,\
                        символ революционной мысли.'
                    },
                    {
                        img:'./images/3_heraldic.svg',
                        title: 'Костыль',
                        text: 'Одна из\u00A0почетных фигур'
                    }
                ]
                
            },
        ],
    },
    {
        navigation: 'in_messenger',
        type: 'static',
        className: 'section gradientBlack mobile_center',
        columns: [
            {
                className: 'column width1',
            },
            {
                className: 'column width10 center',
                img: './images/chat.png',
                text:'Знак также можно напечатать в\u00A0мессенджере'
            },
            {
                className: 'column width1',
               
            },
        ]
    },
    {
        type: 'static',
        navigation: 'brackets',
        className: 'section nopadding_bottom center mobile_center',
        columns: [
            {
                className: 'column width12 center',
                h2: 'Герб\u2011контейнер',
                text: 'Самостоятельный символ.\
                        Является контейнером для\u00A0любого\
                        содержимого.',
                buttonRow:[
                    {
                        text: 'PNG',
                        file: './downloads/brackets.png'
                    },
                    {
                        text: 'SVG',
                        file: './downloads/brackets.svg'
                    }
                ],
                lottie: [
                    './lottie/slider.json',
                    './lottie/mobile_brackets/data.json'
                ]
            },
        ]
    },
    {
        type: 'static',
        navigation: 'short_form',
        className: 'section gradient width10 mobile_center',
        columns: [
            {
                className: 'column width4',
                h2: 'Краткая форма',
            },
            {   
                className: 'column width4 concept',
                img: [
                    './images/bracketExample1.png',
                ],
                text: 'Логотип\u2011скобка.\
                Используется в\u00A0графике,\
                или\u00A0в\u00A0подписи',
                buttonRow:[
                    {
                        text: 'PNG',
                        file: './downloads/one_bracket.png'
                    },
                    {
                        text: 'SVG',
                        file: './downloads/one_bracket.svg'
                    }
                ]
            },
            {
                className: 'column width4 concept',  
                img: './images/Fletterexample.png',          
                text: 'Буква Ф,\
                Зарифмована с\u00A0формой нижней скобки.\
                Может использоваться как\u00A0маска для\u00A0графики.',
                buttonRow:[
                    {
                        text: 'PNG',
                        file: './downloads/f_letter.png'
                    },
                    {
                        text: 'SVG',
                        file: './downloads/f_letter.svg'
                    }
                ],
                
                
            },
        ]
    },
    {
        type: 'static',
        className: 'section mobile_center',
        navigation: 'colors',
        columns: [
            {
                className: 'column width2',
            },
            {
                className: 'column width8 center ',
                h2: 'Цвета',
                colorSwatches: [
                    {
                        class: 'pink_blue',
                    },
                    {
                        name: '#FFFFFF',
                        class: 'white',
                        rgb: 'rgb(255, 255, 255)'
                    },
                    {
                        name: '#1AB3D5',
                        class: 'blue',
                        rgb: 'rgb(26, 179, 213)'
                    },
                    {
                        class: 'white_pink',
                    },
                    {
                        name: '#000000',
                        class: 'black',
                        rgb: 'rgb(3, 8, 27)'
                    },
                    {
                        name: '#FE25A7',
                        class: 'pink',
                        rgb: 'rgb(254, 37, 167)'
                    },
                    {
                        class: 'white_blue',
                    },
                    {
                        name: '#110F2C',
                        class: 'darkBlue',
                        rgb: 'rgb(17, 15, 44)'
                    },
                    
                ], 
            },
            {
                className: 'column width2',
            },
        ]
    },
    {
        type: 'static',
        navigation: 'font',
        className: 'section black mobile_center',
        columns: [
            {
                className: 'column width12 center',
                lottie: './lottie/aboutfont/data.json',
                h2: 'Гарнитура',
                text: 'Свободная гарнитура Golos\u00A0Text от\u00A0Paratype',
                buttonRow:[
                    {
                        text: 'OTF',
                        file: './downloads/golos.zip'
                    },
                ],
            },
        ]
    },
    {
        type: 'static',
        navigation:'pattern',
        className: 'section center nopadding_bottom ',
        columns: [
            {
                className: 'column center width12',
                h2: 'Паттерн',
                text: 'Фирменный стиль может использовать любой визуал.\
                Но\u00A0также мы\u00A0разработали генератор паттернов.',
            }]
    },
    {
        type: 'PatternBlock',
    },
    {
        type: 'static',
        navigation:'mockups',
        className: 'section black mobile_center',
        columns: [
            {
                h2: 'Носители',
                className: 'column width12 center',
                img: [
                    './images/inLife1.jpg',
                    './images/inLife2.jpg',
                    './images/inLife3.jpg',
                    './images/inLife4.jpg',
                    './images/inLife5.jpg',
                    './images/inLife6.jpg',
                    './images/inLife7.jpg',
                    './images/inLife8.jpg',
                ]//'./images/inLife1.png',
            },
        ]
    },
    {
        type: 'static',
        className: 'section gradient center nopadding_bottom',
        columns: [
            {
                className: 'column width12 center',
                h2: 'Команда'
            }]
    },
    {
        type: 'static',
        className: 'section gradient',
        columns: [
            {
                className: 'column width12 persons',
                person_0:{
                        photo: './images/Lesha.png',
                        name: 'Алексей Кулаков',
                        role: 'Арт\u2011директор',
                },
                person_1: {
                    photo: './images/Vanya.png',
                    name: 'Иван Торопов',
                    role: 'Автор скобки\u2011герба, дизайнер',
                },
                person_2: {
                    photo: './images/Kostya.png',
                    name: 'Константин Остроухов',
                    role: 'Дизайнер, разработчик',
                },
                person_3: {
                    photo: './images/Lyasya.png',
                    name: 'Ляйсан Байбулова',
                    role: 'Иллюстратор, 3D\u2011дизайнер',
                },
            }
        ]
    },
]

export default brandbookContent;