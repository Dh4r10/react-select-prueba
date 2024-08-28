import { useState } from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';

const loadOptions = async (inputValue = null) => {
  try {
    if (!inputValue) return;
    const response = await axios.get(
      `http://127.0.0.1:8000/api/productos/?denominacion=${inputValue}`
    );
    return response.data.map((item) => ({
      label: item.denominacion,
      value: item.producto_id,
    }));
  } catch (error) {
    console.error('Error loading options:', error);
    return [];
  }
};

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  console.log('selectedOption', selectedOption);

  return (
    <main>
      <div style={{ width: 300 }}>
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onChange={handleChange}
          value={selectedOption}
        />
      </div>
    </main>
  );
}

export default App;
