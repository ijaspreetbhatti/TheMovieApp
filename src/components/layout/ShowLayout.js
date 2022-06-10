import { VStack, Image, Text } from "native-base"
import { StyleSheet } from "react-native"
import { blueGray } from "../../config/colors";

export const ShowLayout = (props) => {
    const { title, image, overview, popularity, releaseDate } = props.data;
    return (
        <VStack space={5} flexDirection="column" alignItems="center" flex={1} pl={12} pr={12}>
            <Text style={styles.title} mt={12} mb={4}>{title}</Text>
            <Image alt={title} source={{ uri: image }} size={"2xl"}></Image>
            <Text style={styles.overview}>{overview}</Text>
            <Text style={styles.data}>Popularity: {popularity} | Release Date: {releaseDate}</Text>
        </VStack>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Helvetica Neue',
        color: blueGray["100"],
    },
    overview: {
        fontFamily: 'Helvetica Neue',
        color: blueGray["200"],
        width: '100%'
    },
    data: {
        fontFamily: 'Helvetica Neue',
        color: blueGray["300"],
        fontSize: 12,
        width: '100%',
        textAlign: 'left'
    }
})