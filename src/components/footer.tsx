import { ReactNode, useState } from 'react'
import copy from 'copy-to-clipboard'
import { AtSign, Github, Linkedin, Phone } from 'lucide-react'

interface FooterProps {
  title: string
  link: string
  icon: ReactNode
}

export function Footer() {
  const [isClicked, setIsClicked] = useState(false)

  const footerItems: FooterProps[] = [
    {
      title: 'github',
      link: 'https://github.com/gabjohann',
      icon: <Github width={16} />,
    },
    {
      title: 'linkedin',
      link: 'https://www.linkedin.com/in/lucasjohann/',
      icon: <Linkedin width={16} />,
    },
    {
      title: 'whatsapp',
      link: 'https://api.whatsapp.com/send?phone=5551998250020&text=Olá, vim através do seu portfólio!',
      icon: <Phone width={16} />,
    },
  ]

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
      <ul className="flex items-center justify-center gap-3 py-5 text-sm md:gap-10 md:text-base">
        <li>
          <button
            className={`focus:shadow-outline flex items-center gap-2 hover:font-semibold hover:text-purple-300 focus:outline-none ${
              isClicked
                ? 'animate-bounce text-purple-300'
                : 'transition duration-300'
            }`}
            onClick={handleCopyEmailAddress}
          >
            <AtSign width={16} />
            {isClicked ? 'Email copiado!' : 'email'}
          </button>
        </li>
        {footerItems.map(({ title, link, icon }, index) => (
          <li
            key={index}
            className="flex items-center gap-2 hover:font-semibold hover:text-purple-300"
          >
            {icon}
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
