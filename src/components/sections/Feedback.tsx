export function Feedback() {
  const testimonials = [
    {
      id: 1,
      text: 'Eu sou cliente da Dona Águia a muitos anos e as suas roupas são de qualidade. Sem falar na agilidade e um ótimo atendimento...',
      author: 'João',
    },
    {
      id: 2,
      text: ' Minha mãe pediu um vestido e chegou super rápido. Eu super recomendo e o melhor de tudo e o carinho que eles tem com a gente. Com toda certeza eu recomendo.',
      author: 'Maria',
    },
    {
      id: 3,
      text: 'Eu sou cliente da Dona Águia a muitos anos e as suas roupas são de qualidade. Sem falar na agilidade e um ótimo atendimento...',
      author: 'João',
    },
    {
      id: 4,
      text: ' Minha mãe pediu um vestido e chegou super rápido. Eu super recomendo e o melhor de tudo e o carinho que eles tem com a gente. Com toda certeza eu recomendo.',
      author: 'Maria',
    },
  ]

  return (
    <section
      className="flex flex-col items-center justify-center gap-16 border-b-2 p-8 lg:py-24"
      id="feedback"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-4 w-full text-center text-4xl font-bold lg:w-96">
          Depoimentos de quem já passou por aqui
        </h2>
      </div>
      <div className="flex w-full overflow-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="m-4 border-2 border-solid border-gray-600 p-8"
          >
            <p>{testimonial.text}</p>
            <p>{testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
