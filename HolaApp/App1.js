// import React from "react"
// import {View, Text} from "react-native"

// const App = () => {
//   return (
//     <View style ={{width: 100,
//         height: 100,
//         backgroundColor: "red",}}> 
//       </View>
//   )
// }
// export default  App
//--------------------------------------------------------//



//  import React from "react"
// import {View, Text} from "react-native"
// const App = () => {
//   return (
//      <View style ={{width: 100,
//         height: 50,
//          backgroundColor: "red",}}> 
//        </View>
//    )import React from "react"

//  }

//  export default  App
//-------------------------------------------//
// import {View, Text} from "react-native"
// const App = () => {
//   return (
//      <View style ={{
//       width: 100,
//         height: 100,
//         borderRadius: 100/2,
//         backgroundColor: "red",}}> 
//        </View>
//    )
//  }

//  export default  App
//-------------------------------------------------------------//

// import { View, Text } from "react-native"
// const App = () => {
//   return (
//     <View style={{ width: "100%", alignItems: "center" }}>
//       <View style={{
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//         backgroundColor: "red",
//         paddingLeft: 50,
//         transform: [{ scaleX: 2 }]
//       }}>
//       </View>
//     </View>
//   )
// }

// export default App
//-------------------------------------------------------//

// import {View, Text} from "react-native"
// const App = () => {
//   return (
//      <View style ={{width: 100,
//         height: 100,
//         borderRadius: 50,
//         backgroundColor: "red",
//         transform: [{scaleY:2}]}}> 
//        </View>
//    )
//  }

//  export default  App
//----------------------------------------------------------------//


//text
// import { View, Text } from "react-native"
// const App = () => {
//   return (
//     <View>
//       <Text style={{ frontWeight: 'bold' }}>
//         I am bold
//         <Text style={{ color: 'red' }}>and red</Text>
//       </Text>
//     </View>
//   )
// }

// export default App
//-----------------------------------------------------------------------------//

// import React from "react"; 
// import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
// import { LOGO } from "./constants";
//  const App = () => {
//      return (
//         <View style= {style.container}>
//             <View style= {style.form}>
//                 <Image source={{uri:LOGO}} style={style.image}/>
//                 <TextInput
//                 placeholder="Email"
//                 style={style.textField}/>
//                 <TextInput
//                 placeholder="Password"
//                 style={style.textField}/>
//                 <Text style={{color:'black'}}>forgot password?</Text>
//                 <View style={style.loginButton}>
//                 <Text style={{color:'black'}}>Login</Text>
//                 </View>
//             </View>
//         </View>
//     );   
// };
// const style =StyleSheet.create({
//     container:{
//         height:'100%',
//         width:'100%',
//         backgroundColor:'white',
//         alignItems: 'center',
//         justifyContent:'center'
//     },
//     form: {
//         width: '80%',
//         alignItems: 'center'
//     },
//     image:{
//         height: 150,
//         width: 150,
//         borderRadius:75,
//     },
//     textField: {
//         backgroundColor: 'pink',
//         borderRadius: 20,
//         height: 40,
//         width: '80%',
//         marginTop: '5%'
//     },
//     forgotpassword: {
//         marginTop:'5%',
//         marginBottom: '10%',
//         color: 'black'
//     },
//     loginButton: {
//         height: 50,
//         width:300,
//         backgroundColor:'#f5499f',
//         alignItems:'center',
//         justifyContent:'center',
//         marginTop:'20%',
//         borderRadius: 25,
//     },
// });
// export default App
// //------------------------------------------------------------------------------------------------------------------//




//   import React from "react";
//  import { Image, StyleSheet, Text, TextInput, View } from "react-native";
//  import { LOGO } from "./constants"; 
// const App = () => {
//      return (
//          <View style={style.container}>
//              <View style={style.form}>
//                  <Image source={{ uri: LOGO }}style= {style.image} />
                
//                 <Text style={style.createAccount}>Create Your account</Text>
//              <Text style={ style.createAccountText } >create an account to view and manage your projects</Text>
//              <TextInput
//                  placeholder="Email"
//                  placeholderTextColor={"gray"}
//                  style={style.textField} />
//              <TextInput
//                  placeholder="Username"
//                   placeholderTextColor={"gray"}

//                  style={style.textField} />
//              <TextInput
//                  placeholder="password"
//                  placeholderTextColor={"gray"}
//                  style={style.textField} />
//              <TextInput
//                  placeholder="Confirm password"
//                  placeholderTextColor={"gray"}
//                  style={style.textField} />
//              <Text style={{color:'black',marginVertical:10}}>Enroll in
//              <Text style={{ color: 'blue' }}> Expo Developer Services</Text></Text>
//              <View style={style.createYourAccountButton}>
//              <Text style={{ color: 'white' }}>Create your account</Text>
//          </View>
//          </View >
//       </View >
//      )
//  }
//  const style = StyleSheet.create({
//      container: {
//          height: '100%',
//          width: '100%',
//          backgroundColor: "white",
//          alignItems: 'center',
//          justifyContent: 'center'
//      },
//      form: {
//         width: '80%',
//         alignItems: 'center'
//     },
//     image: {
//         height: 150,
//         width: 150,
//         borderRadius: 75
//     },
//     createAccount: {
//         marginBottom: '5%',
//         marginTop:'10%',
//         justifyContent: 'center',
//         color: 'black',
//         fontSize:24,
//         fontWeight:"bold"


//     },
//     createAccountText: {
//         marginBottom: '5%',
//         justifyContent: 'center',
//         color: 'black'
//     },
//     textField: {
//         borderColor: 'gray',
//         borderWidth:2,
//         height: 40,
//         width: '90%',
//         marginTop: '5%'
//     },
//     createYourAccountButton: {
//         backgroundColor: '#5e34eb',
//         height: 30,
//         width: '90%',
//         alignItems:'center',
//         justifyContent:'center',
        
//     }
// })
// export default App

