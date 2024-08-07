import { useRouteError } from 'react-router-dom';
import ButtonLink from './ButtonLink';

function NotFound() {
  const err = useRouteError()
  console.log(err)

  return (
    <div className='flex flex-col items-center'>
      <h1>Something went wrong 😢</h1>
      <p>{err.message}</p>
      <ButtonLink to={-1}>&larr; Go back</ButtonLink>
    </div>
  );
}

export default NotFound;
