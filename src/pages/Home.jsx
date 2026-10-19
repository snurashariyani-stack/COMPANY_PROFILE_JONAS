function Home() {
  const services = [
    {
      title: 'Photo Studio',
      description: 'Abadikan momen wisuda, keluarga, ulang tahun, dan momen spesial lainnya.',
      image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Photo Printing',
      description: 'Ubah foto digital menjadi kenangan yang bisa disimpan dan dinikmati.',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Photo Frames',
      description: 'Lengkapi kenangan favorit dengan bingkai foto untuk mempercantik ruangan.',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <>
      <section className="grid min-h-140 items-center gap-10 bg-stone-100 px-6 py-16 md:grid-cols-2 md:px-16">
        <div>
          <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-red-700">
            Since 1980 · Jonas Photo
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Capture the moments worth keeping.
          </h1>
          <p className="mt-6 max-w-lg leading-7 text-gray-600">
            Dari foto wisuda hingga momen keluarga, Jonas Photo membantu
            mengabadikan kenangan menjadi sesuatu yang bisa kamu simpan selamanya.
          </p>
          <a
            href="#services"
            className="mt-8 inline-block rounded-full bg-red-700 px-7 py-3 font-semibold text-white hover:bg-red-800"
          >
            Explore Our Services
          </a>
        </div>

        <img
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=85"
          alt="Fotografer sedang mengabadikan sebuah momen"
          className="h-80 w-full rounded-2xl object-cover shadow-lg md:h-112"
        />
      </section>

      <section id="about" className="px-6 py-20 text-center md:px-16">
        <p className="font-semibold uppercase tracking-widest text-red-700">
          Welcome to Jonas Photo
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Moments worth keeping, made to last.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
          Jonas Photo adalah penyedia layanan studio fotografi, cetak foto,
          dan bingkai foto yang membantu pelanggan menyimpan berbagai momen
          berharga dalam bentuk kenangan yang nyata.
        </p>
      </section>

      <section id="services" className="bg-stone-50 px-6 py-20 md:px-16">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-red-700">
            Discover Our Services
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Every Memory Matters
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">
                  {service.description}
                </p>
                <a
                  href="https://jonasphoto.co.id/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block font-semibold text-red-700 hover:underline"
                >
                  Learn More ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="gallery"
        className="px-6 py-20 text-center md:px-16"
      >
        <h2 className="text-3xl font-bold">Keep Your Memories Alive</h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
          Setiap foto memiliki cerita. Jadikan momen spesialmu bagian dari
          kenangan yang bisa dikenang kembali.
        </p>
      </section>

      <section
        id="contact"
        className="bg-red-800 px-6 py-16 text-center text-white"
      >
        <h2 className="text-3xl font-bold">
          Ready to Capture Your Moments?
        </h2>
        <p className="mt-4">
          Temukan layanan Jonas Photo melalui website resminya.
        </p>
        <a
          href="https://jonasphoto.co.id/"
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-semibold text-red-800 hover:bg-stone-100"
        >
          Visit Official Website
        </a>
      </section>
    </>
  )
}

export default Home