import {ReactComponent as Hamburger} from '../../Assets/Members/hamburger.svg';
import {ReactComponent as Info} from '../../Assets/Members/info.svg';
import {ReactComponent as Bell} from '../../Assets/Members/bell.svg';
import {ReactComponent as Arrow} from '../../Assets/Members/arrowDown.svg';
import Avatar from '../../Assets/Members/headerImage.png';


const TopHeader = ( ) => {
    return (
         <div style={{padding: '20px', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', gap: 18}}>
                <Hamburger /> 
                <span style={{fontWeight: 'bold', color: 'black'}}>Members</span>
            </div>
            <div style={{display: 'flex',alignItems: 'center', gap: 18}}>
                
                <Info style={{height: 15, width: 15}} />
                <Bell style={{height: 15, width: 15}} />
                <img src={Avatar} width={30} height={30} style={{borderRadius: '50%'}} />
                <Arrow style={{height: 10, width: 10}} />

            </div>
         </div>  
    )
}

export default TopHeader;