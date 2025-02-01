import { useState } from "react"
import { StyleSheet, TextInput, View } from "react-native"
import Icon  from "react-native-vector-icons/MaterialIcons"

const Search_Bar = () => {

    const [text, setText] = useState<string>("");

    const onPressClear = () => {
        setText("");
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Icon name="search" size={18} color='#8B8B8B' style={styles.iconSearch}/>
                <TextInput 
                style={styles.textContainer} 
                placeholder="Search notes" 
                onChangeText={(value) => {
                    setText(value)
                }}
                value={text}
                />
                {text && <Icon name="close" size={18} color='#8B8B8B' style={styles.iconClose} onPress={onPressClear}/>}
            </View>
        </View>
    )
}

export default Search_Bar

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 35,
        marginVertical: 15,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 40,
        backgroundColor: '#DADADA',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 100
    },
    iconSearch: {
        marginHorizontal:5,
        marginLeft: 30
    },
    iconClose: {},
    textContainer : {
        width: "100%",
        height: "100%",
        backgroundColor: '#DADADA',
        borderRadius: 100,
    },

})