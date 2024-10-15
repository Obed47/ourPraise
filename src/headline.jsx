import './headline.css'
export default function Headline() {
  return (
    <div className='mainHead'>
        <div className="links">
        <ul>
            <li className='Home'>Home</li>
            <li>About</li>
            <li>Textimonials</li>
            <li>Contact</li>
        </ul>
        </div>
        <div className="centerTitle">
         
        </div>
        <div className="buttons">
            <button className='login'>Login</button>
            <button className='signUp'>Sign Up</button>
        </div>
    </div>
  )
}
