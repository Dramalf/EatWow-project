export default function sendId (state = {  }, action){
    switch (action.type) {
        case "ID":
            return ({ id:action.data } )
        default:
            return state
    } 
}