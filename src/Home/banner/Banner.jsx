import bannerImg from '../../assets/1234.avif'

function Banner() {
    return (
        <div >
            <img className='md:w-full h-[500px]' src={bannerImg} alt="" />
        </div>
    )
}

export default Banner