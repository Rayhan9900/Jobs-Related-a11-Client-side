import React, { useEffect, useState } from 'react'
import ClientSiteCard from './ClientSiteCard'
import Title from '../../components/Title'


function ClientSite() {
    const [clients, setClients] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/clients')
            .then(res => res.json())
            .then(data => {
                setClients(data)
            })
    }, [])

    return (
        <div className='py-24'>
            <div className="text-center mb-8 font-bold text-cyan-600" >
                <Title heading='What Our Clients Says' />
            </div>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>

                {
                    clients.map(client => <ClientSiteCard
                        key={client.id}
                        client={client}
                    ></ClientSiteCard>)
                }
            </div>
        </div>
    )
}

export default ClientSite