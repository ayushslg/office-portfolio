function Blogs() {
  const recentBlogs = [
    { title: 'Understanding Postgres MVCC Internals', source: 'blog.crunchydata.com', url: 'https://blog.crunchydata.com/blog/postgres-mvcc-internals' },
    { title: 'Raft vs Paxos: An Educational Comparison', source: 'thesecretlivesofdata.com', url: 'https://thesecretlivesofdata.com/raft/' },
    { title: 'Reducing Write Amplification in LSM Trees', source: 'pingcap.com', url: 'https://www.pingcap.com/blog/' },
    { title: 'SQLite: Small. Fast. Reliable. Choose any three.', source: 'sqlite.org', url: 'https://www.sqlite.org/arch.html' },
    { title: 'Bloom Filters: Applications in Databases', source: 'use-the-index-luke.com', url: 'https://use-the-index-luke.com/blog/' }
  ]

  return (
    <div className="page-wrapper">
      <h1 className="page-title">Tech Blogs</h1>
      <p className="page-intro">Some recent blogs I read (mostly around databases, distributed systems, and performance engineering):</p>
      <ul className="item-list">
        {recentBlogs.map(b => (
          <li key={b.title} className="item">
            <a href={b.url} target="_blank" rel="noopener noreferrer" className="item-link">{b.title}</a>
            <span className="item-meta">{b.source}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blogs
