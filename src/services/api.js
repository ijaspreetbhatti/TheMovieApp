import axios from 'axios'
import { API_KEY, BASE_URL } from '../config/api_config'

export const getMedia = async (media, type) => {
    const url = `${BASE_URL}${media}/${type}?api_key=${API_KEY}`
    console.log(url)

    try {
        const response = await axios.get(url)
        const media = response.data

        return media
    } catch (error) {
        throw error
    }
}

export const searchMedia = async (media, type, query) => {
    const url = `${BASE_URL}${media}/${type}?api_key=${API_KEY}&query=${query}`

    try {
        const response = await axios.get(url)
        const media = response.data

        return media
    } catch (error) {
        throw error
    }
}