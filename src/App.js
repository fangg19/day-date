import './App.css';
import getDeliveryDates from './intervalsHelper';

const App = () => {
  const days = getDeliveryDates();
  console.log(days);
  return (
    <div className="App">
      {days.map((day, index) => {
        return (
          <div key={index}>
            <div>
              <input type="radio" />
              <label>{day.name}</label>
            </div>
            <div>
              <select>
                {day.intervals.map((interval, index) => {
                  return (
                    <option
                      key={index}
                    >{`${interval.start}-${interval.end}`}</option>
                  );
                })}
              </select>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
