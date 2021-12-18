import Card from './components/Card';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.scss';

const cards = [
  {
    id: '1',
    variant: 'hover',
    front: 'Hover',
    back: 'Back',
  },
  {
    id: '2',
    variant: 'click',
    front: 'Click',
    back: 'Back',
  },
  {
    id: '3',
    variant: 'focus',
    front: 'Focus',
    back: 'Back',
  },
];

export default function App() {
  return (
    <div className='container'>
      <div className='row h-100'>
        <div class='col d-flex flex-column flex-md-row justify-content-around align-items-center'>
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
