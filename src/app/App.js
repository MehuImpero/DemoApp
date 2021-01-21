// import { StatusBar } from 'expo-status-bar';
// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

// import { PaymentsStripe as Stripe } from 'expo-payments-stripe';


// export default function App() {

//   const [product,setProduct]=useState({
//     amount:100,
//     productName:"Drinks",
//     customerName:"Meggy",
//     customerEmail:"meggy@gmail.com"
//   })

// React.useEffect(()=>{
//   Stripe.setOptionsAsync({
//     publishableKey: 'pk_test_51IBdmXBhVMI8AuAfeBn13UG9JQBVpZJ7U8AAzvAdak32qIxu8I8FUJYTcjd9sOtWxpfPxIIdSoyJGAQcpLDyKaIY00lny9xuUk', // Your key
//   });
// })

// async function payMe()
// {
//   const token = await Stripe.paymentRequestWithCardFormAsync();

//   console.log("token==",token);

//  const bodyObj ={
//     token,product
//   }


//   const apiUrl = "http://192.168.1.100:8282/pay";

//   // fetch(apiUrl, {
//   //   method: 'POST',
//   //   headers: {
//   //     'Accept': 'application/json',
//   //     'Content-Type': 'application/json',
//   //   },
//   //   body: JSON.stringify({
//   //     token, product,
//   //   }),
//   // })
//   // .then(result =>{
//   //   console.log("result==",result);
//   // })
//   // .catch(err =>alert(err))

//   // const bodyObj ={
//   //   token,product
//   // }

//   // const headers ={
//   //   Accept: 'application/json',
//   //   'Content-Type': 'multipart/form-data',
//   //  }

//   //  return fetch("http://localhost:8282/pay",{
//   //    method:'post',
//   //    headers,
//   //    body:JSON.stringify(bodyObj)
//   //  })
//   //  .then(result =>{
//   //    console.log("result==",result);
//   //  })
//   //  .catch(err =>alert(err))


//   return fetch(apiUrl, {
//     method:'post',
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body:JSON.stringify(bodyObj)
// })
//     .then((response) => response.json())
//     .then((res) => {
//         console.log("resApp==",res)
//     }).catch((error) => {
//         console.log("errorApp==",error.responseJson)
//     });
  

// }
//   return (
//     <View style={styles.container}>

//         <Image 
//         style={{ borderRadius:14}}
//           source={{uri:"https://media.istockphoto.com/photos/cherry-juice-picture-id805019094",
//           width:256,
//           height:256}}
//         />

//         <TouchableOpacity onPress={payMe}>
//               <View style={styles.button}>
//                           <Text style={{color:'white'}}>Buy  Drinks</Text>
//               </View>
//         </TouchableOpacity>
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button:{

//       backgroundColor:'orange',
//       padding:20,
//       marginTop:20,
//       borderRadius:10,

//   }
// });
