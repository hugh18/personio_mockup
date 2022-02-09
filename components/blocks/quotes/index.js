import React from 'react';
import ButtonArrow from '/components/elements/buttonarrow'
import Testimonial from '/components/design/testimonial'
import styles from './styles.module.scss'

const Quotes = () => {
  return <article className={`${styles.quotes} my-28 md:my-36`}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-20 md:gap-10 lg:gap-32 xl:gap-44 mb-16">
            <div className="md:mt-28 md">
                <h2 className="font-bold font-heading text-2xl md:text-4xl leading-8 md:leading-10 mb-5 md:mb-8">Over 4,000<br/> Happy Customers</h2>
                <p className="mb-6 md:mb-8">To ensure that Personio consistently offers the greatest value-add for our customers, we exchange feedback and ideas on a daily basis. This is what they have to say about working with us and our HR software.</p>
                <ButtonArrow title="Our Case Studies" />
            </div>
            <div>
                <Testimonial photo="/assets/design/anna.jpg" name="Anna Gullstrand" position="VP People - Mentimeter" quote="When the board asks for fresh numbers, regarding the growth of the company or metrics regarding diversity, it is just one click away and I have what I need." />
            </div>
        </div>
        <div className="my-16">
          <Testimonial center photo="/assets/design/david.jpg" name="David Vanek" position="CEO Anorak Technologies" quote="We can track absences, working from home days, the evolution of headcounts per team…we now have a segmentation of our HR data that is extremely powerful and very easily accessible with Personio." />
        </div>
        <div className="grid lg:grid-cols-2 gap-20 md:gap-10 lg:gap-8 xl:gap-0 mb-16 xl:pt-32">
            <div className="md:mt-28 xl:pr-32">
                <h2 className="font-bold font-heading text-2xl md:text-4xl leading-8 md:leading-10 mb-5 md:mb-8">Premier Inn:<br/> How a hotel merger turned into an HR lucky strike</h2>
                <ul className="list-disc ml-6 mb-6 md:mb-8">
                  <li>Transparent, digital HR processes</li>
                  <li>Error-free reporting</li>
                  <li>All employee information in one place</li>
                </ul>
                <ButtonArrow title="Read Case Study" />
            </div>
            <div>
                <Testimonial large logo="/assets/design/logo-premier-inn.svg" company="Premier Inn" photo="/assets/design/christina.jpg" name="Cristina Antoniu" position="Resources Manager" quote="For me, personio is a great all-round product. I&apos;m pleased that I can map all HR tasks with a holistic solution." />
            </div>
        </div>
      </div>
  </article>;
};

export default Quotes;
