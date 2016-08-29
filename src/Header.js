import React from 'react'

const Header = (props) =>
  <section className="ph3 ph4-m ph4-l pb6 pt4 mt0 db cf">
    <h1 className="f1 f-headline-l fw5">{props.title}</h1>
    <h2 className="f2 f1-l fw5 measure mt0">{props.subtitle}</h2>
    <h3 className="f3 fw5">Shortlist Media, London</h3>
  </section>

export default Header
