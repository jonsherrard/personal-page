import React, { Component } from 'react'

export default class Footer extends Component {
render() {
  return (
    <div>
      <footer className="ph3 ph4-ns pv6 bt bw2 b--orange bg-black-80 white-70">
        <a href="mailto:jon@andthat.it" className="link b f3 fw5 f2-ns dim white-70 lh-solid">jon@andthats.it</a>
        <p className="f6 fw5 tracked-mega db b ttu lh-solid">Made with 😒 in London.</p>
        <div className="mt5">
          <a href="https://github.com/jonsherrard" title="Github" className="f6 dib pr2 orange dim">Github</a>
          <a href="https://twitter.com/jshez"    title="Twitter" className="f6 dib ph2 orange dim">Twitter</a>
          <a href="https://shortlist.studio"  title="Shortlist Studio" className="f6 dib pl2 orange dim">Shortlist Studio</a>
        </div>
      </footer>
    </div>
    )
  }
}
