import React, { useEffect, useState } from 'react';

function DataComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/data`)
      .then(response => response.json())
      .then(fetchedData => setData(fetchedData));
  }, []);

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataComponent;
