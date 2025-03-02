import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import CredentialsButton from '../../components/CredentialsButton';
import CustomButton from '../../components/CustomButton';
import InputFieldCustom from '../../components/InputFieldCustom';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../types/root_stack_params';

import auth from '@react-native-firebase/auth';

const {width, height} = Dimensions.get('window');

type RegisterPageProps = NativeStackScreenProps<
  RootStackParamsList,
  'Register'
>;

function RegisterPage({navigation}: RegisterPageProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleDataFromEmail = (emailValue: string): void => {
    setEmail(emailValue);
  };

  const handleDataFromPassword = (passwordValue: string): void => {
    setPassword(passwordValue);
  };

  const signIn = async () => {
    // auth()
    //   .createUserWithEmailAndPassword(
    //     'jane.doe@example.com',
    //     'SuperSecretPassword!',
    //   )
    //   .then(() => {
    //     console.log('User account created & signed in!');
    //   })
    //   .catch(error => {
    //     if (error.code === 'auth/email-already-in-use') {
    //       console.log('That email address is already in use!');
    //     }

    //     if (error.code === 'auth/invalid-email') {
    //       console.log('That email address is invalid!');
    //     }

    //     console.error(error);
    //   });
  };

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
      {/* Dummy Text Area */}
      <Text>Email: {email}</Text>
      <Text>Passwordmn: {password}</Text>
      <View style={styles.textFieldArea}>
        <InputFieldCustom
          icon="person"
          borderEnabled={true}
          placeholder="example@gmail.com"
          onClickData={handleDataFromEmail}
        />
        <InputFieldCustom
          icon="lock"
          borderEnabled={false}
          placeholder="password"
          onClickData={handleDataFromPassword}
        />
        {/* <InputFieldCustom
          icon="lock"
          borderEnabled={false}
          placeholder="Confirm password"
        /> */}
      </View>
      <Pressable onPress={signIn}>
        <CustomButton title="CREATE ACCOUNT" />
      </Pressable>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 25,
          gap: 5,
        }}>
        <Text>Already have an account?</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('TaskPage');
          }}>
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
