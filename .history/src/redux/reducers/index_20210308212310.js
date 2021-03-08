import randomMeal from './randomMeal'
import {combineReducers} from 'redux'
import tags from './selectedTags'
import allTags from './allTags'

export default  combineReducers({
    randomMeal,
    tags,
    allTags
})