import { Link } from 'react-router-dom';
import './Home.css';

function Home () {
    return (
        <div className="home">
            <div className='home-heading '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 p-3'>
                            <h3>Popular Streaming</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-body'>
                <div className='container p-5'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className="card">
                                <Link to="/movies">
                                    <img src="/placeholder.png" className='card-img-top card-placeholder' alt='place' />
                                    <p className='card-image-text'> Movies</p>
                                </Link>
                            </div>
                        </div>
                        <div className='col-3'>
                        <div className="card">
                            <Link to="/series">
                                <img src="/placeholder.png" className='card-img-top card-placeholder' alt='place' />
                                <p className='card-image-text'>Series</p>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home