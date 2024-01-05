import { useState } from 'react'
import copy from 'copy-to-clipboard'

export function Footer() {
  const [isClicked, setIsClicked] = useState(false)

  function handleCopyEmailAddress() {
    const email = 'lucasjohann.dev@gmail.com'
    copy(email)

    setIsClicked(true)

    setTimeout(() => {
      setIsClicked(false)
    }, 2000)
  }

  return (
    <footer className="py-2 text-center text-white">
      <ul className="flex items-center justify-center gap-10 py-5">
        <li>
          <button
            className={`focus:shadow-outline  focus:outline-none ${
              isClicked
                ? 'animate-bounce text-draculaPink'
                : 'transition duration-300'
            }`}
            onClick={handleCopyEmailAddress}
          >
            {isClicked ? 'Email copiado!' : 'email'}
          </button>
        </li>
        <li>
          <a
            href="https://github.com/gabjohann"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lucasjohann/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=5551998250020&text=Olá, vim através do seu portfólio!"
            target="_blank"
            rel="noopener noreferrer"
          >
            whatsapp
          </a>
        </li>
      </ul>
    </footer>
  )
}
