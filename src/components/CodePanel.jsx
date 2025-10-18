import React from 'react'

const PROFILE_JSON = {
  name: 'Ayush',
  role: 'Software Engineer II',
  company: 'Microsoft',
  achievements: [
    'ICPC Regionalist x3',
    'PostgreSQL Contributor v17/v18'
  ],
  interests: ['Databases', 'Competitive Programming', 'Operating Systems', 'Distributed Systems']
}

export function CodePanel() {
  const jsonString = JSON.stringify(PROFILE_JSON, null, 2)

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString).catch(()=>{})
  }

  return (
    <div className="code-panel" aria-labelledby="profile-json-heading">
      <div className="code-panel-header">
        <div className="traffic">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span id="profile-json-heading" className="panel-title">profile.json 🦇</span>
        <button className="btn inline gold copy-btn" onClick={handleCopy} type="button">Copy</button>
      </div>
      <pre className="panel-code"><code>{jsonString}</code><span className="cursor" /></pre>
    </div>
  )
}

export default CodePanel
