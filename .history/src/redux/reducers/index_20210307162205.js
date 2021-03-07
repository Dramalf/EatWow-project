import randomMeal from './randomMeal'
import {combineReducers} from 'redux'
import { randomMeal } from '../reducers/randomMeal'
import {tags} from '../reducers/selectedTags'

export default  combineReducers({
    randomMeal,
    tags
})