
import './styles.css';
import instaIcon from '../../assets/images/insta-icon.png';

export default function Footer() {
    return (
        <div className='shw-footer'>
            <div className='show-footer-contents'>
                <div className='show-footer-content'>
                    <img src={instaIcon} alt='Instagram Icon' className='shw-footer-img' />
                    <p>@showcase_cars</p>
                </div>
                <div className='show-footer-content'>
                    <p>Rua 12, 25</p>
                </div>
            </div>
        </div>
    )
}