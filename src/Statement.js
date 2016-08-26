import React, { Component } from 'react'

export default class Statement extends Component {
  render() {
    return (
      <article className="w-100 w-50-m w-25-l dib">
        <h3>{this.props.children}</h3>
      </article>
    )
  }
}
