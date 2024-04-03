import Link from "next/link"

export default function Custom404() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <h2 className="  px-3.5 py-2.5 text-lg font-bold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">
            {" "}
            404 - Not Found
          </h2>

          <Link href="#" className="text-sm font-semibold">
            Back to Homepage
          </Link>
        </div>
      </div>
    </main>
  )
}
