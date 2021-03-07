export default function Tags (state = {  }, action){
    switch (action.type) {
        case "TAGS":
            return (action.data)
        default:
            return state
    } 
}