import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [success, setSuccess] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSuccess(true)
    setForm({ name: '', email: '', message: '' })
  }

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
    setSuccess(false)
  }

  return (
    <main>
      <section className="bg-stone-100 px-6 py-20 text-center md:px-16">
        <p className="font-semibold uppercase tracking-widest text-red-700">
          Get in Touch
        </p>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
          Punya pertanyaan seputar layanan Jonas Photo?
          Hubungi kami melalui informasi berikut atau kirim pesan melalui formulir.
        </p>
      </section>

      <section className="grid gap-12 px-6 py-16 md:grid-cols-2 md:px-16">
        <div>
          <h2 className="text-2xl font-bold">Let's Talk</h2>
          <p className="mt-3 leading-7 text-gray-600">
            Kami siap membantu kamu mendapatkan informasi mengenai
            layanan fotografi dan produk foto.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-bold">Address</h3>
              <p className="mt-1 text-gray-600">
                Jl. Banda No. 36–38, Citarum, Bandung Wetan,
                Kota Bandung, Jawa Barat.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Email</h3>
              <a
                href="mailto:customer.service@jonasphoto.co.id"
                className="mt-1 break-all text-red-700 hover:underline"
              >
                customer.service@jonasphoto.co.id
              </a>
            </div>

            <div>
              <h3 className="font-bold">Phone</h3>
              <a
                href="tel:0224201010"
                className="mt-1 inline-block text-red-700 hover:underline"
              >
                (022) 4201010
              </a>
            </div>

            <a
              href="https://jonasphoto.co.id/"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-red-700 px-6 py-3 font-semibold text-white hover:bg-red-800"
            >
              Visit Official Website ↗
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block font-medium">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                minLength={2}
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-700"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-medium">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="name@example.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-700"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                minLength={10}
                rows={5}
                placeholder="Write your message here..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-700"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-red-700 px-6 py-3 font-semibold text-white hover:bg-red-800"
            >
              Send Message
            </button>

            {success && (
              <p role="status" className="rounded-lg bg-green-50 p-4 text-green-700">
                Pesan berhasil divalidasi! Ini masih demo, jadi pesan belum dikirim ke Jonas Photo.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact