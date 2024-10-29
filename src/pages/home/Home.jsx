import HeroBanner from './hero-banner/HeroBanner'
import Trending from './trending/Trending'
import "./styles.scss";
import Popular from './popular/Popular';
import TopRated from './top-rated/TopRated';

const Home = () => {
  return (
    <div className='homePage'>
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRated/>
    </div>
  )
}

Home.propTypes = {}

export default Home