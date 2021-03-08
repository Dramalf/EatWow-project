export default function allTags (state = [], action){
    switch (action.type) {
        case "ALLTAGS":
            return ({ ...action.data })
        default:
            return state
    } 
}