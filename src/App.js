import Card from './components/Card';
import { CardData } from './components/CardData';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

export default function App() {
  return (
    <div className='container'>
      <div className='row h-100'>
        <div class='col d-flex flex-column-md'>
          {CardData.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
