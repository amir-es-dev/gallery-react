import './Image.css';
import Like from '../Like/Like';

const Image = ({imgdata,selectedImg}) => {
    return(
        <div className='image'>
            <img src={imgdata[selectedImg]?.urls?.regular} alt="" />
            <Like imgdata={imgdata} selectedImg={selectedImg} />
        </div>
    )
}

export default Image;