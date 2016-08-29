import React from 'react'

const Section = (props) =>
  <section className={`ph3 ph4-m ph4-l pb6 pt4 mt0 db cf bg-${props.background} ${props.color}`}>
    <h1 className="f1 f-headline-l fw5">{props.title}</h1>
    <h2 className="f2 f1-l fw5 measure mt0">{props.subtitle}</h2>
    {props.children}
  </section>

export default Section
