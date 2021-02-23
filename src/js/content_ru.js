const brandbookContent = [
    {   
        type: 'static',
        className: 'section gradient mobile_center',
        columns:[
            {
                className: 'column width2 '
            },
            {   
                className: 'column width8 bigText',
                text_1: 'ФИИТ\u00A0— Фундаментальная информатика и\u00A0информационные технологии\u00A0— это\u00A0новое образовательное направление на\u00A0базе УрФУ.\
                    Оно\u00A0запущено в\u00A02019\u00A0году компанией Контур при\u00A0поддержке Naumen, JetStyle и\u00A0других представителей IT\u2011отрасли Екатеринбурга.',
                text_2: 'Цель\u00A0ФИИТ в\u00A0УрФУ\u00A0— обучать разработчиков программных продуктов по\u2011новому. А\u00A0мы\u00A0придумали, как\u00A0ФИИТ будет выглядеть,\u00A0— сделали логотип и\u00A0фирменный стиль.'
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
                text: 'Такая скобка используется как в математике, так\u00A0и\u00A0в\u00A0программинге (JS, С#).'
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
                lottie: './lottie/two_logos.json',
                className: 'animate_sign column width5 center'
            },
            {
                text: 'По\u00A0умолчанию является самостоятельным.',
                className: 'column width3 horizontal_center',
                radioRow_1: [
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
                radioRow_2: [
                    {
                        name: 'language',
                        type: 'text',
                        handler: 'languageHandler',
                        values: [
                            {
                                name: 'logo_ru',
                                text: "RU",
                                value: "ru",
                                select: true
                            },
                            {
                                name: 'logo_en',
                                text: "EN",
                                value: "en",
                                select: false
                            },
                        ]
                    }
                ],
                buttonRow:[
                    {
                        text: 'PNG',
                        file: './downloads/major_logo_png.zip'
                    },
                    {
                        text: 'SVG',
                        file: './downloads/major_logo_svg.zip'
                    }
                ]
            },
           ]
        },
        {   
            navigation: 'geraldic',
            type: 'static',
            className: 'section center nopadding_bottom mobile_center ',
            columns: [
                {
                    h2: 'Геральдика',
                    className: 'column width12 center horizontal_center',
                    text:'Разделенный четверочастно французский щит, серебро на\u00A0лазури.',
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
                            text: 'Одна из\u00A0почетных фигур. Весьма уважаемый способ, применяемый программистами, но\u00A0не\u00A0только! Считается защищающим жизнь символом удачи.'
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
                img: './images/bracketExample1.png',
                text: 'Логотип-скобка: может\u00A0использоваться в\u00A0графике или\u00A0подписях.',
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
                    // {
                    //     class: 'pink_blue',
                    // },
                    {
                        name: '#FFFFFF',
                        class: 'white',
                        rgb: 'RGB\u00A0(255,\u00A0255,\u00A0255)'
                    },
                    {
                        name: '#1AB3D5',
                        class: 'blue',
                        rgb: 'RGB\u00A0(26,\u00A0179,\u00A0213)'
                    },
                    {
                        class: 'purple',
                        name: '#A30CFF',
                        rgb: 'RGB\u00A0(163,\u00A012,\u00A0255)'
                    },
                    {
                        name: '#03081B',
                        class: 'black',
                        rgb: 'RGB\u00A0(3,\u00A08,\u00A027)'
                    },
                    {
                        name: '#FE25A7',
                        class: 'pink',
                        rgb: 'RGB\u00A0(254,\u00A037,\u00A0167)'
                    },
                    // {
                    //     class: 'white_blue',
                    // },
                    {
                        name: '#110F2C',
                        class: 'darkBlue',
                        rgb: 'RGB\u00A0(17,\u00A015,\u00A044)'
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
                    './images/inLife5.png',
                    './images/inLife6.jpg',
                    './images/inLife7.jpg',
                    './images/inLife8.jpg',
                ]//'./images/inLife1.png',
            },
        ]
    },
    {
        type: 'static',
        className: 'section',
        navigation: 'testimonials',
        columns: [
            {
                className: 'column width2',
            },
            {
                className: 'column width8 center',
                h2: 'Отзывы',
                reviews: [
                    {
                        text:'Ты говоришь: "Ребята, сделайте классно". И тебе отвечают: "Вот, держи!"',
                        full_text: 'Я помню, что главная моя эмоция это, наверное, восторг, потому что я не ожидала, что…\
                        Но лучше начать с начала. Когда я шла разговаривать с Аней, я вообще не была уверена, \
                        что JetStyle будет интересно заниматься нашей задачей, мы не знали, найдем ли отклик. \
                        Были мысли в формате: «Ну, давайте попробуем сходить, поговорим, поймем, \
                        насколько ребята будут готовы потратить на это свое время».\
                        Потому что мы же понимали — это инфраструктурный проект, \
                        на длинную перспективу рассчитанный, у многих есть скепсис относительно всего этого.',
                        author: 'Екатерина Воронова',
                        foto: './images/Katya.png',
                        role: 'Руководитель образовательных программ, СКБ Контур'
                    },
                    {
                        text:'В\u00A0целом было очень\u00A0 приятно работать с\u00A0людьми, которые находятся на\u00A0одной волне с\u00A0нами и\u00A0практически читают\u00A0мысли ',
                        full_text: 'Получилось красиво, аккуратно и современно. Но это как раз было предсказуемо. Что меня действительно приятно удивило, так это то, насколько идейным получился результат.\
                        Превратить программистские скобочки в герб, а буквы ФИИТ в гербовые символы — идея, от которой мы были в восторге!\
                        Ирония, которая проглядывает в фирменном стиле (вы ведь заметили костыль в гербе, да?), тоже попала в самую цель. \
                        Ведь если студенты видят, что шутить над ФИИТ можно, они раскрепощаются, начинают легче давать обратную связь\
                        и активнее участвовать в жизни образовательной программы. Для нас это важно.\
                        Когда мы шли в JetStyle, у меня была всего одна мысль: предложить сделать не статичный логотип\
                        , а что-то генеративное. Что-то, что может меняться, подстраиваться. Что можно и нужно программировать.\
                        Ведь ФИИТ — это образовательное направление про программирование.\
                        Значит и логотип должен быть программируемым )\
                        Каково же было мое удивление, когда мне эту идею даже не пришлось озвучивать.\
                        В JetStyle сами ее предложили почти сразу и сами все сделали. Удивительная магия! )\
                        В целом было очень приятно работать с людьми, которые находятся на одной волне с нами и практически читают мысли )',
                        author: 'Павел Егоров',
                        foto: './images/Pavel.png',
                        role: 'Руководитель образовательной программы ФИИТ УрФУ'
                    },
                ],
                radioRow: [
                    {
                        name: 'reviewControl',
                        type: 'color',
                        handler: 'reviewControl',
                        values: [
                            {
                                name: 'first_review',
                                text: "pink",
                                value: "pink",
                                select: true
                            },
                            {
                                name: 'second_review',
                                text: "pink",
                                value: "pink",
                                select: false
                            },
                           
                        ]
                    }
                ],
            },
            {
                className: 'column width2',
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
                        role: 'Арт\u2011директор, дизайнер',
                },
                person_1: {
                    photo: './images/Vanya.png',
                    name: 'Иван Торопов',
                    role: 'Автор идеи, дизайнер',
                },
                person_2: {
                    photo: './images/Kostya.png',
                    name: 'Константин Остроухов',
                    role: 'Дизайнер, разработчик генератора паттернов, готовил кейс',
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