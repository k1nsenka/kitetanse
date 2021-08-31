const info = require('../package.json')

export default function Footer() {
  return(
    <div>
      <h2>Profile</h2>
      <img src="/images/profile.png" alt={info.author} title={info.author} />
      <span>{info.author}</span>
      <p>自己紹介文</p>
      <ul>
        <li><a href="https://github.com/k1nsenka" target="_blank"><img src="/images/test.png" /></a></li>
        <li><a href="https://github.com/k1nsenka" target="_blank"><img src="/images/test.png" /></a></li>
        <li><a href="https://github.com/k1nsenka" target="_blank"><img src="/images/test.png" /></a></li>
      </ul>
      <p className="copyright">© 2021 {info.title}</p>

      <style jsx>{`
        （中略）
      `}</style>

    </div>
  );
}