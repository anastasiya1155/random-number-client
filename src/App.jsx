import React from 'react';
import socketIOClient from 'socket.io-client';
import Chart from 'react-rt-chart';
import 'c3/c3.css';
import './App.css';

const App = () => {
  const [newData, setNewData] = React.useState(null);

  React.useEffect(() => {
    const socket = socketIOClient('http://127.0.0.1:4000');
    socket.on('data', setNewData);
  }, []);

  return (
    <div className="chart-container">
      {newData && (
        <Chart
          fields={['value']}
          data={{ date: new Date(newData.timestamp), value: newData.value }}
          maxValues={15}
        />
      )}
    </div>
  );
};

export default App;
