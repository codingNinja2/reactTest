import Footer from "./common/Footer";
import Header from "./common/Header";
import streamData from './../data/sample.json';

function Series () {

  const seriesData  =  streamData.entries.filter ( entry => entry.programType === 'series' && entry.releaseYear >= 2010  ) 

  seriesData.sort((movieA, movieB) =>  {

        var nameA = movieA.title.toUpperCase(); // ignore upper and lowercase
        var nameB = movieB.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
        return -1;
        }
        if (nameA > nameB) {
        return 1;
        }
    
        // names must be equal
        return 0;
    
        })

    return (
     <>
        <Header></Header>
          <div className="movie">
                <div className='home-heading '>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 p-3'>
                                <h3>Series</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='movie-body'>
                    <div className='container p-5'>
                        <div className='row'>
                        {seriesData.map((serial) =>
                            <div className='col-lg-3 p-3 col-sm-12'>
                                <div className="card">
                                  <img src={serial.images["Poster Art"].url} className='card-img-top' alt='place' />
                                  <div class="card-body">
                                    <h5 class="card-title">{serial.title}</h5>
                                  </div>
                                </div>
                            </div>
                        )}
                         
                        </div>
                    </div>
                </div>
            </div>
        <Footer></Footer>
     </>
      
      );

}

export default Series