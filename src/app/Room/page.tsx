import Link from"next/link"
import React from"react";
 export default function About() {
    return(
        <div>
           
            <ul className="flex gap-10 bg-yellow-200">
                    <li><Link href="HOME">HOME</Link></li>
                    <li><Link href="ABOUT">ABOUT</Link></li>
                    <li><Link href="ROOM">ROOM</Link></li>
                    <li><Link href="CONTACT-US">CONTACT-US</Link></li>
                    </ul>
                    <h1>ROOM PAGE</h1>
        </div>
    )
}