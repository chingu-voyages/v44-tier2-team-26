import React from "react";
import Link from "next/link";
import {AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai'
//team
function Footer() {
  return (
    <div className="text-white flex justify-around items-center bg-[#08001A] py-4">
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
  );
}

export default Footer;
