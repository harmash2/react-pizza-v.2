import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'text-sm tracking inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + 'py-1 md:px-5 text-xs md:py-2',
    round: 'bg-yellow-400 rounded-full px-4 py-2 text-sm',
    delete:
      'text-sm tracking inline-block rounded-full px-4 py-2 font-semibold uppercase text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 bg-stone-200 py-1.5 sm:py-3 border-2 border-stone-300 focus:ring-stone-300 hover:bg-stone-400 active:bg-stone-400',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
