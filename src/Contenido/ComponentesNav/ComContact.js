
function ComContact(props) {

    const imgClic = () =>{

    } 


    return (
        <div>

            <a href={props.enlace} target='_blank' rel='noreferrer'>
                <img src={props.imagen}  className='styled-imagen' alt ='' onClick={imgClic}/>
            </a>
            
        </div>
    );
}
export default ComContact;