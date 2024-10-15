import './categoryCard.css'
export default function CategoryCard(props) {
  return (
    <div className='mainCat'>
       <h3>{props.title}</h3>
       <p>{props.description}</p>
    </div>
  )
}
