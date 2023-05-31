import ProductUploadForm from "@/components/forms/ProductUploadForm";
import Sidebar from "@/components/sellers/sidebar";

function Upload() {
  return (
    <div className="flex gap-8">
      <Sidebar />
      <ProductUploadForm />
    </div>
  );
}

export default Upload;
