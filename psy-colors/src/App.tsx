import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageList from "@mui/material/ImageList";
import ImageListItem from '@mui/material/ImageListItem';

function App() {
  const [count, setCount] = useState(0);
  const itemData = [
    {
      img: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_346574/images/tild6436-6134-4130-a532-313730313838__2.jpg',
      title: 'Red square'
    },
    {
      img: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_346574/images/tild6463-6631-4130-a439-373961313762__3.jpg',
      title: 'Orange square'
    },
    {
      img: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_346574/images/tild3630-6162-4431-a564-393631393338__4.jpg',
      title: 'Yellow square'
    },
    {
      img: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_346574/images/tild6632-6234-4633-b564-316361626438__1.jpg',
      title: 'Green square'
    },
    {
      img: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_346574/images/tild3336-3666-4630-b932-396439363532__2.jpg',
      title: 'Cyan square'
    },
    {
      img: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_346574/images/tild3333-3533-4561-a363-613865366134__4.jpg',
      title: 'Blue square'
    },
    {
      img: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_346574/images/tild3366-6636-4430-b134-306434653431__6.jpg',
      title: 'Violet square'
    },
    {
      img: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_346574/images/tild3461-6634-4962-b062-613235323730__7.jpg',
      title: 'Black square'
    },
    {
      img: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_346574/images/tild6433-3339-4539-b034-303739616664__11.jpg',
      title: 'White square'
    },
    {
      img: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_346574/images/tild3064-6632-4030-a462-623636343638__3.jpg',
      title: 'Brown square'
    },
    {
      img: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_346574/images/tild6432-3133-4566-b439-656532313436__6.jpg',
      title: 'Gray square'
    },
    {
      img: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_346574/images/tild3663-3034-4339-b665-633335383637__6.jpg',
      title: 'pink square'
    },
  ]

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ImageList sx={{width: 500, height: 450}} variant='woven' cols={3} gap={8}>
        {
          itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img 
                src={`${item.img}`}
                alt={`${item.title}`}
                loading="lazy"
              />
            </ImageListItem>
          ))
        }
      </ImageList>
    </>
  )
}

export default App
