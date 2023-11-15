import * as C from '@/components'

export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center pt-[4rem] lg:pt-0">
        <C.Start />
        <C.About />
        <C.Service />
        {/* <C.Feedback /> Colocar aqui a futura implementação dos comentário e avaliações com base em avaliações reais. */}
        <C.Contact />
      </main>
    </div>
  )
}
