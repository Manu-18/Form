function validate() {
    var fname = document.form.fname.value;
    var lname = document.form.lname.value;
    var education = document.form.education.value;
    var mobno = document.form.mob.value;
    var email = document.form.email.value;
    var father = document.form.father.value;
    var gender = document.form.gender.value;
    var dob = document.form.dob.value;

    // Validation for name
    if (fname == "") {
        document.getElementById("err").innerHTML = "Please enter your first name";
        document.getElementById("err").style.color = "red";
        return false;
    }

    // Validation for email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("err").innerHTML = "Please enter a valid email address";
        document.getElementById("err").style.color = "red";
        return false;
    }

    // Validation for mobile number
    var mobRegex = /^\d{10}$/;
    if (!mobRegex.test(mobno)) {
        document.getElementById("err").innerHTML = "Please enter a valid 10-digit mobile number";
        document.getElementById("err").style.color = "red";
        return false;
    }

    // Validation for other fields (if needed)

    // Example: Displaying form values
    alert("Welcome " + fname + "!\n" + fname + " " + lname +
        "\n" + mobno +
        "\n" + email +
        "\n" + father +
        "\n" + gender +
        "\n" + dob
    );
    return true;
}
