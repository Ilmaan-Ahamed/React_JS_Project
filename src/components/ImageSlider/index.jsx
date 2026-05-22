import { useEffect, useState } from "react"


export default function ImageSlider({url, limit }) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);
    
    async function fetchImges(geturl) {
        try {
            
            setLoading(true)

            const response = await fetch(geturl);
            const data = await response.json();

            if (data) {
                setImages(data)
                setLoading(false)
            }

        } catch (e) {
            setErrorMsg(e.massage);
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(url !== '') fetchImges(url)
    },[url])

    return <div className="container"></div>
}