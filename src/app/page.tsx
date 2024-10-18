  import Link from"next/link";
import Image from "next/image";

export default function Home() {
  
    return (
    <main>
         
<main className="flex bg-gray-800">
  
        <div className="mt-4 ml mx-10">
        <p className="px-0 sm:px-10 mt-8 md:px-23 z-2000 text-sm tracking-widest leading-2 mt-63 text-green-200">
                MY HOTEL HOTELINITO LUXURY AND ROYAL</p>
    <p className="flex ml-12 text-4xl justify-left max-w-xl text-left pl-30 mt-14"> 
        A magnificent hotel hotelinito illuminated with warm lights,
        surrounded peace beautiful and atmosphere peaceful.</p>
        <a className="rounded-full border border-solid border-white/[.97] dark:border-black/[.135] transition-colors flex
        item=center hover:border-transparent text-sm sm:text-base h=11 sm:h-13 sm;px-3 sm:min-w-1 px-2 py-1 w-1/4 self-start ml-16"
        target="black"
        rel="noopener noreferrer"> GET ALGORITHMS</a>
       <section className="flex justify-around " >
    <div >
        <Image src="/hotel1.jpg"width={1000} height={500}alt="hotel"/>
    </div>
</section>
        </div>
        <ul className="flex gap-x-9  mt-6 ml mx-10 tex-lg text-lime-50" >            
                 <li><Link href="/about"></Link></li>
                <li><Link href="/room"></Link></li>
                <li><Link href="/ contact-us"></Link></li>

                <li><Link href="/"></Link></li>
                <li> <i className="fa fa-search"></i></li>
                <li> <button className="/"> </button></li>
                </ul>
               
                </main>
                <main className="mt-11 ml mx-11">
               
                <footer className="flex gap-4 items-end bg-blue-800 gap-x-10 mt-20 px-5 tex-lg">
                    <li> CONTACT-US</li>
                    <p> Email:contact@example.com</p>
                    <p>PHONE:(9123)44455566666</p>
                   <p>Address:123Main st.anytown.karachi</p> 

                </footer>
                </main>
      
      </main>
      
    );
}
