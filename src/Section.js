import React from 'react'

const Section = (props) =>
  <section className={`ph3 ph4-m ph4-l pb5 pb6-l pt4 mt0 db cf bg-${props.background} ${props.color}`}>
    <h1 className="f1 f-subheadline-l fw5 tracked-title">{props.title}</h1>
    <h2 className="f3 f2-l fw5 measure mt0">{props.subtitle}</h2>
    {props.children}
  </section>

export default Section
