function ProductDelivery() {
  return (
    <div>
      <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
        <div className="shrink-0 mr-auto sm:py-3">
          <p className="font-medium">Delivery</p>
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Weight</p>
          <input
            type="number"
            placeholder="0.5kg"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Safety Warning</p>
          <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-4">
          <div>
            <p className="shrink-0 w-32 font-medium">Package Dimention</p>
          </div>
          <div>
            <p className="shrink-0 w-32 font-medium">Lenghth</p>
            <input
              type="number"
              placeholder="0"
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            />
          </div>
          <div>
            {" "}
            <p className="shrink-0 w-32 font-medium">Widhth</p>
            <input
              type="number"
              placeholder="0"
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            />
          </div>
          <div>
            {" "}
            <p className="shrink-0 w-32 font-medium">Height</p>
            <input
              type="number"
              placeholder="0"
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDelivery;
