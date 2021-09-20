import Link from 'next/link'

export default function Menu(){
  return(
    <div className='container'>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/gaget">Gaget</a></li>
          <li><a href="/life">Life</a></li>
          <li><a href="/travel">Travel</a></li>
          <li><a href="/develop">Develop</a></li>
          <li><a href="/about">About us</a></li>
        </ul>
      </nav>
    </div>
  )
}