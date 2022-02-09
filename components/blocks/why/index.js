import React from 'react';
import Card from '/components/design/card'

const cardsListing = [
  { heading: 'Agile HR', description: 'Maintain all personnel data and documents centrally and manage onboarding processes, absences, and time registration/attendances.' },
  { heading: 'Made In Europe', description: 'Proven solution in a highly complex and regulated business  market.' },
  { heading: 'Ideal For SMBs', description: 'Delivers fast time to value for small- and medium-sized businesses.' },
  { heading: 'More In The Core', description: 'All people-related processes every business needs to do, including recruiting.' }
]

const Why = () => {
  return <article className="my-14 md:my-32">
      <div className="container">
        <div className="w-full lg:w-4/5 mx-auto">
          <h2 className="font-bold font-heading text-center text-2xl md:text-6xl leading-8 md:leading-10 mb-10 md:mb-20">Why Personio?</h2>
          <div className="md:grid md:grid-cols-2 md:gap-7">
            {cardsListing.map((card) =>
              <Card key={card.heading} heading={card.heading} description={card.description} />
            )}
          </div>
        </div>
      </div>
  </article>;
};

export default Why;
