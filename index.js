import React from "react";
import ReactDOM from "react-dom";
// import asyncWait from "./async-wait";
import HelloWorld from "./Components/HelloWorld/HelloWorld";
import MaterialDatePicker from "./Components/MaterialDatePicker/MaterialDatePicker";
// import {ApolloClient, createNetworkInterface, gql} from 'react-apollo';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import TextField from "./Components/TextField"
import MyReactForm from "./Components/MyReactForm/MyReactForm";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// const client = new ApolloClient({
//     networkInterface: createNetworkInterface({
//         uri: 'https://localhost:3000',
//     })
// });
//
// console.log(client.query(gql("myName")));

// const Lokka = require('lokka').Lokka;
// const Transport = require('lokka-transport-http').Transport;
//
// const client = new Lokka({
//     transport: new Transport('http://graphql-swapi.parseapp.com/')
// });
//
// client.query(`
//     {
      {/*allFilms {*/}
        {/*films {*/}
          {/*title*/}
//         }
//       }
//     }
// `).then(result => {
//     console.log(result.allFilms);
// });

ReactDOM.render(<MuiThemeProvider>
    <MyReactForm/>
</MuiThemeProvider>, document.getElementById("root"));
