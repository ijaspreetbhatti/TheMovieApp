import { Box, Center, FormControl, Select } from "native-base";
import { useState } from "react";
import { getMedia } from "../../services/api";
import { IMG_URL } from "../../config/api_config"

const MediaTypeForm = (props) => {
    let [type, setType] = useState("popular");

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
                    image: IMG_URL + m.poster_path
                }
            })
            props.setList([...list]);
            props.setIsLoading(false);
        }).catch(error => {
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