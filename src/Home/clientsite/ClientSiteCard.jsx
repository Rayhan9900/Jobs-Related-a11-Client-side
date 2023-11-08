import Title from "../../components/Title";




function ClientSiteCard({ client }) {

    const { img, description, name } = client;

    return (
        <div>

            <div className="card w-96 glass shadow-2xl shadow-cyan-300 mb-5">

                <div className="card-body">
                    <p>{description}</p>
                </div>
                <div className='flex gap-4'>
                    <figure><img className='rounded-full w-full h-20 ml-4 mb-3' src={img} alt="car!" /></figure>
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </div>
    )
}

export default ClientSiteCard
