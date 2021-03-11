export default function sendId (state = {  }, action){
    switch (action.type) {
        case "ID":
            return (action.data )
        default:
            return state
    } 
}