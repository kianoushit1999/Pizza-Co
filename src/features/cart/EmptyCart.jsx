import ButtonLink from '../../ui/ButtonLink';

function EmptyCart() {
  return (
    <div className='flex flex-col text-center space-y-4'>
      <ButtonLink to="/menu">
        <span className="inline-block">&rarr;</span> Menu
      </ButtonLink>

      <p className='font-semibold uppercase'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
