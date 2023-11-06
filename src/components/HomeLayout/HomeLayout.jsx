import React, { Component } from 'react'
import Header from './Header'
import { Navigation } from './Navigation'
import { Content } from './Content'
import { Footer } from './Footer'

export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className='d-flex'>
            <div className="w-25">
                <Navigation />
            </div>
            <div className="w-75">
                <Content />
            </div>
        </div>
        <Footer />
      </div>
    )
  }
}
