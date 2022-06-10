import { FlatList } from "native-base";
import { MediaItem } from "../listItem/MediaItem";

const MediaList = ({ data, navigation, type }) => {

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <MediaItem
                    image={item.image}
                    title={item.title}
                    navigation={navigation}
                    popularity={item.popularity}
                    releaseDate={item.releaseDate}
                    id={item.id}
                    type={type}
                    mediaType={item.mediaType}
                />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
        />
    );
}

export default MediaList;