import React, { useState, useCallback,memo } from 'react';

function UseCallback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onIncrement={increment} />
    </div>
  );
}

const ChildComponent = memo(({onIncrement})=>{
console.log('ChildComponent rendered');
  return <button onClick={onIncrement}>Increment</button>;
})


export default UseCallback;
