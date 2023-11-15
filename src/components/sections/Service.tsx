import icon1 from '@/assets/icon1.svg'
import icon2 from '@/assets/icon2.svg'
import icon3 from '@/assets/icon3.svg'
import Image from 'next/image'

const services = [
  {
    id: 1,
    icon: icon1,
    title: 'Qualidade',
    text: 'Costurando sonhos em tecidos de qualidade, nossa marca de roupas infantis encanta corações e veste os pequenos com estilo e magia.',
  },
  {
    id: 2,
    icon: icon2,
    title: 'Moda dos Sonhos',
    text: 'Transformando sonhos em roupas que inspiram e te faz feliz. Fazemos roupas exclusivas e personalizadas.',
  },
  {
    id: 3,
    icon: icon3,
    title: 'Entrega',
    text: 'Realizamos entrega para todo o Brasil com agilidade. Ótimo relacionamento com o cliente e atendimento exclusivo.',
  },
]

export function Service() {
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center gap-16 border-b-2 p-16 lg:py-24"
      id="service"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-4 w-full text-center text-4xl font-bold lg:w-96">
          Serviços
        </h2>
        <p className="w-full text-center text-lg lg:w-[32rem]">
          Com mais de 10 anos no mercado, a{' '}
          <span className="text-amber-400">Dona Águia</span> já conquistou
          clientes de inúmeros lugares com seus vestuários exclusivos e
          especiais.
        </p>
      </div>

      <div className="flex flex-col gap-16 lg:flex-row">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex h-96 w-80 flex-col items-center justify-evenly rounded-md border-b-4 border-amber-500 bg-gray-50 px-8 drop-shadow-md"
          >
            <Image
              src={service.icon}
              alt={`icone do card de serviço: ${service.title}`}
              width={720}
              height={720}
              className="h-20 w-20"
            />
            <h4 className="mb-4 mt-8 w-96 text-center text-2xl font-bold">
              {service.title}
            </h4>
            <p className="text-center text-gray-500">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
