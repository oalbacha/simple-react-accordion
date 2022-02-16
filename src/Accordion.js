import { useState } from "react";

export default function Accordion ({provider}) {
  const [isOpen, setIsOpen] = useState(true)
  const handleClick = (() => setIsOpen(!isOpen))
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={handleClick}>
        {provider.providerName}
        <span className="accordion-button">{isOpen ? '-' : '+'}</span>
      </div>
      {provider.providerUsers && provider.providerUsers.map ((user) => (
        <div key={user.id}>
          {isOpen && <div className="accordion-content">
            <div className="accordion-user">{user.name}</div>
          </div>}
        </div>
      ))}
    </div>
  )
}
