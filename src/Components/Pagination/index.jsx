import { ReactComponent as Arrow } from "../../Assets/Members/arrowDown.svg";
import { ReactComponent as Right } from "../../Assets/Members/rightArrow.svg";
import { ReactComponent as Left } from "../../Assets/Members/leftArrow.svg";


const Pagination = () => {
    return (
        <section style={{ display: 'flex',alignItems: 'center', alignItems: 'center',justifyContent: 'space-between', paddingLeft: '5px', paddingRight: '5px', marginTop: '35px' }}>
            <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                <span style={{ borderRadius: '10px', border: '1px solid #9CA3AF', display: 'flex', alignItems: 'center', gap: 30, paddingTop: '3px', paddingBottom: '3px', paddingRight: '10px', paddingLeft: '10px' }}>
                    <span style={{ color: '#9CA3AF' }}>10</span>
                    <Arrow />
                </span>
                <span>Showing 10 of 10 members</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{
                    display: 'flex', gap: '7px', alignItems: 'center', paddingTop: "7px",
                    paddingBottom: "7px",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    border: '1px solid #9CA3AF',
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '10px',

                }}>
                    <Left />
                    <span>Previous</span>
                </span>
                <span style={{
                    display: 'flex', gap: '7px', alignItems: 'center', paddingTop: "7px",
                    paddingBottom: "7px",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    border: '1px solid #9CA3AF',
                    // borderRadius: '10px'
                }}>1</span>
                <span style={{
                    display: 'flex', gap: '7px', alignItems: 'center', paddingTop: "7px",
                    paddingBottom: "7px",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    border: '1px solid #9CA3AF',
                    // borderRadius: '10px'
                }}>2</span>
                <span style={{
                    display: 'flex', gap: '7px', alignItems: 'center', paddingTop: "7px",
                    paddingBottom: "7px",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    border: '1px solid #9CA3AF',
                    // borderRadius: '10px'
                }}>3</span>
                <span style={{
                    display: 'flex', gap: '7px', alignItems: 'center', paddingTop: "7px",
                    paddingBottom: "7px",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    border: '1px solid #9CA3AF',
                    // borderRadius: '10px'
                }}>..</span>
                <span style={{
                    display: 'flex', gap: '7px', alignItems: 'center', paddingTop: "7px",
                    paddingBottom: "7px",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    border: '1px solid #9CA3AF',
                    // borderRadius: '10px'
                }}>9</span>
                <span style={{
                    display: 'flex', gap: '7px', alignItems: 'center', paddingTop: "7px",
                    paddingBottom: "7px",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    border: '1px solid #9CA3AF',
                    // borderRadius: '10px'
                }}>10</span>
                <span style={{
                    display: 'flex', gap: '7px', alignItems: 'center', paddingTop: "7px",
                    paddingBottom: "7px",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    border: '1px solid #9CA3AF',
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px',
                }}>
                    <span>Next</span>
                    <Right />

                </span>
            </div>
        </section>
    )
}

export default Pagination;