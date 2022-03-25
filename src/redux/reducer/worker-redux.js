const UPDATE_FOLLOWED = "UPDATE-FOLLOWED"

const initStare = {
    worker: [
        {
            id: 1,
            profileImg: "https://i.pinimg.com/originals/aa/01/39/aa0139b260f3edebb46dc1bd2e7a1117.jpg",
            rating: 4,
            fullName: "Andriy",
            bio: "Я роблю що вважаю сам за правильне. Немає привильно чи не правильно.",
            followed: false,
            work: {
                city: "Kiev",
                country: "Підприємець"
            }
        }, {
            id: 2,
            profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbhgWUjr6zmHiGE6iuh7lPJBB4" +
                    "ERi3cklIW9JsY1pjIicv0e9H5AWDbw2Nyxz0JCgGKi8&usqp=CAU",
            rating: 3,
            fullName: "Vlad",
            bio: "Живе щасливим життям той, хто долає страх.",
            followed: true,
            work: {
                city: "Lutsk",
                country: "Дизайнер"
            }
        }, {
            id: 3,
            profileImg: "https://photocasa.ru/uploads/posts/2014-08/1409349431_polina-7945.jpg",
            rating: 2,
            fullName: "Dasha",
            bio: "Страшно лише до мометну коли почати це робити.",
            followed: true,
            work: {
                city: "Kharkiv",
                country: "Лікар"
            }
        }
    ]
}

// https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&apiKey=fd4bfdb11df241baaae3f31c75e23ebd

function workerRedux(state = initStare, action) {

    switch (action.type) {
        case UPDATE_FOLLOWED:
            return {
                ...state,
                worker: state
                    .worker
                    .map(w => {
                        if (action.id === w.id) {
                            return {
                                ...w,
                                followed: !w.followed
                            }
                        }
                        return w
                    })
            }

        default:
            return state
    }

}


export const followed = (id) => ({type: UPDATE_FOLLOWED, id})

export default workerRedux