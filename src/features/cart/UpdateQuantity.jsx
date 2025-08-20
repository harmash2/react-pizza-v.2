import { useDispatch, useSelector } from 'react-redux';
import Button from '../ui/Button';
import { increaseItem, decreaseItem } from './cartSlice';

function UpdateQuantity({ pizzaId, currQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItem(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-bold">{currQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItem(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateQuantity;
