import cari from '../assets/icon frame.png'
import frame1 from '../assets/icon frame (1).png'
import frame2 from '../assets/icon frame (2).png'
import '../style/choose.css'

const Choose = () => {
    return(
        <div className="choose-com">
            <div className="utama">
                <div className="text-utama">
                <h3>WHY CHOOSE US?</h3>
                <h1>We care about details and the quality of our products</h1>
                </div>
                <div className="riwayat">
                    <div className="list satu">
                        <div className="icon"><img src={cari} alt="cari" /></div>
                        <div className="text">MANUFACTURED WITH QUALITY MATERIALS</div>
                    </div>
                    <div className="list dua">
                        <div className="icon"><img src={frame1} alt="frame1" /></div>
                        <div className="text">5 YEARS OF WARRANTY FOR EACH PROFUCT</div>
                    </div>
                    <div className="list tiga">
                        <div className="icon"><img src={frame2} alt="frame2" /></div>
                        <div className="text">20 YEARS OF EXPERTISE</div></div>
                </div>
            </div>
        </div>
    )
}
export default Choose