import { useEffect } from 'react';
import { api } from './services/api.service';

function App() {
  useEffect(() => {
    api.get('example').then((response) => console.log(response.data));
  }, []);
  return (
    <div>
      Hi
    </div>
  );
}

export default App;
