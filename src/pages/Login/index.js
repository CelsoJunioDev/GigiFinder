import React, {useState, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  Keyboard,
} from 'react-native';
import Logo from '../../assets/logoBlack.png'

export default({navigation}) => {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState(new Animated.Value(0));

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {    

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 0,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{
            width: 225,
            height: 200,
          }}
          source={Logo}
          resizeMode="contain"
        />
      </View>

      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{translateY: offset.y}],
          },
        ]}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          autoCorrect={false}
          onChangeText={(email) => setEmail(email)}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          autoCorrect={false}
          onChangeText={(senha) => setSenha(senha)}
        />

        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() => navigation.navigate('MainTab')}
          >
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnRegister}
          >
          <Text style={styles.registerText}>Criar conta</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#006766',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#35aaff',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText: {
    color: '#FFF',
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#FFF',
  },
});



// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   KeyboardAvoidingView,
//   StyleSheet,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   Text,
//   Animated,
//   Keyboard,
// } from 'react-native';
// import Logo from '../../assets/logoBlack.png'

// export default({navigation}) => {
//   const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
//   const [opacity] = useState(new Animated.Value(0));
//   const [logo] = useState(new Animated.ValueXY({x: 230, y: 255}));

//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');

//   useEffect(() => {
//     keyboardDidShowListener = Keyboard.addListener(
//       'keyboardDidShow',
//       keyboardDidShow,
//     );
//     keyboardDidHideListener = Keyboard.addListener(
//       'keyboardDidHide',
//       keyboardDidHide,
//     );

//     Animated.parallel([
//       Animated.spring(offset.y, {
//         toValue: 0,
//         speed: 4,
//         bounciness: 0,
//         useNativeDriver: true,
//       }),
//       Animated.timing(opacity, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   }, []);

//   function keyboardDidShow() {
//     Animated.parallel([
//       Animated.timing(logo.x, {
//         useNativeDriver: false,
//         toValue: 105,
//         duration: 90,
//       }),
//       Animated.timing(logo.y, {
//         useNativeDriver: false,
//         toValue: 115,
//         duration: 100,
//       }),
//     ]).start();
//   }

//   function keyboardDidHide() {

//     Animated.parallel([
//       Animated.timing(logo.x, {
//         useNativeDriver: false,
//         toValue: 230,
//         duration: 100,
//       }),
//       Animated.timing(logo.y, {
//         useNativeDriver: false,
//         toValue: 255,
//         duration: 100,
//       }),
//     ]).start();

//   }

//   return (
//     <KeyboardAvoidingView style={styles.background}>
//       <View style={styles.containerLogo}>
//         <Animated.Image
//           style={{
//             width: logo.x,
//             height: logo.y,
//           }}
//           source={Logo}
//           resizeMode="contain"
//         />
//       </View>

//       <Animated.View
//         style={[
//           styles.container,
//           {
//             opacity: opacity,
//             transform: [{translateY: offset.y}],
//           },
//         ]}>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           autoCorrect={false}
//           onChangeText={(email) => setEmail(email)}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Senha"
//           value={senha}
//           autoCorrect={false}
//           onChangeText={(senha) => setSenha(senha)}
//         />

//         <TouchableOpacity
//           style={styles.btnSubmit}
//           onPress={() => navigation.navigate('MainTab')}
//           >
//           <Text style={styles.submitText}>Acessar</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.btnRegister}
//           >
//           <Text style={styles.registerText}>Criar conta</Text>
//         </TouchableOpacity>
//       </Animated.View>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#006766',
//   },
//   containerLogo: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '90%',
//     paddingBottom: 50,
//   },
//   input: {
//     backgroundColor: '#FFF',
//     width: '90%',
//     marginBottom: 15,
//     color: '#222',
//     fontSize: 17,
//     borderRadius: 7,
//     padding: 10,
//   },
//   btnSubmit: {
//     backgroundColor: '#35aaff',
//     width: '90%',
//     height: 45,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 7,
//   },
//   submitText: {
//     color: '#FFF',
//     fontSize: 18,
//   },
//   btnRegister: {
//     marginTop: 10,
//   },
//   registerText: {
//     color: '#FFF',
//   },
// });
