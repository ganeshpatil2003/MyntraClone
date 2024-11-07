import { useDispatch, useSelector } from "react-redux";
import { bagItemActions } from "../store/bagItemSlice";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const HomeItem = ({ item }) => {
  const bagItem = useSelector((store) => store.bagItem);
  const dispatch = useDispatch();
  const handelBtnadd = () => {
    dispatch(bagItemActions.addItem(item.id));
  };
  const handelBtnremove = () => {
    dispatch(bagItemActions.removeItem(item.id));
  }
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">{item.discount_percentage}% OFF</span>
      </div>
      {bagItem.indexOf(item.id) >= 0 ? (
        <button type="button" className="btn btn-danger btn-add-bag" onClick={handelBtnremove}>
          <IoIosRemoveCircleOutline />
          Remove from bag
        </button>
      ) : (
        <button type="button" className="btn btn-success btn-add-bag"  onClick={handelBtnadd}>
          <IoAddCircleOutline />
          Add to bag
        </button>
      )}
    </div>
  );
};
export default HomeItem;
