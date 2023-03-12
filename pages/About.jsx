import {Link} from 'react-router-dom';

export default function About({handleClick}) {
    return (
        <section className='about'>
            <div className='about--img'></div>
            <div className='about--main'>
                <div className='about--main--text'>
                    <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p>
                        Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
                    </p>
                    <br/>
                    <p>
                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                    </p>
                </div>
                <div className='about--main--button-section'>
                    <h3>
                        Your destination is waiting.<br/>Your van is ready.
                    </h3>
                    <button><Link to='/vans' onClick={handleClick}>Explore our vans</Link></button>
                </div>
            </div>
        </section>
    )
}