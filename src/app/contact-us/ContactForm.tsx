export default function ContactForm() {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-6">
        <label className="block">
          <span>Name</span>
          <input
            type="text"
            className="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
            placeholder=""
          />
        </label>
        <label className="block">
          <span>Email address</span>
          <input
            type="email"
            className="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
            placeholder="john@example.com"
          />
        </label>
        <label className="block">
          <span>When is your deadline?</span>
          <input
            type="date"
            className="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
          />
        </label>
        <label className="block">
          <span>Additional details</span>
          <textarea
            className="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
            rows={10}
          ></textarea>
        </label>
      </div>
    </div>
  )
}