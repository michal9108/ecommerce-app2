const Newsletter = () => {
  return (
    <div className="flex w-full">
      <div className="  flex w-full items-center  justify-center overflow-hidden bg-foreground py-8 sm:px-3.5">
        <div>
          <form className="flex items-center justify-between gap-2 max-md:flex-col">
            <div className="flex">
              <p className="mx-4  text-sm text-background">
                <strong className="text-3xl font-semibold">
                  GET THE LATEST UPDATES IN YOUR INBOX
                </strong>
              </p>
            </div>
            <div className="flex gap-4">
              {" "}
              <input
                type="text"
                placeholder="Your email..."
                className="bg-primary-100 text-md w-full  rounded-lg border border-gray-300 p-2.5  font-semibold text-gray-100  "
                required
              ></input>
              <button className="rounded-lg bg-yellow-500 px-6  py-2.5 text-xl font-semibold text-white no-underline">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
