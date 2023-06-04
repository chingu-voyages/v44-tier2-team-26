import React from 'react'
import Link from 'next/link'
import { AiOutlineGithub } from 'react-icons/ai'


//add react icon for git hub
//add brief explanation of chingu and project
function ChinguOde() {
  return (
    <div>
       <div className="flex justify-end text-right text-white mr-2 w-[100%]">
        <ul>
          <Link
            href="https://github.com/chingu-voyages/v44-tier2-team-26"
            target="_blank"
          >
            <li className='flex'>Check out the code! <AiOutlineGithub className='text-xl mx-2'/></li>
          </Link>
          <li className='mr-2'>Ode to Chingu</li>
        </ul>
      </div>
    </div>
  )
}

export default ChinguOde
