import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/BrainFlix-logo.svg';
import './Header.scss'


function Header(props) {
    return (<header className='brainflix-header'>
        <Link to={'/videos/84e96018-4022-434e-80bf-000ce4cd12b8'}> <img className='brainflix-header__logo' src={logo} alt='logo' /></Link>
        {/* Wrapping search bar with Mohan image */}
        <div className='brainflix-header__search'>
            <form className='brainflix-header__search-form'>
                <input className='brainflix-header__search-bar' type={'text'}
                    placeholder='Search' />
            </form>
            <img className='brainflix-header__mohan' src={props.imageMohan} alt='Mohan profile' />
            {/* Search Button Wrapped With Mohan Image */}
        </div>
        <Link to={'/upload'}> <button className='brainflix-header__button'>UPLOAD</button></Link>
        <img className='brainflix-header__mohan-tablet' src={props.imageMohan} alt='Mohan profile' />
    </header >)
}
export default Header