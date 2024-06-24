import React from 'react'

export default function user(Props) {
    let { id,name, phone, email, company, website ,username} = Props

    let imageUrl = `https://avatars.dicebear.com/v2/avataaars/${Props.username}.svg?options[mood][]=sad`
    return (
        <div>
            <div className="card mx-4 my-4 shadow" style={{maxWidth:'1000px'}}>
            <div className="row g-0">
                <div className="col-md-3">
                    <img src={imageUrl} className="img-fluid rounded-start p-2" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text fs-6 lh-sm">Email : {email}</p>
                        <p className="card-text fs-6 lh-sm">Phone : {phone}</p>
                        <p className="card-text fs-6 lh-sm">Company : {company.name}</p>
                        <p className="card-text fs-6 lh-sm">Website : {website}</p>
                        {/* <p className="card-text fs-6 lh-sm">Address : {address}</p> */}
                        <p className="card-text fs-6 lh-sm">ID : {id}</p>
                        <p className="card-text fs-6 lh-sm">Username : {username}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
