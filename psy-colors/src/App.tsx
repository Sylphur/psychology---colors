import './App.css'
import ImageList from "@mui/material/ImageList";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import CardActionArea from '@mui/material/CardActionArea';
import { colorsData } from './shared/colorsData';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="root-container">
        <div className="header-container">
          <img className='header-logo' src={`https://s1.stc.all.kpcdn.net/putevoditel/projectid_346574/images/tild3764-3734-4336-b262-613434636139__1.jpg`} alt="header-logo" />
        </div>
        <div className="title-container">
          <h1 className='title'>
            {`Выбери цвет, \n который ты ассоциируешь с собой`}
          </h1> 
        </div>
      <ImageList variant='masonry' cols={3} gap={10}>
        {
          colorsData.map((item) => (
            <Link to={item.link}>
              <CardActionArea>
              <ImageListItem key={item.img}>
                  <img 
                    className={item.name === 'Белый' ? 'color-img-white' : 'color-img'}
                    src={`${item.img}`}
                    alt={`${item.title}`}
                    loading="lazy"
                  />
                <ImageListItemBar
                title={`${item.name}`}
                position='below'
                >
                </ImageListItemBar>
            </ImageListItem> 
            </CardActionArea>
            </Link>
          ))
        }
      </ImageList>
      </div>
    </>
  )
}

export default App
