import { ReactComponent as Plus } from '../../Assets/Members/plus.svg';
import { ReactComponent as Search } from '../../Assets/Members/search.svg';

import Avatar from '../../Assets/Members/headerImage.png';


const TopHeader = () => {
    return (
        <div style={{ marginTop: '24px',ft: '40px', marginRight: '40px', paddingTop: '12px', paddingBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 18 }}>
                {/* <Hamburger />  */}
                <span style={{ fontWeight: 'bold', color: 'black' }}>All Member</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>

                <div style={{ display: 'flex', alignItems: 'center',alignItems: 'center', gap: '15px',backgroundColor:'#F1F5F9', paddingTop: '8px',paddingBottom: '8px', paddingLeft: '15px', paddingRight: '15px', borderRadius: '9px' }}>
                <input placeholder='Search member' type='text' style={{ outline: 'none', backgroundColor:'#F1F5F9'}} />    
                <Search style={{ height: 15, width: 15 }} />
                </div>
                <span style={{ display: 'flex', alignItems:'center',gap: '10px', backgroundColor:'#6366f1', paddingLeft: '18px', paddingRight: '18px',paddingTop: '7px', paddingBottom: '7px', borderRadius: '9px' }}>
                <Plus style={{ height: 15, width: 15 }} />
                   <span style={{ color: 'whitesmoke'}}>Add Member</span> 
                </span>
            </div>
        </div>
    )
}

export default TopHeader;