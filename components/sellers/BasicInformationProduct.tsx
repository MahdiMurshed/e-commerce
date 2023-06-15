function BasicInformationProduct() {
  return (
    <div>
      <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
        <div className="shrink-0 mr-auto sm:py-3">
          <p className="font-medium">Basic Information</p>
        </div>
        <div className="flex flex-col gap-4 py-4  lg:flex-row">
          <div className="shrink-0 w-32  sm:py-4">
            <p className="mb-auto font-medium">Upload image of the product</p>
          </div>
          <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
            <p className="text-sm text-gray-600">Upload the product image</p>
            <input
              type="file"
              className="max-w-full rounded-lg px-2 font-medium text-purple-800 outline-none ring-blue-600 focus:ring-1"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Product Name in English</p>
          <input
            placeholder="your.email@domain.com"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Product Name in Bangla</p>
          <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Category</p>
          <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
        </div>
      </div>
    </div>
  );
}

export default BasicInformationProduct;
