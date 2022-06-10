import axios from 'axios'
import { API_KEY, BASE_URL } from '../config/api_config'

export const getMedia = async (media, type) => {
    const url = `${BASE_URL}${media}/${type}?api_key=${API_KEY}`

    try {
        console.log(url)
        const response = await axios.get(url)

        const media = response.data

        console.log(type, media)

        return media
    } catch (error) {
        throw error
    }
}