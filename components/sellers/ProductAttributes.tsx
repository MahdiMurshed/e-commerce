function ProductAttributes() {
  return (
    <div>
      <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
        <div className="shrink-0 mr-auto sm:py-3">
          <p className="font-medium">Product Attributes</p>
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Brand Name</p>
          <input
            placeholder="No Name"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Material</p>
          <input
            placeholder="leather"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Safety Warning</p>
          <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Model</p>
          <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Country of Origin</p>
          <input
            placeholder="your.email@domain.com"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Certifications</p>
          <input
            placeholder="Nike"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductAttributes;
