import './App.css'
import ImageList from "@mui/material/ImageList";
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import CardActionArea from '@mui/material/CardActionArea';
import { colorsData } from './shared/colorsData';

function App() {
  return (
    <>
      <div className="root-container">
        <div className="title-container">
          <Typography variant="h1" gutterBottom fontSize={40}>
            Выбери цвет,
          </Typography> 
          <Typography variant="h1" gutterBottom fontSize={40}>
            который тебе по душе
          </Typography> 
        </div>
      <ImageList variant='masonry' cols={3} gap={10}>
        {
          colorsData.map((item) => (
            <ImageListItem key={item.img}>
              <CardActionArea>
                <img 
                  className='color-img'
                  src={`${item.img}`}
                  alt={`${item.title}`}
                  loading="lazy"
                />
                </CardActionArea>
                <ImageListItemBar
                title={`${item.name}`}
                position='below'
                >
                </ImageListItemBar>
            </ImageListItem>  
          ))
        }
      </ImageList>
      </div>
    </>
  )
}

export default App
