import { SceneMap, TabView } from "react-native-tab-view";
import { Dimensions, StyleSheet, Animated } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Movies from "../containers/Movies";
import TVShows from "../containers/TVShows";
import Search from "../containers/Search";
import { Box, Pressable, useColorModeValue } from "native-base";
import { darkBlue, gray, lightGray } from "../../config/colors";

export default function TabLayout({ navigation }) {

    const FirstRoute = () => <Movies navigation={navigation}></Movies>;

    const SecondRoute = () => <Search navigation={navigation}></Search>;

    const ThirdRoute = () => <TVShows navigation={navigation}></TVShows>;

    const initialLayout = {
        width: Dimensions.get("window").width
    };

    const renderScene = SceneMap({
        movies: FirstRoute,
        search: SecondRoute,
        tvshows: ThirdRoute,
    });

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'movies', title: 'Movies' },
        { key: 'search', title: 'Search' },
        { key: 'tvshows', title: 'TV Shows' },
    ]);

    const renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        return <Box flexDirection="row">
            {props.navigationState.routes.map((route, i) => {
                const borderColor = index === i ? useColorModeValue(darkBlue, lightGray) : useColorModeValue(lightGray, darkBlue);
                const color = index === i ? useColorModeValue(darkBlue, gray) : useColorModeValue(gray, lightGray);
                return <Box key={i} borderBottomWidth="3" borderColor={borderColor} flex={1} alignItems="center" p="3" cursor="pointer">
                    <Pressable onPress={() => {
                        setIndex(i);
                    }}>
                        <Animated.Text style={{
                            color
                        }}>{route.title}</Animated.Text>
                    </Pressable>
                </Box>;
            })}
        </Box>;
    };

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    },
    scene: {
        flex: 1,
    },
});