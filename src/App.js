import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../src/Routes'

// import FooterModule from './App/components/Layout/index.layout'
import Layout from './App/components/Layout/index.layout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App
