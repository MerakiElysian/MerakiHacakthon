function Profile() {
    return(
        <div className="profile">
       
        <h1>Patient Profile</h1>
        <div class="profile-info1">
            <h3>Patient1</h3>
            <p>Name: John Doe</p>
            <p>Age: 35</p>
            <p>DOB:22 Oct 1998</p>
            <p>Gender: Male</p>
            <p>Contact: john.doe@example.com</p>
            <p>Disease: <ul>
                <li>Past Illnesses: Flu, Chickenpox</li>
                <li>Surgeries: Appendectomy (2015)</li>
                <li>Allergies: Penicillin</li>
                <li>Current Medications: Lisinopril (for hypertension)</li>
                <li>Recent Doctor Visits: General check-up (Jan 2024), Blood tests (Feb 2024)</li>
            </ul></p>
        </div>
        <button className="update">Edit</button>
        <button className="update">Update</button>
        </div>
    )
}
export default Profile;