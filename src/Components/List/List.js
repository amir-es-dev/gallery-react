import './List.css';

const List = ({ imgdata, setSelectedImg}) => {

    const openPhoto = (photoIndex) => {
        setSelectedImg(photoIndex);
    };

    return (
        <div className='list-box'>
            {imgdata.map((photo, index) => (
                <div onClick={() => openPhoto(index)} className='img-div' key={photo.id}>
                    <img src={photo.urls.thumb} alt="" />
                    <span>@{photo.user.social.instagram_username}</span>
                </div>
            ))}
        </div>
    )
}

export default List;