function Gallery() {
  const photos = [
    {
      title: 'Portrait Photography',
      category: 'Portrait',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Graduation Moments',
      category: 'Graduation',
      image:'/graduation.jpg.avif',
    },
    {
      title: 'Family Memories',
      category: 'Family',
      image:
        'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Wedding Moments',
      category: 'Wedding',
      image:
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Creative Photography',
      category: 'Creative',
      image:
        'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Camera & Photography',
      category: 'Photography',
      image:
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <main>
      <section className="bg-stone-100 px-6 py-20 text-center md:px-16">
        <p className="font-semibold uppercase tracking-widest text-red-700">
          Our Collection
        </p>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Gallery & Inspiration
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
          Setiap foto menyimpan cerita. Jelajahi inspirasi fotografi
          untuk berbagai momen berharga.
        </p>
      </section>
    
      <section className="px-6 py-16 md:px-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <article key={photo.title} className="group">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-red-700">
                {photo.category}
              </p>
              <h2 className="mt-1 text-xl font-bold">{photo.title}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-stone-50 px-6 py-14 text-center">
        <h2 className="text-2xl font-bold">Inspired by Every Moment</h2>
        <p className="mt-3 text-gray-600">
          Kunjungi situs resmi untuk mengenal lebih jauh Jonas Photo.
        </p>
        <a
          href="https://jonasphoto.co.id/"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block rounded-full bg-red-700 px-7 py-3 font-semibold text-white hover:bg-red-800"
        >
          Visit Jonas Photo ↗
        </a>
      </section>
    </main>
  )
}

export default Gallery