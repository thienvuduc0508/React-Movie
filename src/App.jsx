import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Details, Explore, Home, PageNotFound, SearchResult } from './pages'
import { Footer, Header } from './components';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

