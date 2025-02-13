import React from 'react';
import {
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';
import CredentialsButton from '../../components/CredentialsButton';
import CustomButton from '../../components/CustomButton';
import InputFieldCustom from '../../components/InputFieldCustom';
const {width, height} = Dimensions.get('window');
function RegisterPage() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assests/auth.png')}
        style={styles.image}
      />
      <Text style={{fontWeight: '900', fontSize: 25}}>Let's Get Started</Text>
      <Text style={{color: 'grey', fontWeight: '500', fontSize: 14}}>
        Create an account to register with Notes App
      </Text>
      <View style={styles.textFieldArea}>
        <InputFieldCustom
          icon="person"
          borderEnabled={true}
          placeholder="example@gmail.com"
        />
        <InputFieldCustom
          icon="lock"
          borderEnabled={false}
          placeholder="password"
        />
        <InputFieldCustom
          icon="lock"
          borderEnabled={false}
          placeholder="Confirm password"
        />
      </View>
      <CustomButton />
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 25,
          gap: 5,
        }}>
        <Text>Already have an account</Text>
        <Pressable>
          <Text
            style={{color: '#1750BB', fontWeight: '700', cursor: 'pointer'}}>
            Login here
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
  },
  image: {
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: 20,
    backgroundColor: '#EEEEEE',
  },
  textFieldArea: {
    marginHorizontal: 20,
  },
  credentailSection: {
    flexDirection: 'row',
    gap: 18,
  },
});
