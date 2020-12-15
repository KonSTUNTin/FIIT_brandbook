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
                text_1: 'FIIT\u00A0–\u00A0Fundamental Informatics and\u00A0Information Technologies – is\u00A0a\u00A0new\u00A0educational programme based at\u00A0the\u00A0Ural Federal University. \
                It\u00A0was\u00A0launched in\u00A02019 by\u00A0Kontur with\u00A0the\u00A0support of\u00A0Naumen, JetStyle and\u00A0other\u00A0representatives of\u00A0the\u00A0IT\u00A0industry\
                in\u00A0Yekaterinburg.',
                text_2: 'The main goal of\u00A0FIIT at\u00A0UrFU is\u00A0to\u00A0train software developers in\u00A0a\u00A0new way. And\u00A0our\u00A0task was\u00A0to\u00A0come\u00A0up\u00A0with\u00A0how\u00A0FIIT would look like\u00A0– we created a\u00A0logo and\u00A0brand identity.'
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
                h2: 'Concept',
                className: 'column width4 border '
            },
            {
                img: './images/code.png',
                className: 'column width4 arrow border concept',
                h3: 'We\u00A0take a\u00A0curly bracket ',
                text: 'This bracket is\u00A0used\u00A0both in\u00A0mathematics and\u00A0in\u00A0programming (JS,\u00A0C#).'
            },
            {
                className: 'column width4 border concept',
                img: './images/shield.png',
                h3: 'And turn it\u00A0around ',
                text: 'It forms the\u00A0basis for\u00A0a\u00A0heraldic symbol with\u00A0any\u00A0content.'
            },

        ]
    },
    {
        type: 'static',
        navigation: 'major_logo',
        className: 'section gradientBlack mobile_center',
        columns: [
            {
                h2: 'Main symbol',
                className: 'column width3 horizontal_center',
            },
            {
                lottie: './lottie/new.json',
                className: 'animate_sign column width5 center'
            },
            {
                text: 'It is self-contained by default',
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
            navigation: 'geraldic',
            type: 'static',
            className: 'section center nopadding_bottom mobile_center ',
            columns: [
                {
                    h2: 'Heraldry',
                    className: 'column width12 center horizontal_center',
                    text:'A\u00A0quarterly divided French\u00A0shield, silver on\u00A0azure.',
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
                        text: 'German, Gules',
                        img: './images/shield_0.png'
                    },
                    shield_1: {
                        text: 'Italian, Purpure',
                        img: './images/shield_1.png'
                    },
                    shield_2: {
                        text: 'Square, Vair',
                        img: './images/shield_2.png'
                    }
                    // img:'./images/shields.png',
                },
                {
                    className: 'column width2 horizontal_center ',
                    shield_0: {
                        text: 'French, Papelonny',
                        img: './images/shield_3.png'
                    },
                    shield_1: {
                        text: 'Polish, Counter-vair',
                        img: './images/shield_4.png'
                    },
                    shield_2: {
                        text: 'Oblique, Counter-ermine',
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
                        text: 'Ancient (Varangian), Or',
                        img: './images/shield_6.png'
                    },
                    shield_1: {
                        text: ' English, Azure',
                        img: './images/shield_7.png'
                    },
                    shield_2: {
                        text: 'Spanish, Sable',
                        img: './images/shield_8.png'
                    }
                    // img:'./images/shields.png',
                },
                {
                    className: 'column width2 horizontal_center ',
                    shield_0: {
                        text: 'German, Argent',
                        img: './images/shield_9.png'
                    },
                    shield_1: {
                        text: 'English, Vert',
                        img: './images/shield_10.png'
                    },
                    shield_2: {
                        text: 'Byzantine, Ermine ',
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
                            title: 'Ouroboros',
                            text: 'Representation of\u00A0the\u00A0cyclical nature of\u00A0life: alternation of\u00A0creation and destruction, life\u00A0and\u00A0death.'
                        }
                    ]
                    
                },
                {
                    className: 'column width4 heraldicLine',
                    aboutGeraldic: [
                        {
                            img:'./images/geraldic02.png',
                            title: 'Lightning ',
                            text: 'The\u00A0beginning of\u00A0a\u00A0revolutionary storm. The\u00A0lightning illuminating the\u00A0darkness\
                            is\u00A0also a\u00A0symbol of\u00A0the\u00A0struggle between light and\u00A0darkness, a\u00A0symbol of\u00A0revolutionary thought.'
                        }
                    ]
                    
                },
                {
                    className: 'column width4 heraldicLine',
                    aboutGeraldic: [
                        {
                            img:'./images/geraldic03.png',
                            title: 'Chief-Pale',
                            text: 'One of the honourable ordinaries. A\u00A0highly respected method used\u00A0by\u00A0programmers and\u00A0others. It\u00A0is\u00A0considered a\u00A0life-protecting symbol of\u00A0good\u00A0luck.'
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
                img: './images/chat_eng.png',
                text:'The\u00A0sign can\u00A0also\u00A0be\u00A0typed in\u00A0a\u00A0messenger.'
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
                h2: 'Emblem-container ',
                text: 'A\u00A0self-contained symbol. Acts as\u00A0a\u00A0container for\u00A0any\u00A0content.',
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
                h2: 'Short form',
            },
            {   
                className: 'column width4 concept',
                img: './images/bracketExample1_eng.png',
                text: 'Bracket\u00A0logo: can\u00A0be used in\u00A0graphics or\u00A0captions',
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
                text: 'The\u00A0"Ф" letter: it\u00A0is\u00A0rhymed with the\u00A0shape of\u00A0the\u00A0lower bracket and\u00A0can\u00A0be\u00A0used as\u00A0a\u00A0graphics mask.',
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
                h2: 'Colours',
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
                lottie: './lottie/aboutfont_en/data.json',
                h2: 'Typeface',
                text: 'Free\u00A0typeface Golos\u00A0Text by\u00A0Paratype.',
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
                h2: 'Pattern',
                text: 'The\u00A0brand identity can\u00A0be\u00A0used with any\u00A0visual. But we\u00A0have developed a\u00A0pattern generator\u00A0–\u00A0try it\u00A0now!',
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
                h2: 'Mediums',
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
                h2: 'Testimonials',
                reviews: [
                    {
                        text:'You say: “Guys,\u00A0make\u00A0it\u00A0cool”. And\u00A0you\u00A0get the\u00A0answer:  “Here\u00A0you\u00A0go! All\u00A0done”',
                        full_text: 'Я помню, что главная моя эмоция это, наверное, восторг, потому что я не ожидала, что…\
                        Но лучше начать с начала. Когда я шла разговаривать с Аней, я вообще не была уверена, \
                        что JetStyle будет интересно заниматься нашей задачей, мы не знали, найдем ли отклик. \
                        Были мысли в формате: «Ну, давайте попробуем сходить, поговорим, поймем, \
                        насколько ребята будут готовы потратить на это свое время».\
                        Потому что мы же понимали — это инфраструктурный проект, \
                        на длинную перспективу рассчитанный, у многих есть скепсис относительно всего этого.',
                        author: 'Ekaterina Voronova',
                        foto: './images/Katya.png',
                        role: 'Head of educational programmes, SKB Kontur'
                    },
                    {
                        text:'In general, it\u00A0was a\u00A0very pleasant experience to\u00A0work with\u00A0people who\u00A0are on\u00A0the\u00A0same\u00A0wavelength with\u00A0us and\u00A0practically read our\u00A0minds)',
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
                        In general, it was a very pleasant experience to work with people who are on the same wavelength with us and practically read our minds)',
                        author: 'Pavel Egorov',
                        foto: './images/Pavel.png',
                        role: 'Head of the FIIT educational programme at UrFU'
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
                h2: 'Team'
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
                        name: 'Alexey Kulakov',
                        role: 'Art director, designer ',
                },
                person_1: {
                    photo: './images/Vanya.png',
                    name: 'Ivan Toropov',
                    role: 'The author of\u00A0the\u00A0idea, designer',
                },
                person_2: {
                    photo: './images/Kostya.png',
                    name: 'Konstantin Ostroukhov',
                    role: 'Designer, developer',
                },
                person_3: {
                    photo: './images/Lyasya.png',
                    name: 'Lyaisan Baybulova',
                    role: 'Illustrator, 3D designer',
                },
            }
        ]
    },
]

export default brandbookContent;