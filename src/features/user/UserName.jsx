import { useSelector } from 'react-redux';

function User() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;
  return <p className="hidden text-sm font-semibold sm:block">{username}</p>;
}

export default User;
