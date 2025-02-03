import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';

const MapsCustom = () => {
  return (
    <View style={styles.map}>
      <Text>This is the map view</Text>
    </View>
  );
};

export default MapsCustom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
