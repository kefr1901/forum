import React, { useEffect, useState } from 'react'
import FormComponent from '../Components/FormComponent'
import Authkit from '../Data/Authkit'
import { useHistory } from 'react-router-dom';

export default function RegisterPage() {

    const [formData, setFormData] = useState({});
    const [countryList, setCountryList] = useState(null)

    const history = useHistory();

    function handleOnChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        Authkit.registerUser(formData)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                history.push('/login')
            })

    }

    function getCountryList() {
        Authkit.getCountry()
            .then((res) => res.json())
            .then((data) => {
                setCountryList(data.results)
            })

    }
    //console.log(countryList)

    useEffect(() => {
        getCountryList()
    }, [])


    return (
        <div>
            <FormComponent
                countryList={countryList}
                handleOnChange={handleOnChange}
                email={formData['email']}
                password={formData['password']}
                country={formData['country']}
                firstName={formData['firstName']}
                lastName={formData['lastName']}
                handleOnSubmit={handleOnSubmit} />
        </div>

    )
}
