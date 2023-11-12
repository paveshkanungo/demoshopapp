import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {

  const response = [{
    itemName: "Nirma",
    itemDate: "20",
    itemMonth: "June",
    itemYear: "1998"
  },
  {
    itemName: "SurfExcel",
    itemDate: "232",
    itemMonth: "July",
    itemYear: "199rw"
  },
  {
    itemName: "Pavesh Surf",
    itemDate: "28",
    itemMonth: "Sept",
    itemYear: "1945"
  }
];

  return (
    <div>
      <Card>
      <Item name={response[0].itemName}>Main Hu Aapka First item</Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
      <div className="App">
      Hello Pavesh
    </div>
    </Card>
    </div>
  );
}

export default App;
