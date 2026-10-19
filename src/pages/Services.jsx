function Services() {
  const services = [
    {
      title: 'Graduation Photography',
      description: 'Abadikan momen wisuda bersama teman, keluarga, atau secara personal.',
      icon: '🎓',
    },
    {
      title: 'Family Photography',
      description: 'Simpan kenangan kebersamaan keluarga melalui foto yang berkesan.',
      icon: '👨‍👩‍👧‍👦',
    },
    {
      title: 'Group Photography',
      description: 'Dokumentasikan momen bersama sahabat, komunitas, atau rekan kerja.',
      icon: '📸',
    },
    {
      title: 'Passport & ID Photos',
      description: 'Foto untuk berbagai kebutuhan identitas dan dokumen.',
      icon: '🪪',
    },
    {
      title: 'Prewedding Photography',
      description: 'Abadikan cerita dan momen spesial menjelang pernikahan.',
      icon: '💍',
    },
    {
      title: 'Photo Printing & Frames',
      description: 'Cetak dan bingkai foto untuk menyimpan kenangan secara nyata.',
      icon: '🖼️',
    },
  ]

  return (
    <main>
      <section className="bg-stone-100 px-6 py-20 text-center md:px-16">
        <p className="font-semibold uppercase tracking-widest text-red-700">
          What We Do
        </p>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Our Services
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
          Temukan layanan fotografi dan produk foto untuk berbagai momen
          berharga bersama Jonas Photo.
        </p>
      </section>

      <section className="px-6 py-16 md:px-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-gray-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-4xl">{service.icon}</span>
              <h2 className="mt-5 text-xl font-bold">{service.title}</h2>
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
            </article>
          ))}
        </div>
      </section>

      <section className="bg-red-800 px-6 py-14 text-center text-white">
        <h2 className="text-2xl font-bold">Make Your Moments Last</h2>
        <p className="mt-3">Kunjungi website Jonas Photo untuk informasi lebih lanjut.</p>
        <a
          href="https://jonasphoto.co.id/"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-red-800"
        >
          Visit Jonas Photo
        </a>
      </section>
    </main>
  )
}

export default Services