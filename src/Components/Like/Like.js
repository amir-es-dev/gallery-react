import './Like.css';
import Heart from '../../Image/heart.png'

const Like = ({imgdata,selectedImg}) => {
    return(
        <div className='like-box'>
            <span>{imgdata[selectedImg]?.likes}</span>
            <img src={Heart} alt="" />
        </div>
    )
}

export default Like;