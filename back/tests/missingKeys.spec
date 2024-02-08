
// requiredKeys.map((key) =>{
//     test("missing keys: /create", async() =>{
//       const body: createPosition={
//         asset: 'eth',
//         buy_price: 1,
//         quantity: 1,
//         actual_price: 1,
//         date_buy: 21
//       }
//       delete body[key]
//       const response = await fetch2("http://localhost:3000/create", 
//       {
//         method: 'POST',
//         headers:{
//           "Content-Type":"application/json"
//         },
//         body: JSON.stringify(body)
//       })
//       expect(response.status).toBe(400)
//       const parsedResponse = await response.json(); // Parse JSON
//       expect(parsedResponse.error.message).toBe("missing fields")
//       expect(parsedResponse.error.fields[0][0]).toBe(key)
//     })
//   })
  
//     test("wrong data type fields: /create", async() =>{
//       const body ={
//         asset: 'eth',
//         buy_price: 'string',
//         quantity: 'string',
//         actual_price: 'string',
//         date_buy: 'string'
//       }
//       const response = await fetch2("http://localhost:3000/create", 
//       {
//         method: 'POST',
//         headers:{
//           "Content-Type":"application/json"
//         },
//         body: JSON.stringify(body)
//       })
//       expect(response.status).toBe(400)
//       const parsedResponse = await response.json(); // Parse JSON
//       expect(parsedResponse.error.message).toBe("invalid data type. must be num")
      
//       // expect(parsedResponse.error.fields[0][0]).toBe(key)
//     })