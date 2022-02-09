import React from 'react';
import Button from '/components/elements/button'
import GraphCard from '/components/design/graphcard'

const cardsListing = [
  { graphic: '/assets/design/graph-analyse.svg', width: 315, height: 266, heading: 'Analyse', description: 'Add more value for your company with data driven, strategic decisions ' },
  { graphic: '/assets/design/graph-digitise.svg', width: 317, height: 177, heading: 'Digitise', description: 'Increase productivity and lower costs by using more efficient processes' },
  { graphic: '/assets/design/graph-optimise.svg', width: 315, height: 215, heading: 'Optimise', description: 'Unleash your workforce s true potential by improving HR ' }
]

const Transform = () => {
  return <article className="my-28 md:my-36">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-32 xl:gap-x-60 lg:gap-y-24">
          <div>
            <h2 className="font-bold font-heading text-2xl md:text-4xl leading-8 md:leading-10 mb-5 md:mb-8">Transform<br/> Your HR Department</h2>
            <p className="mb-6 md:mb-8">In order for HR to become a strategic business partner, companies need a solid foundation for their core processes. At Personio, we believe HR can&apos;t be strategic until it excels at operations. That&apos;s because a successful strategy is based on effective day-to-day operations.</p>
            <Button title="Book A Demo" />
          </div>
          {cardsListing.map((card, index) =>
            <GraphCard key={index} graphic={card.graphic} width={card.width} height={card.height} heading={card.heading} description={card.description} />
          )}
        </div>
      </div>
  </article>;
};

export default Transform;
