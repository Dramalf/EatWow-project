export default function allTags (state = [], action){
    switch (action.type) {
        case "ALLTAGS":
            return ({ tags:[...action.data ] })
        default:
            return state
    } 
}