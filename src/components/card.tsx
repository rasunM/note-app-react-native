import {Pressable, StyleSheet, Text, View} from 'react-native';
import {CardProps} from '../types/card_props';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Card = ({mykey, title, content, day, month, deleteAction}: CardProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.contentText} numberOfLines={1}>
          {content}
        </Text>
        <View style={styles.dateArea}>
          <Text style={styles.dateText}>{month}</Text>
          <Text style={styles.dateText}>{day}</Text>
        </View>
      </View>
      <Pressable
        onPress={() => {
          const index = mykey;
          deleteAction(index);
        }}>
        <Icon name="delete" style={styles.deleteIcon} size={20} />
      </Pressable>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    padding: 13,
    paddingHorizontal: 25,
  },
  titleText: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 3,
  },
  contentText: {
    fontSize: 13,
    paddingRight: 15,
  },
  dateArea: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 8,
    gap: 6,
  },
  dateText: {
    fontSize: 12,
    color: '#686666',
  },
  deleteIcon: {},
});
