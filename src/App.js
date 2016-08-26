import React, { Component } from 'react'
import Header from './Header'
import Statement from './Statement'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header
          title="Jonathon Sherrard."
          subtitle="Lead Developer & Tech Consultant."
        />
        <section className="blue bg-washed-blue bt bw2 b--orange f3 fw5 ph3 ph3-ns ph4-m ph4-l pv6 mt0 db cf lh-title lh-copy-m">
          <h2 className="lh-title f2 f-subheadline-l orange">A perfect software project:</h2>
          <Statement>
            Iterating towards simplicity.
          </Statement>
          <Statement>
            Empowering developers.
          </Statement>
          <Statement>
            Reliability over features.
          </Statement>
          <Statement>
            User testing, <em>and</em> intuition.
          </Statement>
        </section>
        <Footer />
      </div>
    )
  }
}

export default App
