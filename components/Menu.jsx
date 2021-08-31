import Link from 'next/link'

export default function Menu(){
  return(
    <div>
      <Link href="/" className="linkStyle"><a>Home</a></Link>

      <ul className="linkStyle">
        Blog
        <li><Link href="/drawing"><a>Drawing</a></Link></li>
        <li><Link href="/programming"><a>Programming</a></Link></li>
      </ul>

      <Link href="/about" className="linkStyle"><a>About</a></Link>

      <style jsx>{`
        （中略）
      `}</style>

    </div>
  )
}