
import { InventoryProduct } from "../lib/types"
import ProductComponent from "./product-component";
import ProductNotFound from "./product-notfound";


interface TrendingProps {
  title:string;
  items: InventoryProduct[] ;
 
}

const TrendingList:React.FC<TrendingProps> = ({
  title,
  items
}: TrendingProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{title}</h3>
      { items.length === 0 && <ProductNotFound />}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <ProductComponent key={item.id} data={item} />
        ))}
      </div>
    </div>
   );
}
 
export default TrendingList;
