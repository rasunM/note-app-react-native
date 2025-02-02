import { StyleSheet, TouchableOpacity, View } from "react-native"
import  Icon from "react-native-vector-icons/MaterialIcons";
import { FloatingActionProps } from "../types/floating_action_props";

const FloatingActionButton = ({iconName, size}: FloatingActionProps) => {
    return (
        <View style={styles.container}>
            <Icon name={iconName} style={styles.icon} size={size}/>
        </View>
    )
}

export default FloatingActionButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7AF16',
        width: 55,
        height: 55,
        position: 'absolute',
        bottom: 100,
        right: 40,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: 'white'
    }
})