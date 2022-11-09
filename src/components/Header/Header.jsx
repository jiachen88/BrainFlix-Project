import logo from '../../assets/images/logo/BrainFlix-logo.svg';
import './Header.scss'
import { Link } from 'react-router-dom';

function Header(props) {
    return (<header className='brainflix-header'>
        <img className='brainflix-header__logo' src={logo} alt='logo' />
        {/* Wrapping search bar with Mohan image */}
        <div className='brainflix-header__search'>
            <form className='brainflix-header__search-form'>
                <input className='brainflix-header__search-bar' type={'text'}
                    placeholder='Search' />
            </form>
            <img className='brainflix-header__mohan' src={props.imageMohan} alt='Mohan profile' />
            {/* Search Button Wrapped With Mohan Image */}
        </div>
        <button className='brainflix-header__button'>UPLOAD</button>
        <img className='brainflix-header__mohan-tablet' src={props.imageMohan} alt='Mohan profile' />
    </header >)
}
export default Header