import { Button, Flex, FormControl, Icon, Input, Select } from "native-base";
import { useState } from "react";
import { primary } from "../../config/colors";
import { Ionicons } from "@expo/vector-icons";
import { searchMedia } from "../../services/api";
import { IMG_URL } from "../../config/api_config";

const types = ["movie", "multi", "tv"];

const SearchForm = (props) => {
    const [type, setType] = useState("multi");
    const [errors, setErrors] = useState({});
    const [query, setQuery] = useState('');

    const handleChange = (value) => {
        setErrors({});
        setType(value);
    }

    const loadData = () => {
        searchMedia(props.type, type, query).then(media => {
            const results = media.results.map((m) => {
                console.log(m)
                return {
                    releaseDate: m.first_air_date ? m.first_air_date : m.release_date,
                    id: m.id,
                    title: m.name ? m.name : m.title,
                    popularity: m.popularity,
                    image: m.poster_path ? IMG_URL + m.poster_path : null,
                    mediaType: m.media_type ? m.media_type : type
                }
            })
            props.setSearchResults([...results]);
            props.setIsLoading(false);
        })
    }

    const handlePress = (val) => {
        if (query === "") {
            setErrors({ query: true });
        } else {
            setErrors({});
            props.setIsLoading(true);
            loadData();
        }
    }

    return (
        <>
            <FormControl pl={10} pr={10} p={5} isRequired isInvalid={'query' in errors}>
                <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>
                <Input value={query}
                    variant="filled"
                    backgroundColor="gray.200"
                    required={true}
                    placeholder="i.e. James Bond, CSI"
                    InputLeftElement={<Icon as={<Ionicons name="ios-search" />}
                        size={5} ml="2" color="gray.400"
                    />}
                    onChangeText={(val) => {
                        setQuery(val)
                    }}
                >
                </Input>
                <FormControl.Label>Choose Search Type</FormControl.Label>
                <Flex flexDirection={"row"} alignItems="center">
                    <Select defaultValue="multi" value={type} required={true} flex={0.7} mr={3} onValueChange={handleChange}>
                        {types.map((item, i) => <Select.Item key={i} label={item} value={item} />)}
                    </Select>
                    <Button leftIcon={<Icon as={<Ionicons name="ios-search" />} size={7} />} backgroundColor={primary} flex={0.3} onPress={handlePress}>Search</Button>
                </Flex>
                {'query' in errors ?
                    <FormControl.ErrorMessage>Movie/Show is required.</FormControl.ErrorMessage>
                    :
                    <FormControl.HelperText>Please select a search type.</FormControl.HelperText>
                }
            </FormControl>
        </>
    );
};

export default SearchForm;