import Image from 'next/image'
import background from '../../assets/images/background.jpg'

export default function Header(){
    return(
        <header className="header" style={{
            backgroundImage: `url(${background.src})`,
            width: '100vw',
            height: '35vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundPosition: '50% 30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            borderRadius: '0px 0px 15px 15px',
          }}>
            <Image className="header__logo" src='/logo.png' alt="Logo League of Legends" width='480' height='200'/>
        </header>
    )
}
