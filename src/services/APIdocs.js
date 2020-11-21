//Para actualizar github pages: npm run deploy ;)

//Mi token es eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFjMjQ0OWI5NTIzZTAwMjA3ZTFmYzMiLCJpYXQiOjE2MDUxMTcwMDF9.vHMYlEKnpSVDSejVVyittmqUhIQ9pbD2U5CvqwQYJ4I

//Endpoint de usuario:

//GET: https://coding-challenge-api.aerolab.co/user/me

//Response mock:
// {
//   "id": "5a03638052fd231590d04eb5",
//   "name": "John Kite",
//   "points": 2000,
//   "redeemHistory": [],
//   "createDate": "new Date(1510171520852)"
// }

//Endpoint para traer toda la lista de productos para canjear:

//GET: https://coding-challenge-api.aerolab.co/products

//Response mock (es un array con objetos de la sgte forma):

// [
//   {
//     "_id": "5a033eeb364bf301523e9b92",
//     "name": "Sandalia Pale Gold YSL",
//     "cost": 200,
//     "category": "Indumentaria",
//     "img": {
//       "url": "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
//       "hdUrl": "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png"
//     }
//   },
//   {
//     "_id": "5a033f0f364bf301523e9b93",
//     "name": "iPhone 7 Case Sea-Blue",
//     "cost": 200,
//     "category": "Accesorios",
//     "img": {
//       "url": "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
//       "hdUrl": "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
//     }
//   }
// ]

//Endpoint para adquirir más puntos:

//POST: https://coding-challenge-api.aerolab.co/user/points

//Request mock:
// {
//   "amount": 1000
// }
//DATAZO: amount sólo puede ser 1000, 5000 o 7500.

//Response mock:
// {
//   "message": "Points Updated",
//   "new Points": 2000
// }

//Endpoint para obtener el historial de compras del usuario:

//GET: https://coding-challenge-api.aerolab.co/user/history

//Response mock (es un array de objetos de la sgte forma):
// [
//   {
//     "productId": "5a033eeb364bf301523e9b92",
//     "name": "Sandalia Pale Gold YSL",
//     "cost": 200,
//     "category": "Indumentaria",
//     "_id": "5a09ac59d867f70a56c0d7b2",
//     "createDate": "2017-11-13T14:33:05.920Z",
//     "img": {
//       "url": "Some URL",
//       "hdUrl": "Some HD URL"
//     }
//   }
// ]

//Endpoint para realizar una compra/canje:

//POST: https://coding-challenge-api.aerolab.co/redeem

//Request mock:
// {
//   "productId": "5a033eeb364bf301523e9b92"
// }

//Response mock:
// {
//   "message": "You've redeem the product successfully"
// }
