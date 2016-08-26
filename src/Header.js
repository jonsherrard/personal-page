import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <section className="bg-blue white-90 ph3 ph4-m ph4-l pv6 pb2 mt0 db cf">
        <h1 className="f1 f-headline-l fw5">{this.props.title}</h1>
        <h2 className="f2 f-subheadline-l fw5 measure mt0">{this.props.subtitle}</h2>
      </section>
    )
  }
}
