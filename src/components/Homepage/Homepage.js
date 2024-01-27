import "../Homepage/Homepage.scss"
import 'animate.css';


const Homepage = () => {
    return (
        <div className="absolute top-1/3 left-2/4 transform -translate-x-2/4 -translate-y-1/3 text-center">
            <div>
                <h2 className="mockupTitle mt-10 text-[65px] animate__animated animate__zoomIn  animate__delay-1s">We Building Tomorrow's Digital Landscape Today</h2>
                <h2 className="mockupTitle text-[26px] animate__animated animate__zoomIn  animate__delay-1s">Everything from simple task to worldwide project</h2>
                <button class="button mt-10">Hover me</button>
            </div>
        </div>
    )
}

export default Homepage