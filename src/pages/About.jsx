function About() {
  return (
    <main>
      <section className="bg-stone-100 px-6 py-20 text-center md:px-16">
        <p className="font-semibold uppercase tracking-[0.2em] text-red-700">
          Get to Know Us
        </p>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          About Jonas Photo
        </h1>
        <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-600">
          Moments worth keeping, made to last.
          Kami membantu mengabadikan momen berharga melalui fotografi
          dan produk foto berkualitas.
        </p>
      </section>

      <section className="grid items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-16">
        <img
          src="/kamera.avif"
          alt="Kamera untuk fotografi"
          className="h-80 w-full rounded-2xl object-cover"
        />

        <div>
          <p className="font-semibold uppercase tracking-widest text-red-700">
            Our Story
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Preserving Memories Since 1980
          </h2>
          <p className="mt-5 leading-7 text-gray-600">
            Jonas Photo telah hadir sejak 1980 dengan layanan studio
            fotografi, cetak foto, dan bingkai foto. Jonas Photo membantu
            pelanggan mengabadikan berbagai momen, mulai dari wisuda,
            keluarga, bayi, hingga prewedding.
          </p>
          <a
            href="https://jonasphoto.co.id/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block font-semibold text-red-700 hover:underline"
          >
            Explore Official Website ↗
          </a>
        </div>
      </section>

      <section className="bg-stone-50 px-6 py-16 md:px-16">
        <h2 className="text-center text-3xl font-bold">
          What Makes Us Special
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Experience',
              text: 'Pengalaman panjang dalam layanan fotografi sejak 1980.',
            },
            {
              title: 'Meaningful Memories',
              text: 'Membantu menyimpan momen spesial dalam bentuk foto.',
            },
            {
              title: 'Photo Services',
              text: 'Layanan studio, cetak foto, dan bingkai foto.',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default About