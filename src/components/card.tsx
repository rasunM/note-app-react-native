import { StyleSheet, Text, View } from "react-native"
import { CardProps } from "../types/card_props"

const Card = ({
    title,
    content,
    day,
    month
}: CardProps) => {
    return (
        <View>
            <Text>This is the Text</Text>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        color: 'white',
        elevation: 5,
    },
    titleText: {

    },
    contentText: {

    },
    dateText: {

    }
})