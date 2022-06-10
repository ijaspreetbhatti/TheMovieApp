import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { darkBlue, white } from '../../config/colors'
import TabScreen from '../screens/TabScreen'
import ShowScreen from '../screens/ShowScreen'

const Stack = createNativeStackNavigator()

const AppStack = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Movies App'
                component={TabScreen}
                options={{
                    title: 'Movies App',
                    headerStyle: {
                        backgroundColor: darkBlue
                    },
                    headerTitleStyle: {
                        color: white
                    }
                }}
            />
            <Stack.Screen
                name='Show'
                component={ShowScreen}
                options={({ route }) => ({
                    title: route.params.label,
                    headerBackTitle: "Back to List",
                })}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppStack