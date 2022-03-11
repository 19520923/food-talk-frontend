
import { Button,KeyboardAvoidingView,Entypo,Dimensions,Text,Image,TouchableOpacity, ScrollView, TextInput, View, StyleSheet } from 'react-native'
import useLoginUser from './hooks/useLoginUser'
import color from '../../contains/color'
import * as Animatable from 'react-native-animatable';
import InputText from '../InputText';
import InputPass from '../InputPass';

const LoginView = ({navigation}) => {
    const {
        loading,
        error,
        handleLoginUser,
        handlePasswordChange,
        handleEmailChange,
    } = useLoginUser()

    const eventSignInWithGoogle = () => {
        navigation.navigate('HomePage')
      }
    
    const eventSignUp = () => {
        navigation.navigate('SignUp')
    }

    const eventSignIn = () => {
        navigation.navigate('HomePage')
    }

    return (
            <View style={styles.container}>
              <View style={styles.header}>
                <Image
                  //source={require('../../contains//assetImages//background_signIn.jpg')}
                  style={styles.logo}
                  resizeMode='contain'
                  source={{
                    uri: 'https://i.pinimg.com/564x/57/da/ba/57daba61aad2b83b6f8ccbfb6168a0f6.jpg',
                  }}
                />
              </View>
        
              <ScrollView>
                <Animatable.View animation="fadeInUp" duration={1000}>
                  <View style={styles.footer}>
                    <Image
                      source={require('../../contains//assetImages//logoIcon_foodtalk.png')}
                      style={styles.logoIcon}
                      resizeMode='stretch'
                    />
        
                    <Text style={styles.tittle}>TALK - SHARE FOOD </Text>
                    <Text style={[styles.tittle, { marginBottom: 15 }]}>WITH EVERYONE</Text>
        
                    <Text style={styles.intro}>When you want to eat, go to the kitchen with “FOOD TALK” to enjoy the food by yourself and share it with everyone.</Text>
        
                    <InputText inputIcon='mail' inputName='Email' setNameText={handleEmailChange} />
                    <InputPass inputIconLeft='lock' inputName='Password' setPassText={handlePasswordChange} />
                    {error ? 
                      <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorPassword}>Password must be 8 characters long !</Text>
                      </Animatable.View>
                      : null
                    }
                    <Button title= "Login" disabled = {loading} onPress={(e) => handleLoginUser(e, eventSignIn)}> Login </Button>
        
                    <View style={styles.lineView}>
                      <View style={styles.lineFirst}></View>
                      <Text style={styles.lineText}> or </Text>
                      <View style={styles.lineSecond}></View>
                    </View>
        
                    <Button title = "Google"  onPress={(e) => eventSignInWithGoogle(e, navigation)}> Login with Goofle</Button>
        
                    <TouchableOpacity onPress={eventSignUp}>
                      <Text style={{ marginTop: 10, fontFamily: 'Roboto', color: color.textIconSmall, fontWeight: 'bold' }}>New Account ?</Text>
                    </TouchableOpacity>
        
                  </View>
                </Animatable.View >
              </ScrollView >
            </View >
          )
        }
        
        export default LoginView
        
        const { height } = Dimensions.get("screen");
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: color.background,
          },
          header: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          },
          logo: {
            height: height - 200,
            width: height * 1.28,
          },
          logoIcon: {
            height: 71 * 1.2,
            width: 98 * 1.2,
            marginTop: 25,
          },
          footer: {
            flex: 5,
            backgroundColor: color.background,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            alignItems: 'center',
            width: '100%',
          },
          tittle: {
            color: color.textGray,
            fontSize: 26,
            fontFamily: 'Roboto'
          },
          intro: {
            marginHorizontal: 15,
            color: color.textIconSmall,
            fontFamily: 'Roboto',
            marginBottom: 15,
            textAlign: 'center'
          },
          lineView: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          },
          lineFirst: {
            width: '38%',
            height: 1,
            backgroundColor: color.textIconSmall
          },
          lineText: {
            fontSize: 15,
            color: color.textIconSmall,
          },
          lineSecond: {
            width: '38%',
            height: 1,
            backgroundColor: color.textIconSmall,
          },
          errorPassword: {
            color: color.errorColor,
            marginLeft: -30,
            marginTop: -10,
            marginBottom: 10
          }
        })