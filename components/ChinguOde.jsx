import React from 'react'
import Link from 'next/link'

//add react icon for git hub
//add brief explanation of chingu and project
function ChinguOde() {
  return (
    <div>
       <div className="flex justify-end text-right text-white mr-2">
        <ul>
          <Link
            href="https://github.com/chingu-voyages/v44-tier2-team-26"
            target="_blank"
          >
            <li>Github link</li>
          </Link>
          <li>Brief Ode to Chingu</li>
        </ul>
      </div>
    </div>
  )
}

export default ChinguOde
