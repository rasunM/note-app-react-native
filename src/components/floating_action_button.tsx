import { StyleSheet, TouchableOpacity, View } from "react-native"
import  Icon from "react-native-vector-icons/MaterialIcons";

const FloatingActionButton = () => {
    return (
        <View style={styles.container}>
            <Icon name="add" style={styles.icon} size={35}/>
        </View>
    )
}

export default FloatingActionButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7B708',
        width: 55,
        height: 55,
        position: 'absolute',
        bottom: 40,
        right: 40,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: 'white'
    }
})