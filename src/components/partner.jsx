import { Image } from "react-bootstrap"
import Number from '../assets/number+text.png'
import logo1 from '../assets/Company logo (1).png'
import logo2 from '../assets/Company logo.png'
import logo3 from '../assets/Vector (1).png'
import logo4 from '../assets/Vector.png'
import '../style/partner.css'

const Partner = () => {
    return(
        <div className="partner">
            <div className="partner-main">
            <div className="brad">
                <Image className="img-brad" src={Number} alt=""></Image>
            </div>
            <div className="gov">
                <Image className="img-gov" src={logo4} alt=""></Image>
                <Image className="img-gov" src={logo3} alt=""></Image>
                <Image className="img-gov" src={logo2} alt=""></Image>
                <Image className="img-gov" src={logo1} alt=""></Image>
            </div>
            </div>
            
        </div>
    )
}

export default Partner