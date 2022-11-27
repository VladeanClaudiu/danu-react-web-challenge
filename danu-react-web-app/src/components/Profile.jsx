function Profile(props) {
    const {name = "Athlete Name", image = ""} = props
    
    const nameInitials = name.split(' ')
                             .map(item => {
                                            if(item.indexOf(item) === 0){
                                                return item[0];
                                            }
                           }).join('');


    return(
        <div className="athlete-profile">
        <div className="profile-img">
            {image ? <img src={`${image}`} alt="profile image"/> :<p>{nameInitials}</p>}
        </div>
        <div className="profile-info">
            <p>{name}</p>
            <button>Edit Profile</button>
        </div>
        </div>
    )
}

export default Profile



