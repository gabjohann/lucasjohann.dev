import { formatDistanceToNow } from "date-fns";
import profileImage from "../assets/profile.webp";
export function About() {
  const currentDate = formatDistanceToNow(new Date(2002, 3, 19));
  const splitDate = currentDate.split(" ");
  const age = splitDate[1];

  return (
    <div className="grid max-w-[900px] place-items-center gap-10 md:grid-cols-2">
      <div className="overflow-hidden rounded-md">
        <img className="h-72 object-cover md:h-96" src={profileImage} alt="" />
      </div>

      <div
        id="about"
        className="w-80 font-manrope leading-relaxed text-neutral-300/80 md:w-[576px] md:text-lg"
      >
        <p>
          Olá, eu sou <strong>Lucas Gabriel</strong>, desenvolvedor de software
          de
          <strong> {age} anos </strong>
          apaixonado pelo que faz.
        </p>

        <p className="mt-6">
          Minha jornada na programação começou aos <strong>11 anos</strong>,
          quando descobri a eletrônica e a <strong>linguagem C++</strong>, e
          desde então, tenho explorado esse fascinante mundo.
        </p>
        <p className="my-4">
          Ao longo dos anos, encontrei minha verdadeira paixão no
          desenvolvimento front-end. Atualmente, estou focado em aprimorar
          minhas habilidades em
          <strong> React</strong> e <strong> React Native</strong>, para criar
          experiências digitais envolventes e funcionais.
        </p>
        <p>
          Se você está em busca de um desenvolvedor comprometido, apaixonado e
          em constante evolução, estou pronto para contribuir em projetos
          desafiadores.
        </p>
      </div>
    </div>
  );
}
