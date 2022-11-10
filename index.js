import useKeyPress from './useKeyPress';

export default function App() {
  const onKeyPress = (event) => {
    console.log(`key pressed: ${event.key}`);
  };

  useKeyPress(['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'], onKeyPress);
 
}
