import { useSelector } from 'react-redux';
import { formatCurrency } from '../utilities/helpers';
import DeleteItem from './DeleteItem';
import UpdateQuantity from './UpdateQuantity';
import { currentQuantity } from './cartSlice';

function CartItem({ item }) {
  //eslint-disable-next-line
  const { pizzaId, name, quantity, totalPrice } = item;
  const currQuantity = useSelector(currentQuantity(pizzaId));
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 font-semibold sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateQuantity pizzaId={pizzaId} currQuantity={currQuantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
