const Notification = ({message, errorMessage}) =>{
    if( message === null){
        return null
    }
    let classN = 'confirmationMessage'
    if( errorMessage === true ){
        classN = 'errorMessage'
    }
    return(
        <div className={classN}>
            {message}
        </div>
    )

}

export default Notification