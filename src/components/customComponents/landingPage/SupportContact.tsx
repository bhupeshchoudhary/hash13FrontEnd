'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function SupportContact() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative w-full h-[20rem] bg-white font-sans">
      {/* upGrad Learner Support */}
      <h3 className="absolute top-[3.75rem] left-[5rem] text-[2.25rem] font-semibold leading-tight">
        <span className="text-[#2D2F31]">#13</span>{' '}
        <span className="text-[#FF0000]">Learner Support</span>
      </h3>

      {/* Subheading */}
      <p className="absolute top-[6.5rem] left-[5rem] text-[1.25rem] text-[#6B7280] font-normal">
        Talk to our experts. We're available 24/7.
      </p>

      {/* Indian Nationals */}
      <div className="absolute top-[10.5rem] left-[5rem] flex items-center gap-4">
        <div className="flex items-center gap-4">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#FF9933"/>
            <circle cx="16" cy="16" r="5.33333" fill="white"/>
            <circle cx="16" cy="16" r="2.66667" fill="#000080"/>
            <rect y="21.3333" width="10" height="10" fill="#138808"/>
          </svg>
          <span className="text-[1.275rem]  text-[#2D2F31] font-semibold">Management queries</span>
        </div>
        <a
          href="tel:18002102020"
          className="inline-flex items-center gap-3 px-4 py-2 rounded-[0.375rem]  text-[1.375rem] font-semibold border border-[#FF0000]"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.3394 8.3303L4.79126 9.10437C5.90756 11.8783 8.12168 14.0924 10.8956 15.2087L11.6697 13.6606C11.866 13.2679 12.2955 13.0492 12.7285 13.1214L17.1644 13.8607C17.6466 13.9411 18 14.3583 18 14.8471V17C18 17.5523 17.5523 18 17 18H15C7.8203 18 2 12.1797 2 5V3Z"/>
          </svg>
          1800 210 2020
        </a>
      </div>

      {/* Technical queries */}
      <div className="absolute top-[10.5rem] left-[38rem] flex items-center gap-4">
        <div className="flex items-center gap-4">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#E5E7EB"/>
            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" fill="#34D399"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28ZM16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26Z" fill="#059669"/>
          </svg>
          <span className="text-[1.275rem]  text-[#2D2F31] font-semibold">Technical queries</span>
        </div>
        <a
          href="tel:+918045604032"
          className="inline-flex items-center gap-3 px-4 py-2 rounded-[0.375rem]  text-[1.375rem] font-semibold border border-[#FF0000]"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.3394 8.3303L4.79126 9.10437C5.90756 11.8783 8.12168 14.0924 10.8956 15.2087L11.6697 13.6606C11.866 13.2679 12.2955 13.0492 12.7285 13.1214L17.1644 13.8607C17.6466 13.9411 18 14.3583 18 14.8471V17C18 17.5523 17.5523 18 17 18H15C7.8203 18 2 12.1797 2 5V3Z"/>
          </svg>
          +918045604032
        </a>
      </div>
    </div>
  )
}
