import './abstractColor.css';

export interface AbstractColorProps {
  title: string,
  description: string
  imageLink: string
}

function AbstractColor(props: AbstractColorProps) {

  return (
    <section className='color-container'>
      <div className="card-container">
        <div className="card-description">
          <h3>{props.title}</h3>
          <div className="card-delimeter"></div>
          <p className='shape-description'>
          {props.description}
          </p>
        </div>
        <div className="image-container">
      <img src={`${props.imageLink}`} className="logo logo-circle" alt={props.title} />
      </div>
      </div>
    </section>
  )
}
export default AbstractColor