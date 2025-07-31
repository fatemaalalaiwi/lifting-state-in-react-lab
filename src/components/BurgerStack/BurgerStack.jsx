

  const BurgerStack = ({ stack, removeFromBurger }) => {
  return <ul>
         {stack.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        stack.map((ingredient, index) => (
          <li style={{ backgroundColor: ingredient.color}} key={index}>
            {/* طريقه مختصره عن handleremove */}
            <button onClick={() => removeFromBurger(index)}>  
              {ingredient.name} ❌
            </button>
          </li>
        ))
    )}
      </ul>

  
};

export default BurgerStack;