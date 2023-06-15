import Link from "next/link";

function ShopRegistrationForm() {
  return (
    <div>
      <div>
        <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
          <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
            <div className="shrink-0 mr-auto sm:py-3">
              <p className="font-medium">Account Details</p>
              <p className="text-sm text-gray-600">
                Give us your account details
              </p>
            </div>
            <button className="hidden rounded-lg border-2 border-transparent text-white bg-purple-700 hover:bg-purple-800 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700">
              Submit
            </button>
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Shop Based In</p>
            <input
              placeholder="Bangladesh"
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            />
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Mobile Number</p>
            <input
              placeholder="0174XXXXXXX"
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            />
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Password</p>
            <input
              type="password"
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            />
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Confirm Password</p>
            <input
              type="password"
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            />
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Email</p>
            <input
              placeholder="your.email@domain.com"
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            />
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Shop Name</p>
            <input
              placeholder="Nike"
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            />
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I have read all the <a href="#">terms & conditions</a>.
            </label>
          </div>
        </div>
      </div>
      <div>
        <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
          <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
            <div className="shrink-0 mr-auto sm:py-3">
              <p className="font-medium">Address Book</p>
              <p className="text-sm text-gray-600">Warehouse Address</p>
            </div>
            <button className="hidden rounded-lg border-2 border-transparent text-white bg-purple-700 hover:bg-purple-800 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700">
              Submit
            </button>
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Address</p>
            <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Country</p>
            <input
              placeholder="Bangladesh"
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            />
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">State</p>
            <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Area</p>
            <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Location</p>
            <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
          </div>
          <p className="font-medium">Business Address</p>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Same as warehouse address.
            </label>
          </div>
          <p className="font-medium">Return Address</p>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Same as warehouse address.
            </label>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-4 sm:py-4 md:mx-auto flex flex-col items-center justify-center">
        <Link href="/shops/registration-details">
          <button
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ShopRegistrationForm;
