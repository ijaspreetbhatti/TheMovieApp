import SearchForm from "../forms/SearchForm";
import MediaList from "../lists/MediaList"
import { useState } from "react";
import PreSearchMessage from "../layout/PreSearchMessage";
import Loading from "../layout/Loading";

const type = "search";

const Search = ({ navigation }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <SearchForm setSearchResults={setSearchResults} setIsLoading={setIsLoading} type={type} ></SearchForm>
            {
                isLoading ? <Loading></Loading> : (searchResults.length > 0 ?
                    <MediaList data={searchResults} navigation={navigation}></MediaList> :
                    <PreSearchMessage></PreSearchMessage>)
            }
        </>
    );
}

export default Search;