import axios from 'axios'
import {api} from '../libs/api'
export const test = async ({ test_id }) => {
    try{
        const result = await api.get('/test/')
        return result
    } catch (error) {
        throw error
    }
}
