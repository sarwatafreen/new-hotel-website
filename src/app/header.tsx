import Link from "next/link"
import React from"react";
export default function Header(){
    return(
       
        
        <header className="flex justify-between mt-4 h-12 bg-blue-800">
<div>
        <h1 className="font-semibold text-7xl mt-0 ml-7 text-red-900 "> HOTELINITO</h1>
        </div>
<div className="">

       
</div>

        
       
       
   {/* <logo> */}
 
  
      <div>
       {/* <link> */}
       <nav>
            <ul className="flex gap-x-9 mt-7 tex-lg-4" >            
                 <li><Link href="/">HOME</Link></li>
                <li><Link href="/about">ABOUT</Link></li>
                <li><Link href="ROOM">ROOM</Link></li>
                <li><Link href="CONTACT-US">CONTACT-US</Link></li>
                <li> <i className="fa fa-search"></i></li>
                <li> <button className="primary-btn"> BOOK NOW</button></li>
                 
            </ul>

        </nav>
        </div>
        
    
        </header>
       
);
};

   