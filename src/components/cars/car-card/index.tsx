import './styles.css';
import carCard from '../../../assets/images/car-card.png';
import ButtonPrimary from '../../buttons/button-primary';

export default function CarCard() {
    return (
        <div className='shw-car'>
            <img src={carCard} alt="Carro 1" />
            <h2 className='shw-car-title'>Audi R8 10v</h2>
            <p className='shw-car-title'>Audi R8 10v</p>
            
            <div className='shw-btn-center'>
                <ButtonPrimary/>
            </div>
        </div>
    )
}