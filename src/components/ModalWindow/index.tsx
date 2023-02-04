import { ReactComponent as Preloader } from '../../images/preloader.svg';

interface ModalWindowProps {
    isLoading: boolean
}

export const ModalWindow = ({ isLoading }: ModalWindowProps) => {
    return (
        <div style={{ display: isLoading ? 'flex' : 'none' }} className='modal'>
            <div className='modal-content'>
                <Preloader className='loader' />
                <div className='modal-text'>Loading...</div>
            </div>
        </div>
    );
}