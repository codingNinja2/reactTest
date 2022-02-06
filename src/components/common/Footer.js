import './Footer.css';



function Footer () {
    
    return (
      
        <footer className="bg-dark p-5">

          <div className="container bg-dark">

            <div className="row row-1">
                <div className="col-12 text-start c-1">
                    <ul>
                        <li>Home </li>
                        <li>Terms and Conditions </li>
                        <li>Privacy Policy</li>
                        <li>Collaction Statement </li>
                        <li>Help </li>
                        <li>Manage Account </li>
                    </ul>

                    <p className='text-muted copy'>Copyright &copy; 2022 Demo Streaming</p>
                </div>

                <div className="col-12">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12 text-start">
                            <ul>
                                <li><img src="/social/facebook-white.svg" className="img-fluid" alt='dummy'/></li>
                                <li><img src="/social/twitter-white.svg" className="img-fluid" alt='dummy'/></li>
                                <li><img src="/social/instagram-white.svg" className="img-fluid" alt='dummy'/></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <ul>
                                <li><img src="/store/app-store.svg" className="img-fluid" alt='dummy'/></li>
                                <li><img src="/store/play-store.svg" className="img-fluid" alt='dummy'/></li>
                                <li><img src="/store/windows-store.svg" className="img-fluid" alt='dummy'/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </footer>
      
      
      );

}

export default Footer