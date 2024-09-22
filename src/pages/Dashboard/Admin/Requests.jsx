import { Link } from "react-router-dom";

const RequestCard = () => {
  return (
    <div className="relative rounded-lg bg-white px-8 py-8 shadow-md">
      <div className="flex flex-col flex-wrap">
        <div className="my-auto -mt-4">
          <span className="font-mono text-xl font-bold text-gray-500">
            #123
          </span>
          <i className="ai ai-carrot-fill absolute right-4 top-4 text-right text-xl text-orange-400"></i>
        </div>
        <div className="my-4 mb-6">
          <h4 className="font-serif text-xl">Thomas Lean</h4>
          <p className="text-gray-700">Request for Diet Plan</p>
        </div>


        <div className="flex flex-wrap">
          <Link
            to="/dashboard/admin/users/123"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            <button
              type="button"
              class="mb-2 me-2 rounded-full bg-sky-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              Accept
            </button>
          </Link>

          <Link
            to="/dashboard/admin/users/123"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            <button
              type="button"
              class="mb-2 me-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 "
            >
              Decline
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

const Requests = () => {
  return (
    <main className="mx-8 my-4 p-2 lg:mx-16">
      <h1 className="my-4 mb-8 text-3xl text-white">
        <i className="ai ai-hands-clapping-fill mr-3 text-2xl text-white"></i>
        Requests
      </h1>
      <section className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        <RequestCard />
        <RequestCard />
        <RequestCard />
      </section>
    </main>
  );
};

export default Requests;
