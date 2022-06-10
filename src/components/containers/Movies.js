import { useState } from "react";
import MediaTypeForm from "../forms/MediaTypeForm";
import Loading from "../layout/Loading";
import MediaList from "../lists/MediaList";

const movieTypes = [
    { label: "popular", value: "popular" },
    { label: "now playing", value: "now_playing" },
    { label: "top rated", value: "top_rated" },
    { label: "upcoming", value: "upcoming" },
]

const type = "movie";

const Movies = ({ navigation }) => {
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <MediaTypeForm types={movieTypes} type={type} setList={setMovieList} setIsLoading={setIsLoading}></MediaTypeForm>
            {isLoading ? <Loading></Loading> : <MediaList type={type} data={movieList} navigation={navigation}></MediaList>}
        </>
    );
}

export default Movies;