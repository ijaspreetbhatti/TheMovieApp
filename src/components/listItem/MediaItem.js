import { Box, Button, Center, Container, Flex, HStack, Image, Text, VStack } from "native-base"
import { StyleSheet } from "react-native"
import { lightGray, primary } from "../../config/colors"

export const MediaItem = ({ image, title, navigation, popularity, releaseDate, id, type }) => {
    return (
        <Flex borderBottomWidth={1} borderBottomColor={lightGray} space={2} padding={2} flexDirection="row" alignItems="center" justifyContent="flex-start" width="100%">
            <Image alt={title} source={{ uri: image }} size={"lg"} ml={3} mr={3} ></Image>
            <Flex flex="1" flexDirection="column" alignItems="flex-start" justifyContent="center">
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>Popularity: {popularity}</Text>
                <Text style={styles.description}>Release Date: {releaseDate}</Text>
                <Button
                    width="80%"
                    backgroundColor={primary}
                    onPress={() =>
                        navigation.navigate('Show', {
                            label: title,
                            id,
                            type
                        })}
                >More Details</Button>
            </Flex>
        </Flex >
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 12
    },
})