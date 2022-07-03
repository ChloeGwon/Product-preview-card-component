import star from './images/icon-star.svg'
import thanks from './images/illustration-thank-you.svg'
import {useState} from 'react'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [items, setItems] = useState("")

  const Btn = ({ num }) => {
    return <button onClick={()=>setItems(num)} className="btnNum text-gray-100 bg-gray-700 w-10 h-10 pt-1 rounded-full">{num}</button>
  }

  return (
    <>
      {!isSubmitted && 
        <div className="wrapper p-4">
          <img className="bg-gray-600 p-1 rounded-full" src={star} alt='' />
          <h2 className="py-5">How did we do?</h2>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <ul className="grid grid-cols-5 mb-8 pt-5 pl-3 gap-5">
            <li><Btn num={1} /></li>
            <li><Btn num={2} /></li>
            <li><Btn num={3} /></li>
            <li><Btn num={4} /></li>
            <li><Btn num={5} /></li>
          </ul>
          <div className="text-center">
            <button onClick={()=>setIsSubmitted(true)} className="btn-submit uppercase w-80 py-1.5">submit</button>
          </div>
        </div>
      }
      {isSubmitted && <ThankYou items={items} setIsSubmitted={setIsSubmitted}/> }
    </>
  );
}

const ThankYou = ({ items, setIsSubmitted }) => {
  return (
    <div className="wrapper p-4">
      <img src={thanks} alt='' className="mx-auto py-2" />
      <div className="flex justify-center align-center">
        <p className="rateResult bg-gray-600 text-center pt-1 rounded-full text-sm px-3">You selected {items} out of 5</p>
      </div>
      <h2 className="text-center py-3">Thank you</h2>
      <p className="text-center pb-8">We appreciate you taking the time to give a rating. 
        If you ever need more support, don’t hesitate to get in touch!</p>
      <div className="text-center">
        <button onClick={()=>setIsSubmitted(false)} className="btn-submit uppercase w-80 py-1.5">rate again</button>
      </div>
    </div>
  )
}

export default App;
