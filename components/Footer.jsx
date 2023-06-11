import React from "react";
import Link from "next/link";
import {AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai'
//team
function Footer() {
  return (
    <div className="flex flex-col bg-[#08001A] py-4">
    <div className="text-white flex justify-around items-center ">
      <div className="w-[30%] text-center">
        <ul>
          <li>Rana Selva - Front End Developer</li>
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
      <div className="w-[30%] text-center">
      <ul>
          <li>Jeffrey Li - Front End Developer</li>
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
      <div className="w-[30%] text-center">
        <ul>
          <li>Lee Goullaud - Full Stack Developer</li>
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
     <div className="flex justify-center text-white w-[100%]">
     <ul>
       <Link
         href="https://github.com/chingu-voyages/v44-tier2-team-26"
         target="_blank"
       >
         <li className='flex justify-center mt-2'>Check out our code! <AiOutlineGithub className='text-xl mx-2'/></li>
       </Link>
       <li className='mx-2 text-sm text-center mt-2'>
Chingu is a collaborative learning platform that brings together front end developers from around the world to work on real-world projects and enhance their skills through teamwork and mentorship.</li>
     </ul>
   </div>
   </div>
  );
}

export default Footer;
