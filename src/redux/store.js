import profileReducer from './reducer/profile-reducer';
import dialogReducer from './reducer/dialog-reducer';

let store = {
    _state: {
        profilePages: {
            header: {
                name: "Andriy Melnik",
                img: "https://ied.eu/wp-content/uploads/2018/04/entrepreneur-1.jpg",
                imgFon: "https://st.depositphotos.com/1333205/2857/i/600/depositphotos_28571959-stock-pho" +
                    "to-farm-building.jpg",
                skill: [
                    {
                        id: 1,
                        type: "stting",
                        name: "Спеціальність",
                        describe: "Web-розробник",
                        option: {}
                    }, {
                        id: 2,
                        type: "string",
                        name: "Іноземні мови",
                        describe: "Ангілйська - Німецька - Польська",
                        option: {}
                    }, {
                        id: 3,
                        type: "site",
                        name: "Портфоліо",
                        describe: "Doctype.site",
                        option: {
                            link: "doctype.site"
                        }
                    }, {
                        id: 4,
                        type: "string",
                        name: "Досвід",
                        describe: "2 роки",
                        option: {}
                    }
                ]
            },
            post: [
                {
                    id: 1,
                    title: "Пропав телефон",
                    describe: "There was a time when we sailed on together Once had a dream that we shared on t" +
                        "he way There was a place where we used to seek shelter I never knew the pain of " +
                        "the price I would pay You led me on with a cloak and a dagger And I didn't know " +
                        "you had made other plans You had me believe we were meant for forever I really t" +
                        "hought my heart would be safe in your hands Lorelei My ship has passed you by An" +
                        "d though you promised me to show the way You led me astray You were my lorelei W" +
                        "hat kind of fool was I Cause I believed in every word you said And now I wonder " +
                        "why Lorelei",
                    img: "https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6" +
                        "e5fb8d27136e95/i/p/iphone-12-purple_1_.jpeg",
                    time: "10:35",
                    date: "2022.02.12",
                    name: "Андрій",
                    commentNumber: 5,
                    likeCountry: 12
                }, {
                    id: 2,
                    title: "Знайшов телефон",
                    describe: "There was a time when we sailed on together Once had a dream that we shared on t" +
                        "he way There was a place where we used to seek shelter I never knew the pain of " +
                        "the price I would pay You led me on with a cloak and a dagger And I didn't know " +
                        "you had made other plans You had me believe we were meant for forever I really t" +
                        "hought my heart would be safe in your hands Lorelei My ship has passed you by An" +
                        "d though you promised me to show the way You led me astray You were my lorelei W" +
                        "hat kind of fool was I Cause I believed in every word you said And now I wonder " +
                        "why Lorelei",
                    img: "https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6" +
                        "e5fb8d27136e95/i/p/iphone-12-purple_1_.jpeg",
                    time: "14:12",
                    date: "2022.02.12",
                    name: "Вітя",
                    commentNumber: 2,
                    likeCountry: 5
                }
            ]
        },
        newsPages: {},
        dialogPages: {
            dialog: [
                {
                    id: 1,
                    title: "Топ Менеджери",
                    icon: "https://image.shutterstock.com/image-vector/office-manager-vector-icon-260nw-134" +
                        "3432579.jpg",
                    lastMessages: "Акції стімко піднімаються вгору, саме час їх продавати"
                }, {
                    id: 2,
                    title: "Бугалтерія",
                    icon: "https://cdn-icons-png.flaticon.com/512/2317/2317897.png",
                    lastMessages: "Цього місяця ми ідем на 3% краще ніж минулого"
                }, {
                    id: 3,
                    title: "Постачальники",
                    icon: "https://icon-library.com/images/provider-icon/provider-icon-6.jpg",
                    lastMessages: "Доствавка сировини затримуються на 3 дні"
                }, {
                    id: 4,
                    title: "Інвестори",
                    icon: "https://cdn-icons-png.flaticon.com/512/4988/4988672.png",
                    lastMessages: "Мені подобаєтстся робота за цей місяць"
                }
            ],
            chatMessages: [],
            messages_input_text: ''
        },
        notificationPages: {},
        workerPages: {},
        settingsPages: {}
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        this
            .getState()
            .profilePages = profileReducer(this.getState().profilePages, action)
        this
            .getState()
            .dialogPages = dialogReducer(this.getState().dialogPages, action)
    }
}
window.t = store

export default store