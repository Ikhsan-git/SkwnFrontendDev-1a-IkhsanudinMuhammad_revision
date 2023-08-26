import Nav from '../components/Nav'
import '../style/home.css'
import image64 from '../assets/image 64.png'
import { Button, Image } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const Home = () => {
    return(
        <div className="home">
            <Nav/>
            <div className="main-home">
                <div className="home-left">
                    <h1>The kind of furniture you have been looking for</h1>
                    <div className="catalog">
                    <Form.Control
                    type="text"
                    placeholder="SEARCH CATALOG"
                    className=" search "
                    />
                    <Button className='button-yt'>WATCH VIDIOS</Button>
                    </div>
                </div>
                <div className="home-right">
                <Image className='image-utama' src={image64} alt="image64"/>
                <div className="info">
                <div className="price">$329</div>
                <div className="title">Pösht Sofa</div>
                <Button className='button-benner'>VIEW DETAILS</Button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home