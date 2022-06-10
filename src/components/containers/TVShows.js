import { useState } from "react";
import MediaTypeForm from "../forms/MediaTypeForm";
import Loading from "../layout/Loading";
import MediaList from "../lists/MediaList";

const tvShowsTypes = [
    { label: "airing today", value: "airing_today" },
    { label: "on the air", value: "on_the_air" },
    { label: "popular", value: "popular" },
    { label: "top rated", value: "top_rated" },
]

const type = "tv";

const TVShows = ({ navigation }) => {
    const [tvList, setTvList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <MediaTypeForm types={tvShowsTypes} type={type} setList={setTvList} setIsLoading={setIsLoading}></MediaTypeForm>
            {isLoading ? <Loading></Loading> : <MediaList type={type} data={tvList} navigation={navigation}></MediaList>}

        </>
    );
}

export default TVShows;