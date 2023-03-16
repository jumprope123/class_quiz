import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function index() {
    const handleComplete = (address: Address) => {
        console.log(address);
    };
    return (
        <>
            <DaumPostcodeEmbed onComplete={handleComplete} />
        </>
    );
}
