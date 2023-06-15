import Link from "next/link";

function RegistrationDetailsForm() {
  return (
    <div>
      <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
        <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
          <div className="shrink-0 mr-auto sm:py-3">
            <p className="font-medium">Verify Identification Card</p>
            <p className="text-sm text-gray-600">Verify Id Information</p>
          </div>
          <button className="hidden rounded-lg border-2 border-transparent text-white bg-purple-700 hover:bg-purple-800 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700">
            Save
          </button>
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">ID Type</p>
          <input
            placeholder="your.email@domain.com"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Name on ID</p>
          <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">ID Number</p>
          <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
        </div>
        <div className="flex flex-col gap-4 py-4  lg:flex-row">
          <div className="shrink-0 w-32  sm:py-4">
            <p className="mb-auto font-medium">Upload ID Front Side</p>
          </div>
          <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
            <p className="text-sm text-gray-600">
              Drop the front part of the NID here to start the upload
            </p>
            <input
              type="file"
              className="max-w-full rounded-lg px-2 font-medium text-purple-800 outline-none ring-blue-600 focus:ring-1"
            />
          </div>
        </div>
        <div className="flex justify-end py-4 sm:hidden">
          <button className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200">
            Cancel
          </button>
          <button className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700">
            Save
          </button>
        </div>
        <div className="flex flex-col gap-4 py-4  lg:flex-row">
          <div className="shrink-0 w-32  sm:py-4">
            <p className="mb-auto font-medium">Upload ID Back Side</p>
          </div>
          <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
            <p className="text-sm text-gray-600">
              Drop the back part of the NID here to start the upload
            </p>
            <input
              type="file"
              className="max-w-full rounded-lg px-2 font-medium text-purple-800 outline-none ring-blue-600 focus:ring-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
          <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
            <div className="shrink-0 mr-auto sm:py-3">
              <p className="font-medium">Verify Bank Account</p>
              <p className="text-sm text-gray-600">
                Fill in the bank information
              </p>
            </div>
            <button className="hidden rounded-lg border-2 border-transparent text-white bg-purple-700 hover:bg-purple-800 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700">
              Submit
            </button>
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Account Title</p>
            <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Account Number</p>
            <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Bank Name</p>
            <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Branch Code</p>
            <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-4 sm:py-4 md:mx-auto flex flex-col items-center justify-center">
        <Link href="/shops/registration-details">
          <button
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Submit All Information
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RegistrationDetailsForm;
