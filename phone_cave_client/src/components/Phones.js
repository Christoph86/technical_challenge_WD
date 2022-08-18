import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import axios from "axios";

function Phones() {
    const [phones, setPhones] = useState([]);

    const getAllPhones = () => {
        axios
            .get(process.env.REACT_APP_API_URL+"/phones")
            .then((response) => {
                setPhones(response.data)
            })
            .catch((error) => console.log(error));
    };


    useEffect(() => {
        getAllPhones();
    }, []);


    return (
        <>
        <div className="phoneListPage">

            {phones.map((phone) => {
                return (
                    <Card className='bg-warning singleRecipeCard' style={{ width: '18rem' }}> 
                        <Card.Img variant="top" src={phone.imageFileName} alt="missing image" />
                        <Card.Body>
                            <Card.Title>{phone.name}</Card.Title>
                            <Card.Text>
                                <p>Manufacturer: {phone.manufacturer}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                );
            })}

        </div>
        </>
    );
}

export default Phones;