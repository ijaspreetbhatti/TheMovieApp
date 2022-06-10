import { useState } from "react";
import MediaTypeForm from "../forms/MediaTypeForm";
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

    return (
        <>
            <MediaTypeForm types={movieTypes} type={type} setList={setMovieList}></MediaTypeForm>
            <MediaList type={type} data={movieList} navigation={navigation}></MediaList>
        </>
    );
}

export default Movies;