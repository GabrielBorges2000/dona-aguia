'use client'
import Image from 'next/image'
import Logo from '@/assets/logo.webp'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const navegation = [
  {
    id: 1,
    title: 'Início',
    href: '#start',
  },
  {
    id: 2,
    title: 'Sobre',
    href: '#about',
  },
  {
    id: 3,
    title: 'Serviços',
    href: '#service',
  },
  {
    id: 4,
    title: 'Contato',
    href: '#contact',
  },
  {
    id: 5,
    title: 'Catálogo',
    href: 'https://www.elo7.com.br/donaaguiababyekids',
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between border-b-2 border-project-grayLigth bg-[rgba(255,255,255,0.3)] px-8 opacity-100 backdrop-blur-md lg:px-20">
      <div className="flex flex-row items-center gap-4">
        <Link href="https://www.elo7.com.br/donaaguiababyekids">
          <Image
            src={Logo}
            alt="Logo da marca de Dona Águia."
            className="h-full w-16"
            width={720}
            height={720}
          />
        </Link>
        <h1 className="font-roboto text-2xl font-extrabold">Dona Águia</h1>
      </div>
      <button
        type="button"
        title="Abrir o menu lateral"
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen === true && 'hidden'}`}
      >
        <Menu className="hidden text-amber-500 " size={32} />
      </button>

      <nav
        className={`right-0 top-0 flex flex-col ${
          isOpen === false && 'hidden'
        } hidden 
        items-center justify-evenly gap-4 lg:flex lg:flex-row `}
      >
        {navegation.map((title) => (
          <a
            key={title.id}
            href={title.href}
            className="font-semibold text-black hover:text-amber-600 hover:opacity-70"
            onClick={() => setIsOpen(!isOpen)}
          >
            {title.title}
          </a>
        ))}
      </nav>
    </header>
  )
}
