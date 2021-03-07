export default function randomMeal (state = {  }, action){
    switch (action.type) {
        case "MEAL":
            return ({ ...action.data })
        default:
            return state
    } 
}