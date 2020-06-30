const brandbookContent = [
    {   
        className: 'section',
        columns:[
            {
                h2: 'Концепция',
                className: 'column width3'
            },
            {
                img: './images/code.png',
                className: 'column width5 arrow',
            },
            {
                className: 'column width4',
                h3: 'Фигурная скобка',
                text: 'Используется как в математике, так и в программинге (JS, Python).'
            }
        ]
    },
    {   
        className: 'section',
        columns:[
            {
                className: 'column width3'
            },
            {
                img: './images/arrow.svg',
                className: 'column width5 arrow center',
            },
            {
                className: 'column width4',
            }
        ]
    },
    {
        className: 'section',
        columns: [
            {
                className: 'column width3'
            },
            {
                img: './images/shield.png',
                className: 'column width5 arrow'
            },
            {
                className: 'column width4',
                h3: 'Перевернутая скобка',
                text: 'Дает основу для геральдического символа с любым содержимым, по ситуации.'
            }
        ]
    },
    {   
        className: 'section',
        columns:[
            {
                className: 'column width3'
            },
            {
                img: './images/arrow.svg',
                className: 'column width5 arrow center',
            },
            {
                className: 'column width4',
            }
        ]
    },
    {
        className: 'section',
        columns: [
            {
                h2: 'Основной знак',
                className: 'column width3 border  horizontal_center',
            },
            {
                lottie: './lottie/main.json',
                className: 'column width5 center border'
            },
            {
                text: 'Самый самостоятельный знак по-умолчанию.',
                className: 'column width4 border  horizontal_center',
                radioRow: [
                    {
                        name: 'language',
                        type: 'text',
                        values: [
                            {
                                name: 'logo_rus',
                                value: 'RUS',
                                text: "RUS",
                                select: true
                            },
                            {
                                name: 'logo_eng',
                                value: 'ENG',
                                text: "ENG",
                                select: false
                            },
                        ]
                    },
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
                        text: 'PNG'
                    },
                    {
                        text: 'SVG'
                    }
                ]
            },
        ],
    },
    {
        className: 'section',
        columns: [
            { 
                className: 'column width3',
                text:'Знак содержит и геральдические трактовки.'
            },
            {
                className: 'column width5 center',
                img: './images/rendershield.png',
                text: 'Разделенный четверочастно французский щит, серебро на лазури'
            },
            {
                className: 'column width4',
                aboutGeraldic: [
                    {
                        img:'./images/geraldic01.png',
                        title: 'Уробoрос',
                        text: 'Репрезентация циклической природы жизни:\
                        чередования созидания и разрушения, жизни и смерти.'
                    },
                    {
                        img:'./images/geraldic02.png',
                        title: 'Молния',
                        text: 'Начало революционного шторма.\
                        Молния, озаряющая мрак, также символ борьбы света с тьмой,\
                        символ революционной мысли.'
                    },
                    {
                        img:'./images/geraldic03.png',
                        title: 'Костыль',
                        text: 'Одна из почетных фигур'
                    }
                ]
            }
        ]
    },
    {
        className: 'section lightgrey',
        columns: [
            {
                className: 'column width3',
                text:'Знак также можно напечатать в мессенджере'
            },
            {
                className: 'column width5',
                img: './images/chat.png',
            },
            {
                className: 'column width3',
            },
        ]
    },
    {
        className: 'section white',
        columns: [
            {
                className: 'column width3 horizontal_center',
                h2: 'Герб-контейнер',
                text: 'Самостоятельный символ.\
                        Является контейнером для любого\
                        содержимого.',
                buttonRow:[
                    {
                        text: 'PNG'
                    },
                    {
                        text: 'SVG'
                    }
                ]
            },
            {
                className: 'column width6',
                lottie: './lottie/slider.json',
            },
            {
                className: 'column width3',
            },
        ]
    },
    {
        className: 'section',
        columns: [
            {
                className: 'column width3',
                h2: 'Краткая форма',
            },
            {
                className: 'column width2 border',
                img: './images/bracket.svg',
                text: 'Логотип-скобка.\
                Используется в графике,\
                или в подписи',
                buttonRow:[
                    {
                        text: 'PNG'
                    },
                    {
                        text: 'SVG'
                    }
                ]
            },
            {
                className: 'column width4 border',
                img: './images/bracketExample1.png',
            },
            {
                className: 'column width2 border',
                img: './images/bracketExample2.png',
            },
            {
                className: 'column width1',
            },
        ]
    },
    {
        className: 'section',
        columns: [
            {
                className: 'column width3',
            },
            {
                className: 'column width2',
                img: './images/fLetter.png',
            },
            {
                className: 'column width4',
                text: 'Самостоятельный символ,\
                Зарифмован с формой нижней скобки.\
                Может использоваться как маска для графики.',
                buttonRow:[
                    {
                        text: 'PNG'
                    },
                    {
                        text: 'SVG'
                    }
                ]

            },
            {
                className: 'column width2',
                img: './images/Fletterexample.png',
            },
            {
                className: 'column width1',
            },
        ]
    },
    {
        className: 'section white',
        columns: [
            {
                className: 'column width3',
                h2: 'Цвета',
            },
            {
                className: 'column width6',
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
                className: 'column width3',
            },
        ]
    },
    {
        className: 'section black',
        columns: [
            {
                className: 'column width3',
                h2: 'Гарнитура',
                buttonRow:[
                    {
                        text: 'OTF'
                    },
                ]
            },
            {
                className: 'column width6',
                img: './images/font.png',
                text: 'Бесплатная гарнитура. Golos Text от Paratype'
            },
            {
                className: 'column width3',
            },
        ]
    },
    {
        className: 'section',
        columns: [
            {
                className: 'column width6',
                h2: 'Паттерн',
                text: 'Фирменный стиль может использовать любой визуал.\
                Но также мы разработали генератор паттернов.',
                canvasGenerator: true,
                buttonRow:[
                    {
                        text: 'PNG'
                    }
                ]
            },
            {
                className: 'column width6 vertical',
                
                radioRow: [
                    {
                        name: 'logo',
                        type: 'text',
                        handler: 'logoColorInGenerator',
                        values: [
                            {
                                name: 'generator_logo_without',
                                value: 'none',
                                text: "Без логотипа",
                                select: false
                            },
                            {
                                name: 'generator_logo_main',
                                value: 'main',
                                text: "Основной знак",
                                select: true
                            },
                            {
                                name: 'generator_logo_brackets',
                                value: 'brackets',
                                text: "Герб-контейнер",
                                select: false
                            },
                            {
                                name: 'generator_logo_short',
                                value: 'short',
                                text: "Краткая форма",
                                select: false
                            },
                        ]
                    },
                    {
                        name: 'ratio',
                        type: 'text',
                        values: [
                            {
                                name: 'generator_ratio_square',
                                value: "square",
                                text: "Квадрат",
                                select: true
                            },
                            {
                                name: 'generator_ratio_youtube',
                                value: "youtube",
                                text: "Шапка Youtube",
                                select: false
                            },
                            {
                                name: 'generator_ratio_vk',
                                value: "vk",
                                text: "Шапка VK",
                                select: false
                            }
                        ]
                    },
                    {
                        name: 'color',
                        type: 'color',
                        handler: 'logoColorInGenerator',
                        values: [
                            {
                                name: 'generator_white',
                                text: "white",
                                value: "white",
                                select: false
                            },
                            {
                                name: 'generator_pink',
                                text: "pink",
                                value: "pink",
                                select: true
                            },
                            {
                                name: 'generator_blue',
                                text: "blue",
                                value: "blue",
                                select: false
                            },
                            {
                                name: 'generator_white_pink',
                                text: "white_pink",
                                value: "white_pink",
                                select: false
                            },
                            {
                                name: 'generator_white_blue',
                                text: "white_blue",
                                value: "white_blue",
                                select: false
                            },
                            {   
                                name: 'generator_pink_blue',
                                text: "pink_blue",
                                value: "pink_blue",
                                select: false
                            },
                        ]
                    }
                ],
                rangeRow:[
                    {
                        text: 'Размер логотипа',
                        name: 'logoSize',
                        value: 0,
                        handler: 'rangeHandler'
                    },
                    {
                        text: 'Размер точек',
                        name: 'black',
                        value: 0,
                        handler: 'rangeHandler'
                    },
                    {
                        text: 'Масштаб',
                        name: 'scale',
                        value: 0,
                        handler: 'rangeHandler'
                    },
                    {
                        text: 'Контраст',
                        name: 'trace',
                        value: 0,
                        handler: 'rangeHandler'
                    },
                    {
                        text: 'Форма',
                        name: 'form',
                        value: 0,
                        handler: 'rangeHandler'
                    },
                    {
                        text: 'Разделение',
                        name: 'split',
                        value: 0,
                        handler: 'rangeHandler'
                    }

                ]
            },
            // {
            //     className: 'column width3',
            // },
        ]
    },
    {
        className: 'section white',
        columns: [
            {
                className: 'column width3',
                h2: 'Носители',
            },
            {
                className: 'column width9',
                img: [
                    './images/inLife1.png',
                    './images/inLife2.png',
                    './images/inLife3.png',
                    './images/inLife4.png',
                    './images/inLife5.png',
                    './images/inLife6.png',
                    './images/inLife7.png',
                    './images/inLife8.png',
                ]//'./images/inLife1.png',
            },
        ]
    },
    {
        className: 'section lightgrey bottom',
        columns: [
            {
                className: 'column width3',
                h2: 'Команда',
                person:{
                        photo: './images/Lesha.png',
                        name: 'Алексей Кулаков',
                        role: 'Арт-директор',
                },
            },
            {   
                className: 'column width3',
                person: {
                    photo: './images/Vanya.png',
                    name: 'Иван Торопов',
                    role: 'Автор скобки-герба, дизайнер',
                },
            },
            {   
                className: 'column width3',
                person: {
                    photo: './images/Kostya.png',
                    name: 'Константин Остроухов',
                    role: 'Дизайнер, разработчик',
                },
            },
            {   
                className: 'column width3',
                person: {
                    photo: './images/Lyasya.png',
                    name: 'Ляйсан Байбулова',
                    role: 'Иллюстратор, 3D-дизайнер',
                },
            }
        ]
    },
]

export default brandbookContent;