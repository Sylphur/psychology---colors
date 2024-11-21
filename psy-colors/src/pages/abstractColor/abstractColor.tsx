import './abstractColor.css';

export interface AbstractColorProps {
  title: string,
  description: string,
  imageLink: string,
  textColor: string
}

function AbstractColor(props: AbstractColorProps) {

  return (
    <section className='color-container'>
      <div className="logo" style={{backgroundImage: `url(${props.imageLink})`}}>
      <div className="card">
          <h3 className='card-title' style={{color: `${props.textColor}`}}>{props.title}</h3>
          <div className="card-delimeter" style={{backgroundColor: `${props.textColor}`}}></div>
          <p className='card-p' style={{color: `${props.textColor}`}}>
          {props.description}
          </p>
        </div>
      </div>
    </section>
  )
}
export default AbstractColor