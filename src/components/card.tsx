import { StyleSheet, Text, View } from "react-native"
import { CardProps } from "../types/card_props"

const Card = ({
    title,
    content,
    day,
    month
}: CardProps) => {
    return (
        <View style={styles.container} >
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.contentText} numberOfLines={1}>{content}</Text>
            <View style={styles.dateArea}>
                <Text style={styles.dateText}>{month}</Text>
                <Text style={styles.dateText}>{day}</Text>
            </View>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: '100%',
        height: 100,
        backgroundColor: 'white',       
        borderRadius: 10,
        marginBottom: 15,
        padding: 13
    },
    titleText: {
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 3
    },
    contentText: {
        fontSize: 13,
        
    },
    dateArea: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 8,
        gap: 6
    },
    dateText: {
        fontSize: 12,
        color: '#686666'
    }
})