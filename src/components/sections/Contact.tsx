import { AtSign, MapPinned, Phone, Send } from 'lucide-react'
import Link from 'next/link'

export function Contact() {
  const info = [
    {
      id: 1,
      icon: <Phone size={24} className="text-amber-400" />,
      text: '11 97334-8516',
    },
    {
      id: 2,
      icon: <MapPinned size={24} className="text-amber-400" />,
      text: 'R. São Policarpo, 50 - Salto/SP',
    },
    {
      id: 3,
      icon: <AtSign size={24} className="text-amber-400" />,
      text: 'donaaguiababyekids@gmail.com',
    },
  ]

  return (
    <div
      className="min-h-[60vh] py-20 pl-12 pr-8 lg:flex lg:h-[80vh] lg:flex-row lg:items-center lg:justify-between lg:px-12"
      id="contact"
    >
      <div>
        <h2 className="mb-6 font-roboto text-4xl font-extrabold">
          Entre em contato com a gente!
        </h2>
        <p className="mb-8 w-80 text-xl">
          Entre em contato com a Dona Águia, queremos tirar suas dúvidas, ouvir
          suas críticas e sugestões.
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
      <div className="flex flex-col gap-8">
        {info.map((info) => (
          <p key={info.id} className="flex flex-row gap-2 text-xl">
            {info.icon} <span>{info.text}</span>
          </p>
        ))}
      </div>
    </div>
  )
}
