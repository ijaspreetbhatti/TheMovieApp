import TabLayout from '../layout/TabLayout';
import { Text } from 'native-base';

const ShowScreenContainer = ({ navigation, route }) => {
    const id = route.params.id;

    return (
        <>
            <Text>{id}</Text>
        </>
    )
}

export default ShowScreenContainer;