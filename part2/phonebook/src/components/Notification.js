const Notification = ({message}) =>{
    if( message === null){
        return null
    }
    return(
        <div className='confirmationMessage'>
            {message}
        </div>
    )

}

export default Notification