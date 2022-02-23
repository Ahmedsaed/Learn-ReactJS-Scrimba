import './App.css';
import planetLogo from './images/white-planet.png'
import Card from './components/Card'
import cardData from './components/data'

function App() {
  const CardElements = cardData.map((elem) => {
    return <Card 
              title={elem.title}
              country={elem.location}
              date={elem.startDate + " - " + elem.endDate}
              description={elem.description}
              img={elem.imageUrl}
              mapsUrl={elem.googleMapsUrl}
            />
  })

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <img src={planetLogo} alt="website" />
          <span className="header-text">my travel journal</span>
        </div>
      </header>
      <div className="cards">
        {CardElements}
      </div>
    </div>
  );
}

export default App;
