import React from 'react'
import Statement from './Statement'
import Footer from './Footer'
import Section from './Section'
import HorizontalChildren from './HorizontalChildren'

const App = (props) =>
  <article>
    <Section
      title="Jonathon Sherrard"
      subtitle="Lead Developer & Tech Consultant"
    >
      <h3 className="f3 fw5">@Shortlist Media, London</h3>
    </Section>

    <Section
      background="black-80"
      color="white-80"
      title="An exemplary software project"
    >
      <HorizontalChildren>
        <Statement>
          Iterates towards simplicity.
        </Statement>
        <Statement>
          Empowers developers.
        </Statement>
        <Statement>
          Predictable, then feature-rich.
        </Statement>
        <Statement>
          Designed by data, <em>and</em> intuition.
        </Statement>
      </HorizontalChildren>
    </Section>

    <Section
      background="yellow"
      color="black-80"
      title="The ideal codebase"
    >
      <HorizontalChildren>
        <Statement>
          Seperates concerns, not file formats.
        </Statement>
        <Statement>
          Considers choice of ecosystem, then framework.
        </Statement>
        <Statement>
          Bets on open source, but leverages proven paid integrations.
        </Statement>
        <Statement>
          Refactors code for readibility, before documentation.
        </Statement>
      </HorizontalChildren>
    </Section>
    <Footer />
  </article>

export default App
