import BgImg from'../Images/bgimg.png'
const HomeCover = () => {
    return (
        <div className='container-fluid'>
            {/* Responsive home cover image */}
            <img src={BgImg} className="img-fluid" alt="home screen" width="1480px" height="700px" />
        </div>
    );
}
export default HomeCover;