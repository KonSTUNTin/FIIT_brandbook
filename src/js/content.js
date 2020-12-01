const brandbookContent = [
    {   
        type: 'static',
        className: 'section black mobile_center',
        columns:[
            {
                className: 'column width2 '
            },
            {   
                className: 'column width8 bigText',
                text_1: 'ФИИТ\u00A0— Фундаментальная информатика и\u00A0информационные технологии\u00A0— это\u00A0новое образовательное направление на\u00A0базе УрФУ.\
                    Оно\u00A0запущено в\u00A02019\u00A0году компанией Контур при\u00A0поддержке Naumen, JetStyle и\u00A0других представителей IT\u2011отрасли Екатеринбурга.',
                text_2: 'Цель\u00A0ФИИТ\u00A0— обучать разработчиков программных продуктов по\u2011новому. А\u00A0мы\u00A0придумали, как\u00A0ФИИТ выглядеть,\u00A0— сделали логотип и\u00A0фирменный стиль.'
            },
            {
                className: 'column width2 '
            },
        ]
    },
    {   
        type: 'static',
        className: 'section mobile_border nopadding_bottom mobile_center',
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
                text: 'Получается основа для\u00A0геральдического символа с\u00A0любым содержимым.'
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
                className: 'column width3 horizontal_center',
            },
            {
                lottie: './lottie/main.json',
                className: 'animate_sign column width5 center'
            },
            {
                text: 'По\u2011умолчанию является самостоятельным.',
                className: 'column width3 horizontal_center',
                radioRow: [
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
           ]
        },
        {
            type: 'static',
            className: 'section center nopadding_bottom mobile_center ',
            columns: [
                {
                    h2: 'Геральдика',
                    className: 'column width12 center horizontal_center',
                    text:'Разделенный четверочастно французский щит, серебро на лазури.',
                    // img:'./images/shields.png',
                }
            ],
           
        },
        {
            type: 'static',
            className: 'section nopadding_bottom mobile_center ',
            columns: [
                {
                    className: 'column width2 horizontal_center',
                    shield_0: {
                        text: 'Немецкий, красный',
                        img: './images/shield_0.png'
                    },
                    shield_1: {
                        text: 'Итальянский, пурпуровый',
                        img: './images/shield_1.png'
                    },
                    shield_2: {
                        text: 'Квадратный, беличий «мех»',
                        img: './images/shield_2.png'
                    }
                    // img:'./images/shields.png',
                },
                {
                    className: 'column width2 horizontal_center ',
                    shield_0: {
                        text: 'Французский, чешуйчатый',
                        img: './images/shield_3.png'
                    },
                    shield_1: {
                        text: 'Польский, противобеличий «мех»',
                        img: './images/shield_4.png'
                    },
                    shield_2: {
                        text: 'Косоугольный, противогорно-стаевый «мех»',
                        img: './images/shield_5.png'
                    }
                    // img:'./images/shields.png',
                },
                {
                    className: 'column width3 bigShield',
                    img:'./images/shield_00.png',
                },
                {
                    className: 'column width2 horizontal_center ',
                    shield_0: {
                        text: 'Древний (варяжский), золото',
                        img: './images/shield_6.png'
                    },
                    shield_1: {
                        text: 'Английский, голубой',
                        img: './images/shield_7.png'
                    },
                    shield_2: {
                        text: 'Испанский, чёрный',
                        img: './images/shield_8.png'
                    }
                    // img:'./images/shields.png',
                },
                {
                    className: 'column width2 horizontal_center ',
                    shield_0: {
                        text: 'Немецкий, серебро',
                        img: './images/shield_9.png'
                    },
                    shield_1: {
                        text: 'Английский, зелёный',
                        img: './images/shield_10.png'
                    },
                    shield_2: {
                        text: 'Византийский, горностаевый «мех»',
                        img: './images/shield_11.png'
                    }
                    // img:'./images/shields.png',
                },
            ],
           
        },
        {
            type: 'static',
            navigation: 'major_logo',
            className: 'section mobile_center ',
            columns: [
                {
                    className: 'column width4 heraldicLine',
                    aboutGeraldic: [
                        {
                            img:'./images/geraldic01.png',
                            title: 'Уробoрос',
                            text: 'Репрезентация циклической природы жизни:\
                            чередования созидания и\u00A0разрушения, жизни и\u00A0смерти.'
                        }
                    ]
                    
                },
                {
                    className: 'column width4 heraldicLine',
                    aboutGeraldic: [
                        {
                            img:'./images/geraldic02.png',
                            title: 'Молния',
                            text: 'Начало революционного шторма.\
                            Молния, озаряющая мрак, также\u00A0символ борьбы света с\u00A0тьмой,\
                            символ революционной мысли.'
                        }
                    ]
                    
                },
                {
                    className: 'column width4 heraldicLine',
                    aboutGeraldic: [
                        {
                            img:'./images/geraldic03.png',
                            title: 'Костыль',
                            text: 'Одна из\u00A0почетных фигур.'
                        }
                    ]
                    
                },
                
        ],
    },
    {
        navigation: 'in_messenger',
        type: 'static',
        className: 'section gradient mobile_center',
        columns: [
            {
                className: 'column width1',
            },
            {
                className: 'column width10 center',
                img: './images/chat.png',
                text:'Знак также можно напечатать в\u00A0мессенджере.'
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
                text: 'Логотип-скобка: может\u00A0использоваться в\u00A0графике или\u00A0подписях',
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
                text: 'Буква\u00A0«Ф»: зарифмована с\u00A0формой нижней скобки, может\u00A0использоваться как\u00A0маска для\u00A0графики.',
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
                        rgb: 'RGB\u00A0(255, 255, 255)'
                    },
                    {
                        name: '#1AB3D5',
                        class: 'blue',
                        rgb: 'RGB\u00A0(26, 179, 213)'
                    },
                    {
                        class: 'white_pink',
                    },
                    {
                        name: '#000000',
                        class: 'black',
                        rgb: 'RGB\u00A0(3, 8, 27)'
                    },
                    {
                        name: '#FE25A7',
                        class: 'pink',
                        rgb: 'RGB\u00A0(254, 37, 167)'
                    },
                    {
                        class: 'white_blue',
                    },
                    {
                        name: '#110F2C',
                        class: 'darkBlue',
                        rgb: 'RGB\u00A0(17, 15, 44)'
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
                text: 'Свободная гарнитура Golos\u00A0Text от\u00A0Paratype.',
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
                text: 'Фирменный стиль может\u00A0использовать любой визуал. Но\u00A0мы\u00A0разработали генератор паттернов\u00A0— попробуйте прямо\u00A0сейчас!',
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
                    './images/inLife9.jpg',
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
        className: 'section gradient command',
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
                    role: 'Автор идеи скобки\u2011герба, дизайнер',
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