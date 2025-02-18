import React from 'react'
import { resourcesLinks, platformLinks, communityLinks, termsPolicies } from '../constants'

const Footer = () => {
  return (
    <div>
      <footer className=' mt-20 border-t py-10 border-neutral-700'>
        <div className=' grid grid-cols-2 lg:grid-cols-4 gap-4 '>
          <div>
            <h3 className='text-md font-semibold mb-4'>Resources</h3>
            <ul className=' space-y-2'>
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a className=' text-neutral-300 hover:text-white' href="">{link.text}</a>

                </li>
              ))}

            </ul>
          </div>
          <div>
            <h3 className='text-md font-semibold mb-4'>Platform</h3>
            <ul className=' space-y-2'>
              {platformLinks.map((plink, index) => (
                <li key={index}>
                  <a className=' text-neutral-300 hover:text-white' href="">{plink.text}</a>

                </li>
              ))}

            </ul>
          </div>
          <div>
            <h3 className='text-md font-semibold mb-4'>Community</h3>
            <ul className=' space-y-2'>
              {communityLinks.map((clink, index) => (
                <li key={index}>
                  <a className=' text-neutral-300 hover:text-white' href="">{clink.text}</a>

                </li>
              ))}

            </ul>
          </div>
          <div>
            <h3 className='text-md font-semibold mb-4'>Terms & Policies</h3>
            <ul className=' space-y-2'>
              {termsPolicies.map((tlink, index) => (
                <li key={index}>
                  <a className=' text-neutral-300 hover:text-white' href="">{tlink.text}</a>

                </li>
              ))}

            </ul>
          </div>

        </div>


      </footer>
      <div className='border-t py-5 border-neutral-700 flex justify-center text-sm'>
        <p className='text-neutral-600'>
        @QuantumAI©2025, RG Private Limited - An AI Solutions Company, All Rights Reserved.

        </p>

      </div>
    </div>
  )
}

export default Footer