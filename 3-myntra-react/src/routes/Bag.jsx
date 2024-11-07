import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import EmptyCart from "../components/EmptyCart";

const Bag = () => {
  const items = useSelector((store) => store.items);
  const bagItems = useSelector((store) => store.bagItem);
  const length = bagItems.length;

  const finalItems = items.filter(({ id }) => {
    return bagItems.indexOf(id) >= 0;
  });

  return (
    <>
      {length === 0 ? (
        <EmptyCart />
      ) : (
        <main>
          <div className="bag-page">
            <div className="bag-items-container">
              {finalItems.map(item => <BagItem key={item.id} item={item} />)}
            </div>
            <div className="bag-summary">
              <BagSummary />
            </div>
          </div>
        </main>
      )}
    </>
  );
};
export default Bag;
