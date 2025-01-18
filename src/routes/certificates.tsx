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
    <div className="flex flex-grow flex-col items-center justify-evenly px-10 text-white md:px-24">
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
