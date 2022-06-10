import { useState } from "react";
import MediaTypeForm from "../forms/MediaTypeForm";
import MediaList from "../lists/MediaList";

const tvShowsTypes = [
    { label: "airing today", value: "airing_today" },
    { label: "on the air", value: "on_the_air" },
    { label: "popular", value: "popular" },
    { label: "top rated", value: "top_rated" },
]

const type = "tv";

const TVShows = () => {
    const [tvList, setTvList] = useState([]);

    return (
        <>
            <MediaTypeForm types={tvShowsTypes} type={type} setList={setTvList}></MediaTypeForm>
            <MediaList type={type} data={tvList}></MediaList>
        </>
    );
}

export default TVShows;