import { Box, Center, Text } from "native-base";
import { StyleSheet } from "react-native";

const PreSearchMessage = () => {
    return (
        <Box height={300}>
            <Center flex={1}>
                <Text style={styles.message}>Please initiate a search</Text>
            </Center>
        </Box >
    )
}

export default PreSearchMessage;

const styles = StyleSheet.create({
    message: {
        fontWeight: "bold",
        fontSize: 24,
        paddingTop: 10,
    }
})