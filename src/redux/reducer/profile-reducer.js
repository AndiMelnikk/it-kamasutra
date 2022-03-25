const ADD_POST = "ADD-POST"

let initialState = {
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
}

function profileReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                post: [
                    ...state.post,
                    action.data
                ]
            }

        default:
            return state;
    }
}

export const ADD_POST_ACTION_CREATOR = (data) => ({type: ADD_POST, data})

export default profileReducer