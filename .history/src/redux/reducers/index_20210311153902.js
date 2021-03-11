import randomMeal from './randomMeal'
import {combineReducers} from 'redux'
import tags from './selectedTags'
import allTags from './allTags'
import sendId from './userid'

export default  combineReducers({
    randomMeal,
    tags,
    allTags,
    sendId
})