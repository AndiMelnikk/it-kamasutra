import {updateNews} from "../../apiAxios/newsPages";

const LIST_DISH = "LIST-DISH";
const UPDATE_LIST_NEWS = "UPDATE-LIST-NEWS"

let initStare = {
    listDish: [],
    listClassesPost: {
        postClass: ["bigPost", "verticalPost", "verticalPost_2", "horizonPost", "smallHorizonPost", "bigHorizonPost", "miniHorizonPost"],
        newsBlock: ["blockNews_1"]
    },
    numberNews: 7,
    numberBlockCss: 1,
    pagesNews: 1,
    buttonDisabled: false,
    bob: []
}

function NewsReducer(state = initStare, action) {

    switch (action.type) {
        case LIST_DISH:
            return {
                ...state
            }
        case UPDATE_LIST_NEWS:
            let newPages = action.pages + 1;
            let classBlock = state.listClassesPost.newsBlock.length % 2 === 0 ? "blockNews_1" : "blockNews_2"

            updateNews(0)


            return {
                ...state,
                pagesNews: newPages,
                // buttonDisabled: !state.buttonDisabled,
                listClassesPost: {
                    ...state.listClassesPost,
                    newsBlock: [...state.listClassesPost.newsBlock, classBlock]
                }
            }
        default:
            return state
    }

}

export const UPDATE_LIST_NEWS_AC = (pages) => ({type: UPDATE_LIST_NEWS, pages})

export default NewsReducer;