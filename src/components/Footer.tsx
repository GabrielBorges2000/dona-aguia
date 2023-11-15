import { Boxes, Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="flex h-72 flex-col bg-amber-400 py-16 pl-6 lg:flex-row lg:items-center lg:justify-between lg:px-28">
      <div>
        <h1 className="mb-6 font-roboto text-4xl font-extrabold">Dona Águia</h1>
        <p className="font-roboto font-normal text-white">©2023 Dona Águia</p>
        <p className="mb-6 font-roboto font-normal text-white lg:mb-0">
          Todos os direitos reservados.
        </p>
      </div>
      <div className="flex flex-row gap-4">
        <Instagram className="text-base font-bold text-white" size={32} />
        <Facebook className="text-base font-bold text-white" size={32} />
        <Boxes className="text-base font-bold text-white" size={32} />
      </div>
    </footer>
  )
}
