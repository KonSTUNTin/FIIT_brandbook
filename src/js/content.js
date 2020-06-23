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
        columns: [
            {
                className: 'column width3 border'
            },
            {
                img: './images/shield.png',
                className: 'column width5 border arrow'
            },
            {
                className: 'column width4 border',
                h3: 'Перевернутая скобка',
                text: 'Дает основу для геральдического символа с любым содержимым, по ситуации.'
            }
        ]
    },
    {
        className: 'section',
        columns: [
            {
                h2: 'Основной знак',
                className: 'column width3 border',
            },
            {
                img: './images/logo.png',
                className: 'column width5 center border'
            },
            {
                text: 'Самый самостоятельный знак по-умолчанию.',
                className: 'column width4 border',
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
                className: 'column width3',
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
                img: './images/carpet.png',
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
                img: './images/bracket.png',
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
                colors: true, 
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
                h2: 'Гарнитура',
                buttonRow:[
                    {
                        text: 'OTF'
                    },
                ]
            },
            {
                className: 'column width6 border',
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
                className: 'column width3',
                h2: 'Паттерн',
                text: 'Фирменный стиль может использоватьлюбой визуал.\
                Но также мы разработали генератор паттернов.',
                buttonRow:[
                    {
                        text: 'PNG'
                    }
                ]
            },
            {
                className: 'column width6',
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