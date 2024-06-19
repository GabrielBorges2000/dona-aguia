import Image from 'next/image'
import Img1 from '@/assets/img1.svg'
import { Send } from 'lucide-react'
import Link from 'next/link'

export function Start() {
  return (
    <section
      className="flex max-w-full flex-col-reverse items-center justify-center border-b-2 px-8 pb-20 pt-16 lg:min-h-screen lg:flex-row lg:justify-evenly"
      id="start"
    >
      <div className="m-10 flex w-full flex-col items-center text-center lg:items-baseline lg:text-start">
        <h2 className="mb-8 w-96 text-4xl font-bold sm:text-4xl lg:text-start">
          Roupas que Transformam Sonhos em Realidade
        </h2>
        <p className="mb-8 w-96 text-center text-lg text-gray-500 lg:text-start lg:text-2xl">
          Um atelier exclusivo online, especializado em moda Infantil.
        </p>
        <Link
          className="mb-16 inline-flex flex-row items-center gap-4 rounded-md bg-amber-400 px-8 py-3 text-xl font-semibold text-black hover:bg-amber-500 hover:text-white"
          href={`https://wa.me/${process.env.PHONE_WHATSAPP}?text=${process.env.MESSAGE_WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
        >
          <Send />
          Entrar em contato
        </Link>
      </div>
      <div className="flex items-center justify-center pr-[5%] pt-8 lg:hidden">
        <div className="relative max-w-xs before:absolute before:left-[10%] before:top-[-14.8%] before:z-0 before:h-full before:w-full before:rounded-lg before:bg-amber-400 lg:mx-auto lg:mb-36 lg:w-9/12">
          <Image
            src={Img1}
            width={720}
            height={720}
            alt="Imagem de uma menina usando o vestido branco feito pela Dona Águia."
            className="relative z-10 w-full rounded-lg"
          />
        </div>
      </div>

      <div className="relative right-10 mb-6 hidden w-full lg:visible lg:mx-auto lg:flex lg:w-9/12">
        <Image
          src={Img1}
          width={720}
          height={720}
          alt="Imagem de uma menina usando o vestido branco feito pela Dona Águia."
          className="absolute left-10 top-10 z-10 h-full w-full lg:h-auto lg:w-[35rem]"
        />
        <div className="z-0 ml-[6rem] h-[23.5rem] w-full rounded-lg bg-amber-400 lg:w-[35rem]"></div>
      </div>
    </section>
  )
}
