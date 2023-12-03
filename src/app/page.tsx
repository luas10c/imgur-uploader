import { UploadFile } from '#/components/upload-file'

const Home = () => {
  return (
    <section className="mx-auto w-full max-w-[600px] px-4">
      <header className="py-4 text-center">
        <h2 className="text-2xl font-bold text-zinc-300">Imgur Uploader</h2>
        <p className="text-zinc-300">
          Upload your image below and directly receive a link for it.
        </p>
      </header>
      <UploadFile />
    </section>
  )
}

export default Home
