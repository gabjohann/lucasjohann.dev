import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const certificates = [
  {
    issuingBody: 'Descomplica',
    course: 'Gestão de Tempo',
    duration: '30',
    category: 'Pós-graduação',
  },
  {
    issuingBody: 'Descomplica',
    course: 'Projeto de Vida',
    duration: '30',
    category: 'Pós-graduação',
  },
  {
    issuingBody: 'Descomplica',
    course: 'Coaching e Planejamento de Carreira',
    duration: '30',
    category: 'Pós-graduação',
  },
  {
    issuingBody: 'Descomplica',
    course: 'Governança e Qualidade de Dados',
    duration: '30',
    category: 'Pós-graduação',
  },
  {
    issuingBody: 'Descomplica',
    course: 'Desenvolvimento de Software Educacional',
    duration: '30',
    category: 'Pós-graduação',
  },
  {
    issuingBody: 'Descomplica',
    course: 'Storytelling',
    duration: '30',
    category: 'Pós-graduação',
  },
  {
    issuingBody: 'Descomplica',
    course: 'Segurança e Privacidade',
    duration: '30',
    category: 'Pós-graduação',
  },
  {
    issuingBody: 'Descomplica',
    course: 'Redes de Comunicação, Protocolos e Roteamento',
    duration: '30',
    category: 'Pós-graduação',
  },
  {
    issuingBody: 'Descomplica',
    course: 'Principais Softwares Educacionais',
    duration: '30',
    category: 'Pós-graduação',
  },
  {
    issuingBody: 'Alura',
    course: 'Transformação Digital',
    duration: '8',
    category: 'Cursos',
  },
  {
    issuingBody: 'Alura',
    course: 'JavaScript: tipos, variáveis e funções',
    duration: '12',
    category: 'Cursos',
  },
  {
    issuingBody: 'Alura',
    course: 'JavaScript: objetos',
    duration: '8',
    category: 'Cursos',
  },
  {
    issuingBody: 'Alura',
    course: 'JavaScript: manipulando o DOM',
    duration: '6',
    category: 'Cursos',
  },
  {
    issuingBody: 'Alura',
    course: 'JavaScript: arrays',
    duration: '8',
    category: 'Cursos',
  },
  {
    issuingBody: 'Alura',
    course: 'JavaScript na WEB: armazenando dados no navegador',
    duration: '6',
    category: 'Cursos',
  },
  {
    issuingBody: 'Alura',
    course:
      'JavaScript e HTML: desenvolva um jogo e pratique lógica de programação',
    duration: '16',
    category: 'Cursos',
  },
  {
    issuingBody: 'Alura',
    course:
      'HTML e CSS: trabalhando com responsividade e publicação de projetos',
    duration: '6',
    category: 'Cursos',
  },
  {
    issuingBody: 'Alura',
    course: 'HTML e CSS: classes, posicionamento e flexbox',
    duration: '8',
    category: 'Cursos',
  },
  {
    issuingBody: 'Alura',
    course: 'Git e GitHub: repositório, commit e versões',
    duration: '8',
    category: 'Cursos',
  },
  {
    issuingBody: 'Alura',
    course:
      'HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags',
    duration: '8',
    category: 'Cursos',
  },
  {
    issuingBody: 'Alura',
    course: 'HTML e CSS: cabeçalho, footer e variáveis CSS',
    duration: '6',
    category: 'Cursos',
  },
  {
    issuingBody: 'Curso em Vídeo',
    course: 'Git e Github',
    duration: '20',
    category: 'Cursos',
  },
  {
    issuingBody: 'Curso em Vídeo',
    course: 'Python 3',
    duration: '40',
    category: 'Cursos',
  },
  {
    issuingBody: 'Digital House',
    course: 'Certified Tech Developer',
    duration: '1568',
    category: 'Cursos',
  },
  {
    issuingBody: 'Digital Innovation One',
    course: 'Primeiros passos com Dart',
    duration: '2',
    category: 'Cursos',
  },
  {
    issuingBody: 'Hotmart',
    course: 'Interfaces Modernas',
    duration: '5',
    category: 'Cursos',
  },
  {
    issuingBody: 'Udemy',
    course: 'Introdução ao Sistema Fotovoltaico - Energia Solar',
    duration: '3',
    category: 'Cursos',
  },
  {
    issuingBody: 'UNOPAR',
    course: 'Evento Científico: o que é, como e porque participar',
    duration: '10',
    category: 'Cursos',
  },
  {
    issuingBody: 'UNOPAR',
    course: 'Introdução à linguagem Python',
    duration: '15',
    category: 'Cursos',
  },
  {
    issuingBody: 'UNOPAR',
    course: 'Estruturas de Dados em Python',
    duration: '10',
    category: 'Cursos',
  },
  {
    issuingBody: 'UNOPAR',
    course: 'Introdução à Análise de Dados com Python',
    duration: '15',
    category: 'Cursos',
  },
  {
    issuingBody: 'EBAC',
    course: 'Jornada Dev: seu primeiro passo em programação',
    duration: '6',
    category: 'Palestras',
  },
  {
    issuingBody: 'UniCBE',
    course: 'Google Hacking',
    duration: '3',
    category: 'Palestras',
  },
  {
    issuingBody: 'XPE',
    course: 'Minicamp Dev & Data',
    duration: '32',
    category: 'Palestras',
  },
]

export function Certificates() {
  return (
    <div className="flex flex-grow flex-col items-center justify-evenly px-24 text-white">
      <h1 className="pb-10 text-center text-3xl">Certificados</h1>

      <Table className="mx-auto my-0 max-w-6xl">
        <TableHeader>
          <TableRow>
            <TableHead>Órgão emissor</TableHead>
            <TableHead>Curso</TableHead>
            <TableHead>Carga horária</TableHead>
            <TableHead className="text-right">Categoria</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {certificates.map(({ issuingBody, course, duration, category }) => (
            <TableRow key={course}>
              <TableCell className="font-medium">{issuingBody}</TableCell>
              <TableCell>{course}</TableCell>
              <TableCell>{duration} horas</TableCell>
              <TableCell className="text-right">{category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
