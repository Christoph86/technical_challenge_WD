import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function PhoneDetails() {

    const { phoneId } = useParams();
    const [phoneDetails, setPhoneDetails] = useState(null);

    useEffect(() => {
        getPhoneDetails();
    }, []);

    const getPhoneDetails = () => {
        axios
            .get(process.env.REACT_APP_API_URL+"/phones/" + phoneId)
            .then((response) => {
                setPhoneDetails(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }


    const renderPhoneDetails = () => {
        return (
            <div className='phoneDetails'>
                <img src={phoneDetails.imageFileName} alt="missing image"></img>
                <h1>{phoneDetails.name}</h1>
                <p>Manufacturer: {phoneDetails.manufacturer}</p>
                <p>Color: {phoneDetails.color}</p>
                <p>Screen: {phoneDetails.screen}</p>
                <p>CPU :{phoneDetails.processor}</p>
                <p>RAM :{phoneDetails.ram}</p>
                <p>Description :{phoneDetails.description}</p>
            </div>
        );
    }


    return (
        <>
            {
                phoneDetails === null
                    ? <p>loading...</p>
                    : renderPhoneDetails()
            }
        </>

    )

}

export default PhoneDetails;