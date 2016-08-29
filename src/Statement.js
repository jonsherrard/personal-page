import React from 'react'

const Statement = (props) =>
  <article style={{flex: '1 0 25%'}}>
    <h3 className="f4 f3-l fw5 pr3">{props.children}</h3>
  </article>

export default Statement
