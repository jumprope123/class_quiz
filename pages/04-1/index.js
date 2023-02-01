import axios from "axios"

export default function index() {


   const handleClick = async(e) => {
        const result = await axios.get("https://koreanjson.com/users ");
        console.log(result);
        
    }

    return(
        <>
        <button onClick={handleClick}>REST-API 요청하기</button>
        </>
    )
}