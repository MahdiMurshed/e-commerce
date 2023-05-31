import BasicInformationProduct from "../sellers/BasicInformationProduct";
import ProductAttributes from "../sellers/ProductAttributes";
import ProductDelivery from "../sellers/ProductDelivery";

function ProductUploadForm() {
  return (
    <div>
      <BasicInformationProduct />
      <ProductAttributes />
      <ProductDelivery />
    </div>
  );
}

export default ProductUploadForm;
