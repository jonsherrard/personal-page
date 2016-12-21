import React from 'react'

const Statement = (props) =>
  <article style={{flex: '1 0 25%'}}>
    <h3 className="f4 f3-l fw3 pr3 tracked">{props.children}</h3>
  </article>

export default Statement
