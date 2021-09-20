import Link from 'next/link'

export default function Menu(){
  return(
    <div className='container'>
      <nav>
        <ul>
          <li><Link href={`/`}><a>Home</a></Link></li>
          <li><Link href={`/gaget`}><a>Gaget</a></Link></li>
          <li><Link href={`/life`}><a>Life</a></Link></li>
          <li><Link href={`/travel`}><a>Travel</a></Link></li>
          <li><Link href={`/develop`}><a>Develop</a></Link></li>
          <li><Link href={`/about`}><a>About us</a></Link></li>
        </ul>
      </nav>
    </div>
  )
}