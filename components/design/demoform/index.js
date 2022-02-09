import React from 'react';
import Image from 'next/image'
import styles from './styles.module.scss'

const Form = (props) => {
  return <div className={`${styles.form} p-5 md:p-10`}>
      <h2 className="font-bold font-heading text-lg md:text-2xl mb-3 md:mb-8 mt-3 md:mt-0">Book Your Free Web Demo</h2>
        <form method="post">
          <div>
            <div className="md:grid md:grid-cols-2 md:gap-10">
              <div>
                <input className="mb-3 focus:border-blue focus:outline-0 rounded-none w-full text-tiny bg-white border-solid border-b border-darkgrey px-4 p-3" type="text" name="First Name" placeholder="First Name" required />
              </div>
              <div>
                <input className="mb-3 focus:border-blue focus:outline-0 rounded-none w-full text-tiny bg-white border-solid border-b border-darkgrey px-4 p-3" type="text" name="Last Name" placeholder="Last Name" required />
              </div>
            </div>
            <div className="mb-3">
              <input className="focus:border-blue focus:outline-0 rounded-none w-full text-tiny bg-white border-solid border-b border-darkgrey px-4 p-3" type="text" name="Company Name" placeholder="Company Name" required />
            </div>
            <div className="select_wrapper mb-3">
              <select className="focus:border-blue focus:outline-0 rounded-none w-full text-tiny bg-white border-solid border-b border-darkgrey px-4 p-3" id="company_size_range" name="company_size_range" required>
                  <option value="">Company Size</option>
                  <option value="1-50" id="ec-1">1 - 50</option>
                  <option value="51-200" id="ec-50">51 - 200</option>
                  <option value="201-500" id="ec-200">201 - 500</option>
                  <option value="501-1000" id="ec-500">501 - 1.000</option>
                  <option value="1001-2000" id="ec-1000">1.001 - 2.000</option>
                  <option value=">2000" id="ec-2000">more than 2.000</option>
              </select>
            </div>
            <div className="select_wrapper mb-3">
              <select className="focus:border-blue focus:outline-0 rounded-none w-full text-tiny bg-white border-solid border-b border-darkgrey px-4 p-3" id="country" name="country" required>
                  <option value="">Country</option>
                  <option value="United Kingdom" data-areacode="+44">United Kingdom</option><option value="Germany" data-areacode="+49">Germany</option><option value="Spain" data-areacode="+34">Spain</option><option value="Austria" data-areacode="+43">Austria</option><option value="Belgium" data-areacode="+32">Belgium</option><option value="Denmark" data-areacode="+45">Denmark</option><option value="Finland" data-areacode="+358">Finland</option><option value="France" data-areacode="+33">France</option><option value="Ireland" data-areacode="+353">Ireland</option><option value="Luxembourg" data-areacode="+352">Luxembourg</option><option value="Netherlands" data-areacode="+31">Netherlands</option><option value="Norway" data-areacode="+47">Norway</option><option value="Singapore" data-areacode="+65">Singapore</option><option value="Sweden" data-areacode="+46">Sweden</option><option value="Switzerland" data-areacode="+41">Switzerland</option><option value="Italy" data-areacode="+39">Italy</option><option value="other" data-areacode="">Other</option>	
              </select>
            </div>
            <div className="mb-3">
              <input className="focus:border-blue focus:outline-0 rounded-none w-full text-tiny bg-white border-solid border-b border-darkgrey px-4 p-3" type="text" name="Email Address" placeholder="Business Email" required />
            </div>
            <div className="flex">
              <div className="select_wrapper mb-3">
                <select className="focus:border-blue focus:outline-0 rounded-none w-full text-tiny bg-white border-solid border-b border-darkgrey px-4 p-3" id="company_size_range" name="company_size_range" required>
                  <option value="">Code</option><option value="+49">+49</option><option value="+43">+43</option><option value="+41">+41</option><option value="+65">+65</option><option value="+31">+31</option><option value="+32">+32</option><option value="+33">+33</option><option value="+34">+34</option><option value="+44">+44</option><option value="+45">+45</option><option value="+46">+46</option><option value="+47">+47</option><option value="+352">+352</option><option value="+353">+353</option><option value="+358">+358</option><option value="+39">+39</option>
                </select>
              </div>
              <div className="mb-3 ml-5 w-4/6 flex-shrink-0">
                <input className="focus:border-blue focus:outline-0 rounded-none w-full text-tiny bg-white border-solid border-b border-darkgrey px-4 p-3" type="text" name="Work Phone" placeholder="Work Phone" />
              </div>
            </div>
            <div className="flex items-center mt-2">
              <Image src="/assets/icons/question-circle.svg" width={16} height={16} alt="Question Mark" />
              <p className="text-xs leading-tight ml-2">Wird zur Terminabstimmung und Bedarfsermittlung benötigt</p>
            </div>
            
          </div>
          <button className="my-5 bg-yellow w-full py-3 px-3 md:px-12 font-bold text-tiny hover:underline" type="submit">Book Your Free Demo</button>
          <div>
            <p className="text-xs leading-tight">By submitting this form I confirm that I have read the privacy policy and agree to the processing of my personal data by Personio for the stated purposes. In case of consent, I can revoke my consent to this processing at any time.</p>
          </div>
        </form>
    </div>;
};

export default Form;
