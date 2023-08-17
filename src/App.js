import { Component } from 'react'
import Productos from './componentes/Productos.js'
import Layout from './componentes/Layout.js'
import Tittle from './componentes/Tittle.js'
import Navbar from './componentes/Navbar.js'

class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: './productos/tomate.jpg' },
      {name: 'Arbejas', price: 2500, img: './productos/arbejas.jpg' },
      {name: 'Lechuga', price: 500, img: './productos/lechuga.jpg'},
    ]
  }
  render() {
    return (
      <div>
      <Navbar />
        <Layout>
          <Tittle />
      <Productos
      agregarAlCarro={() => console.log('No hace nada')}
      productos={this.state.productos}
      />
      </Layout>
      </div>
  )
}
}


export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


