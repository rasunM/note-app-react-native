import {
  Button,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import InputFieldCustom from '../../components/InputFieldCustom';
import CustomButton from '../../components/CustomButton';
import CredentialsButton from '../../components/CredentialsButton';

const {width, height} = Dimensions.get('window');

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assests/auth.png')}
        style={styles.image}
      />
      <Text style={{fontWeight: '900', fontSize: 25}}>Welcome back!</Text>
      <Text style={{color: 'grey', fontWeight: '500', fontSize: 14}}>
        Log in to your Notes App Account
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
      </View>
      <CustomButton />
      <Text style={{color: 'grey', marginVertical: 15}}>Or connect using</Text>
      <View style={styles.credentailSection}>
        <CredentialsButton
          logo={require('../../../assests/facebook.png')}
          title="Facebook"
          bgColor="#9CBDE4"
        />
        <CredentialsButton
          logo={require('../../../assests/google.png')}
          title="Google"
          bgColor="#DF9A80"
        />
      </View>
      <View style={{flexDirection: 'row', marginVertical: 15, gap: 5}}>
        <Text >Don't have an account</Text>
        <Pressable>
          <Text style={{color: "#1750BB", fontWeight: '700', cursor: 'pointer'}}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginPage;

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
