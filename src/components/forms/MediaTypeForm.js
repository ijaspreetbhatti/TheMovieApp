import { Box, Center, FormControl, Select } from "native-base";
import { useState } from "react";
import { getMedia } from "../../services/api";

const MediaTypeForm = (props) => {
    let [type, setType] = useState("");

    const handleChange = (value) => {
        props.setIsLoading(true);
        setType(value);
        getMedia(props.type, type).then(media => {
            const list = media.results.map((m) => {
                return {
                    releaseDate: m.first_air_date ? m.first_air_date : m.release_date,
                    id: m.id,
                    title: m.name ? m.name : m.title,
                    popularity: m.popularity,
                    image: "https://image.tmdb.org/t/p/w500" + m.poster_path
                }
            })
            console.log(list)
            props.setList([...list]);
            props.setIsLoading(false);
        }).catch(error => {
            console.log(error);
            throw error;
        }
        );
    }

    return (
        <Box px={20} py={5}>
            <Center>
                <FormControl>
                    <Select selectedValue={type} minWidth={200} onValueChange={handleChange} placeholder="Select Type">
                        {props.types.map((item, i) => <Select.Item key={i} label={item.label} value={item.value} />)}
                    </Select>
                </FormControl>
            </Center>
        </Box>
    );
};

export default MediaTypeForm;