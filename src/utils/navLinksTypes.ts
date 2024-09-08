export interface MenuItemProps {
  title: string
  link: string
}

export const menuItems: MenuItemProps[] = [
  { title: 'Projetos', link: '/projects' },
  { title: 'Tecnologias', link: '/technologies' },
  { title: 'Certificados', link: '/certificates' },
  { title: 'Experiências', link: '/experience' },
  { title: 'Sobre', link: '/about' },
]

export const minMenuItems: MenuItemProps[] = [
  { title: 'Certificados', link: '/certificates' },
  { title: 'Experiências', link: '/experience' },
  { title: 'Sobre', link: '/about' },
]
