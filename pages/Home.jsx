import {Link} from 'react-router-dom';

export default function Home({handleClick}) {
    return (
        <div className='home'>
            <section className='home--main'>
                <h1 className='home--title'>You got the travel plans, we got the travel vans.</h1>
                <p className='home--text'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <button className='home--button'><Link to='/vans' onClick={handleClick}>Find your van</Link></button>
            </section>
        </div>
    )
}