import { ShowLayout } from '../layout/ShowLayout';
import Loading from '../layout/Loading';
import { getMedia } from '../../services/api';
import { useState, useEffect } from 'react';
import { IMG_URL } from '../../config/api_config';

const ShowScreenContainer = ({ navigation, route }) => {
    const id = route.params.id;
    const mediaType = route.params.type;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log(id)
        getMedia(mediaType, id).then(media => {
            // console.log(media);
            const { title, overview, popularity, release_date, name, first_air_date } = media;
            const data = {
                title: title ? title : name,
                overview,
                popularity,
                releaseDate: release_date ? release_date : first_air_date,
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