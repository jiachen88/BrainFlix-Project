import '../src/App.scss'
import logo from './assets/images/logo/BrainFlix-logo.svg';
import searchLogo from './assets/images/icons/search.svg'
import imageMohan from './assets/images/Mohan-muruge.jpg'
import uploadIcon from './assets/images/icons/upload.svg'
function App() {
  return (
    <div>
      <header className='brainflix-header'>
        <img className='brainflix-header__logo' src={logo} alt='logo' />
        <div className='brainflix-header__search'>
          <form className='brainflix-header__search-form'>
            <input className='brainflix-header__search-bar' type={'text'}
              placeholder='Search' />
          </form>
          <img className='brainflix-header__mohan' src={imageMohan} alt='Mohan profile' />
        </div>
        <button className='brainflix-header__button'><img src={uploadIcon} alt='a icon for upload' />UPLOAD</button>
      </header>
    </div >
  );
}

export default App;
