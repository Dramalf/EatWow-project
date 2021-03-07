import randomMeal from './randomMeal'
import {combineReducers} from 'redux'
import tags from './selectedTags'

export default  combineReducers({
    randomMeal,
    tags
})