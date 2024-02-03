import "../Services/Services.scss"


const Services = () => {
    return (
        <div className="h-screen relative md:px-[20%] px-10 md:text-left text-center">
            <div className="md:pt-[20%] pt-[35%]">
                <div className="md:w-[60%]">
                    <h1 className="servicesText text-6xl">Future-Ready IT Solutions for Today's Challenges</h1>
                    <p className="servicesText text-xl">Elevate your business operations to the next level with our comprehensive IT services. We focus on delivering seamless and efficient solutions, including network management, system integration, and 24/7 support. Experience unparalleled reliability and performance with our advanced IT offerings.</p>
                </div>
                <div className="">
                    <div class="loaderService md:right-[5%] md:top-[50%] left-[50%] top-[125%]">
                        <div class="loaderService-cube">
                            <div class="faceService"></div>
                            <div class="faceService"></div>
                            <div class="faceService"></div>
                            <div class="faceService"></div>
                            <div class="faceService"></div>
                            <div class="faceService"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services