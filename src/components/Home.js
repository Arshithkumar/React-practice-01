import React, { useEffect, useState } from 'react'
import User from './User'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './Home.css';
export default function Home() {
    let [users, setUsers] = useState([])
    let [search, setSearch] = useState([])
    let [country, sCountry] = useState('')

    const api_avatar = () => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => {
            return res.json()
        }).then(da => {
            setUsers(da)
            console.log(da)
        })
    }

    let filteredUser = users.filter((user) => {
        return user.name.includes(search)
    })

    let finalData = filteredUser.filter((val) => {
        return val.company.name.includes(country)
    })



    useEffect(() => {
        api_avatar();
    }, [])


    return (
        <div className='text-center my-2'>
            <TextField id="outlined-basic" label="search User" varient="outlined" onChange={(e) => setSearch(e.target.value)} />
            <TextField
                id="outlined-select-currency"
                select
                label="Select"
                defaultValue=""
                helperText="Please select your company"
                onChange={(e) => sCountry(e.target.value)}
            >
                {users.map((option) => (
                    <MenuItem key={option.company.name} value={option.company.name}>
                        {option.company.name}
                    </MenuItem>
                ))}
            </TextField>

            <div className='position-relative py-2 px-4'>
                {
                    finalData.map((user) => {
                        return (
                            <Link to={`/user/${user.id}`} key={user.id} state={{ data: user }}>
                                <User
                                    name={user.name}
                                    id={user.id}
                                    // address={user.address}
                                    company={user.company}
                                    website={user.website}
                                    phone={user.phone}
                                    email={user.email}
                                    username={user.username}
                                />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )

}
