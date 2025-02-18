import {React,useState,useEffect} from 'react'
import vid1 from "../assets/video1.mp4"
import vid2 from "../assets/video2.mp4"

const Hero = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 250);
    }, []);



    return (
        // <div className="flex flex-col item-center mt-6 lg:mt-20">
        <div
            className={`flex flex-col item-center mt-6 lg:mt-20 transition-opacity duration-1000 ease-in-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
        >

            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide ransition-transform duration-1000 ease-in-out">
                Smarter & Faster <br />
                <span className=' bg-gradient-to-t from-[#5F0F40] to-[#310E68] text-transparent bg-clip-text'>The Future Starts with QuantumAI.</span>
            </h1>
            <div className=' flex justify-center transition-transform duration-1000 ease-in-out delay-300'>
                <p className='mt-10 text-lg text-center text-neutral-500 max-w-[97%]'>
                    QuantumAI is a pioneering tech company that develops AI-powered applications,
                    including chatbots and advanced conversational agents like ChatGPT.
                    It aids developers in automating testing, deploying projects, and generating documents, optimizing workflows with cutting-edge AI solutions.
                </p>
            </div>
            <div className=' flex justify-center my-90 mt-10 transition-transform duration-1000 ease-in-out delay-500'>
                <a href="" className='bg-gradient-to-t from-[#5F0F40] to-[#310E68] py-3 px-4 mx-3 h-10 rounded-md flex items-center'>
                    Start for free
                </a>
                <a href="" className=' py-3 px-4 mx-3  h-10 rounded-md flex items-center border '> Documentation

                </a>
            </div>
            <div className='flex mt-10 justify-center gap-3 transition-transform duration-1000 ease-in-out delay-700'>
                <video autoPlay loop muted className=' rounded-2xl w-1/2 border border-[#310E68] shadow-[#5F0F40] mx-2 my-4' src="">
                    <source src={vid1} type="video/mp4" />
                    Your browser does not support the video tag
                </video>
                <video autoPlay loop muted className=' rounded-2xl w-1/2 border border-[#310E68] shadow-[#5F0F40] mx-2 my-4' src="">
                    <source src={vid2} type="video/mp4" />
                    Your browser does not support the video tag
                </video>
            </div>
        </div>
    )
}

export default Hero