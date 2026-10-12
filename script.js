// Course Enrollment

function enroll(course) {

    localStorage.setItem("course", course);

    alert("Successfully enrolled in " + course);

}


// Login

function login() {

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;


    // Check empty fields

    if (username === "" || password === "") {

        alert("Please enter username and password");

        return;
    }


    // Store username

    localStorage.setItem("username", username);


    // Login message

    alert("Login successful! Welcome " + username);

}