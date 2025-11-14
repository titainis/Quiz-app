import { Gender } from "../../Types/GenderType";


const CheckoutPage = () => {

    const gender = localStorage.getItem("gender") as Gender;

    return (
        <>
            <div>
                {gender === 'man' && <img></img>}
                {gender === 'woman' && <img></img>}
            </div>
        </>
    );
}

export default CheckoutPage;