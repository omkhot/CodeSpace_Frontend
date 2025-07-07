function ProfileButton({user, profileShow, setProfileShow}) {
    return(
        <>
            <div onClick={() => setProfileShow(!profileShow)} className="cursor-pointer">
                <img
                    src={user?.profileImage}
                    alt="Profile"
                    className="h-10 w-10 bg-white rounded-full "
                />
            </div>
        </>
    )
}

export default ProfileButton;