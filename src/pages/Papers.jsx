function Papers() {
  const recentPapers = [
    { title: 'Spanner: Google’s Globally-Distributed Database', venue: 'OSDI 2012', url: 'https://research.google/pubs/pub39966/' },
    { title: 'The Chubby Lock Service for Loosely-Coupled Distributed Systems', venue: 'OSDI 2006', url: 'https://research.google/pubs/pub27897/' },
    { title: 'Kafka: a Distributed Messaging System for Log Processing', venue: 'NetDB 2011', url: 'https://kafka.apache.org/documentation/' },
    { title: 'Dynamo: Amazon’s Highly Available Key-value Store', venue: 'SOSP 2007', url: 'https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf' },
    { title: 'Calvin: Fast Distributed Transactions for Partitioned Database Systems', venue: 'SIGMOD 2012', url: 'https://cs.yale.edu/homes/thomson/publications/calvin-sigmod12.pdf' }
  ]

  return (
    <div className="page-wrapper">
      <h1 className="page-title">PaperShelf</h1>
      <p className="page-intro">I mostly read papers related to distributed systems and databases; here are a few recent (or frequently revisited) ones:</p>
      <ul className="item-list">
        {recentPapers.map(p => (
          <li key={p.title} className="item">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="item-link">{p.title}</a>
            <span className="item-meta">{p.venue}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Papers
