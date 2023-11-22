// import React, { useEffect } from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const Slashscreen = ({ navigation }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.navigate('Login');
//     }, 3000);

//     // Clear the timeout to avoid memory leaks
//     return () => clearTimeout(timer);
//   }, [navigation]);

//   return (
//     <View style={{ flex: 1 }}>
//       <LinearGradient
//         colors={['#fff200', '#ff7b00', '#ffff24', '#72ce27']}
//         start={{ x: 0.2, y: 0.2 }}
//         end={{ x: 0.9, y: 0.8 }}
//         style={{ flex: 1 }}
//       >
//         <View style={{ alignItems: 'center', top: 30 }}>
//           <View
//             style={{
//               height: 100,
//               width: 100,
//               borderRadius: 99,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             <Text style={{ color: 'white', fontWeight: '500' }}>Educations</Text>
//           </View>
//         </View>
//         <View style={{ position: 'absolute', bottom: 0 }}>
//           <Image
//             source={require('../assets/images/tree.png')}
//             resizeMode="contain"
//           />
//         </View>
//       </LinearGradient>
//     </View>
//   );
// };

// export default Slashscreen;

// const styles = StyleSheet.create({});
