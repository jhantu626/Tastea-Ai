import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {fonts} from '../../utils/fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {authService} from '../../service/AuthService';
import {AuthContext} from '../../context/AuthContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ALERT_TYPE, Dialog, Toast} from 'react-native-alert-notification';

const Signup = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [isPassword2, setIsPassword2] = useState(true);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  //Error State
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const {login} = useContext(AuthContext);

  const validateEmail = email => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSignup = async () => {
    setIsLoading(true);
    try {
      if (!validateEmail(email)) {
        setEmailError('Enter a valid email?');
        return;
      } else {
        setEmailError('');
      }
      if (password === '') {
        setPasswordError('!Enter password?');
        return;
      }
      if (password === '') {
        setPasswordError('Enter confirmed password?');
        return;
      }
      if (password.length < 6) {
        setPasswordError('Password must be at least 6 characters');
        return;
      }
      if (password !== confirmedPassword) {
        setPasswordError('Password do not match?');
        return;
      } else {
        setEmailError('');
      }

      const data = await authService.signup({email: email, password: password});

      console.log(data);
      if (data?.status) {
        await login({token: data?.token});
      } else {
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: 'Signup Failed',
          textBody: data?.message,
          button: 'Close'
        });
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={styles.headerContainer}>
        <View>
          <Image
            source={require('./../../../assets/images/logoIcons/logo.png')}
          />
        </View>
        <Text style={styles.loginText}>Signup</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputParent}>
          <MaterialCommunityIcons color={colors.theme} name="email" size={28} />
          <TextInput
            keyboardType="email-address"
            onChangeText={e => setEmail(e)}
            value={email}
            style={styles.inputBox}
            placeholder="Enter your email"
          />
        </View>
        {emailError === '' ? null : (
          <Text
            style={{
              color: 'red',
              marginTop: -5,
              marginLeft: 10,
              fontFamily: fonts.medium,
            }}>
            <MaterialIcons name="error" />
            {emailError}
          </Text>
        )}

        <View style={styles.inputParent}>
          <MaterialCommunityIcons
            color={colors.theme}
            name="account-key"
            size={28}
          />
          <TextInput
            value={password}
            onChangeText={e => setPassword(e)}
            secureTextEntry={isPassword}
            style={styles.inputBox}
            placeholder="Enter your password?"
          />
          <TouchableOpacity onPress={() => setIsPassword(prev => !prev)}>
            <MaterialCommunityIcons
              name={isPassword ? 'eye-off' : 'eye'}
              size={24}
              color={colors.theme}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputParent}>
          <MaterialCommunityIcons
            color={colors.theme}
            name="account-key"
            size={28}
          />
          <TextInput
            value={confirmedPassword}
            onChangeText={e => setConfirmedPassword(e)}
            secureTextEntry={isPassword2}
            style={styles.inputBox}
            placeholder="Enter confirm password?"
          />
          <TouchableOpacity onPress={() => setIsPassword2(prev => !prev)}>
            <MaterialCommunityIcons
              name={isPassword2 ? 'eye-off' : 'eye'}
              size={24}
              color={colors.theme}
            />
          </TouchableOpacity>
        </View>
        {passwordError === '' ? null : (
          <Text style={{color: 'red', fontFamily: fonts.medium}}>
            <MaterialIcons name="error" />
            {passwordError}
          </Text>
        )}
      </View>
      <TouchableOpacity
        onPress={handleSignup}
        disabled={isLoading}
        style={styles.loginBtn}>
        {isLoading ? (
          <ActivityIndicator color={'#fff'} size={'large'} />
        ) : (
          <Text style={{color: '#fff', fontSize: 20, fontFamily: fonts.medium}}>
            Signup
          </Text>
        )}
      </TouchableOpacity>
      <View style={styles.haveAccount}>
        <Text style={{fontFamily: fonts.regular, fontSize: 16}}>
          Already have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              fontFamily: fonts.medium,
              fontSize: 16,
              color: colors.theme,
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.oAuthContainer}>
        <TouchableOpacity
          style={[styles.oAuthBtn, {borderWidth: 1, borderColor: '#94a3b8'}]}>
          <Image
            source={require('./../../../assets/images/logoIcons/google.png')}
          />
          <Text style={{fontSize: 16, fontFamily: fonts.medium}}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.oAuthBtn, {backgroundColor: '#575A9C'}]}>
          <Image
            source={require('./../../../assets/images/logoIcons/facebook.png')}
          />
          <Text style={{fontSize: 16, fontFamily: fonts.medium, color: '#fff'}}>
            Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  oAuthBtn: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    borderRadius: 12,
  },
  oAuthContainer: {
    marginHorizontal: 20,
    flexDirection: 'column',
    gap: 10,
  },
  haveAccount: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginBtn: {
    marginHorizontal: 20,
    backgroundColor: colors.theme,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  inputBox: {
    flex: 1,
    fontSize: 17,
    fontFamily: fonts.medium,
    color: colors.theme,
  },
  inputParent: {
    flexDirection: 'row',
    marginVertical: 10,
    height: 50,
    borderColor: colors.theme,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  formContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 10,
  },
  loginText: {
    fontSize: 30,
    fontFamily: fonts.medium,
    letterSpacing: 1.2,
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default Signup;
