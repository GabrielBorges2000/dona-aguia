import Image from 'next/image'
import Img2 from '@/assets/img2.svg'

export function About() {
  return (
    <section
      className="min-h-screen border-b-2 px-8 py-12 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-4"
      id="about"
    >
      <div className="ml-5 mt-8 flex h-96 items-center justify-center lg:ml-[-5rem] lg:mt-36 lg:w-full">
        <div className="relative max-w-xs before:absolute before:right-[10%] before:top-[-10%] before:z-0 before:h-full before:w-full before:rounded-lg before:bg-amber-400 lg:mx-auto lg:mb-36 lg:w-full lg:before:right-[14%]">
          <Image
            src={Img2}
            width={720}
            height={720}
            alt="Imagem de uma menina usando o vestido branco feito pela Dona Águia."
            className="relative z-10 w-full rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center lg:mr-8">
        <h2 className="mb-4 mt-8 w-full text-4xl font-bold lg:w-96 lg:text-start">
          Sobre nós
        </h2>
        <p className="w-full text-lg lg:w-[40rem]">
          A Dona Águia é um atelier especializado em criar moda infantil e
          fantasias encantadoras. Cada peça é cuidadosamente confeccionada para
          expressar a individualidade e a alegria das crianças. Nosso atelier é
          um lugar onde a magia se entrelaça com a moda, resultando em roupas e
          fantasias que transformam o cotidiano em momentos mágicos. Da costura
          à criação, dedicamo-nos a oferecer peças únicas que fazem os corações
          dos pequenos baterem mais forte. Descubra o encanto da infância em
          cada detalhe criado pela Dona Águia.
        </p>
      </div>
    </section>
  )
}
