import { StatusBar } from 'expo-status-bar';
import {Linking, StyleSheet, View} from 'react-native';
import Button from "./Button";

export default function App() {

    const openAllyScanScreen = async () => {
        const url = 'carexs://scan';  // Use full URL with host
        await Linking.openURL(url).catch(err => console.log('handle error',err));
    }
    return (
        <View style={styles.container}>
            <Button style={styles.buttonLabel} onPress={openAllyScanScreen} title={"Ally Scan Screen"}></Button>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#fff',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonLabel: {
        color: '#000',
        display:'flex',
        justifyContent:'center',
    }
});
