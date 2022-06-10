import { ShowLayout } from '../layout/ShowLayout';
import { getMedia } from '../../services/api';
import { useState, useEffect } from 'react';
import { IMG_URL } from '../../config/api_config';

import Loading from '../layout/Loading';

const ShowScreenContainer = ({ navigation, route }) => {
    const id = route.params.id;
    const media = route.params.type;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        getMedia(media, id).then(media => {
            const { title, overview, popularity, releaseDate, name, first_air_date } = media;
            const data = {
                title: title ? title : name,
                overview,
                popularity,
                releaseDate: releaseDate ? releaseDate : first_air_date,
                image: IMG_URL + media.poster_path
            };
            setData(data);
            setIsLoading(false);
        })
    }, []);


    return (
        <>
            {isLoading ? <Loading></Loading> : <ShowLayout data={data}></ShowLayout>}
        </>
    )
}

export default ShowScreenContainer;