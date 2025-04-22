
import { Helmet, HelmetProvider } from 'react-helmet-async';

const NotFound = () => {
    return(
        <HelmetProvider>
            <Helmet>
                <title>Page Not Found - citadel coworkers</title>
                <meta name="description" content="how can we help you Common Queries Frequently Asked Questions 1. How can Citadel Coworkers help my business grow? CCW offers a large talent pool of professionals from various domains, whom you can hire as a dedicated employee for your business. Unlike a freelancer, CCW resources work exclusively for you, and you have absolute managerial […]" />
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            <section className="notFound">
                <div className="container">
                    <div className="row align-items-center mb-3">
                        <div className="col-md-12 col-12">
                            <img src="/images/page-not-found.jpg" alt=""/>
                            <div className='text-center mt-4'>
                                <a href="/" className="colorBtn wideBtn">Go to Home</a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>
        </HelmetProvider>
    )
};

export default NotFound;