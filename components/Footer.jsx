import React from "react";
import Link from "next/link";
import {AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai'
//team
function Footer() {
  return (
    <div className="flex bg-[#08001A] py-4">
    <div className="w-[65%] text-center text-white flex flex-col justify-around items-center ">
    <h3 className="font-bold underline">The Team</h3>
     <div className="w-[100%] flex flex-wrap text-center justify-around">
      <div className="w-1/3 m-4" >
        <ul>
          <li>Rana Selva</li>
         <li className="flex items-center justify-around">
            <div className="flex">
              <Link href='https://ranasoyakcodes.dev/' target="_blank">Portfolio</Link> 
              <div className="flex">
                <Link href='https://github.com/rselvasoyak' target="_blank"><AiOutlineGithub className="mx-2 text-xl"/></Link> 
                <Link href='https://www.linkedin.com/in/ranasoyakcodes/' target="_blank"><AiOutlineLinkedin className="text-xl"/></Link>
              </div>
            </div>          
          </li> 
        </ul>
      </div>
      <div className="w-1/3  m-4" >
      <ul>
          <li>Jeffrey Li</li>
          <li className="flex items-center justify-around">
            <div className="flex">
              <Link href='https://jeffrey-li-website.vercel.app/' target="_blank">Portfolio</Link> 
              <div className="flex">
                <Link href='https://github.com/JeffLi117' target="_blank"><AiOutlineGithub className="mx-2 text-xl"/></Link> 
                <Link href='https://www.linkedin.com/in/jeffrey-li-do/' target="_blank"><AiOutlineLinkedin className="text-xl"/></Link>
              </div>
            </div>          
          </li> 
        </ul>
      </div>
      <div className="w-1/3">
        <ul>
          <li>Lee Goullaud</li>
          <li className="flex items-center justify-around">
            <div className="flex">
              <Link href='http://www.leegoullaud.com/' target="_blank">Portfolio</Link> 
              <div className="flex">
                <Link href='https://github.com/egoullaud' target="_blank"><AiOutlineGithub className="mx-2 text-xl"/></Link> 
                <Link href='https://www.linkedin.com/in/lee-goullaud/' target="_blank"><AiOutlineLinkedin className="text-xl"/></Link>
              </div>
            </div>          
          </li>           
        </ul>
      </div>
      </div>
    </div>
     <div className="w-[35%] flex flex-col justify-center text-white">
     <h3 className="text-center underline font-bold">About Chingu</h3>
     <ul>
       <Link
         href="https://github.com/chingu-voyages/v44-tier2-team-26"
         target="_blank"
       >
         <li className='flex justify-center mt-2'>Check out our code! <AiOutlineGithub className='text-xl mx-2'/></li>
       </Link>
       <li className='mx-2 text-sm text-left mt-2'>
Chingu is a collaborative learning platform that brings together front end developers from around the world to work on real-world projects and enhance their skills through teamwork and mentorship.</li>
     </ul>
   </div>
   </div>
  );
}

export default Footer;
