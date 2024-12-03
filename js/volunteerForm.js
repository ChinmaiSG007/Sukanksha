// document
//   .getElementById("volunteerForm")
//   .addEventListener("submit", async function (event) {
//     event.preventDefault(); // Prevent default form submission

//     const formData = new FormData(event.target);

//     // Prepare data object
//     const data = {
//       fullName: formData.get("fullName"),
//       dob: formData.get("dob"),
//       gender: formData.get("gender"),
//       email: formData.get("email"),
//       phone: formData.get("phone"),
//       city: formData.get("city"),
//       interests: formData.getAll("interests"),
//       availability: formData.get("availability"),
//       location: formData.get("location"),
//       reason: formData.get("reason"),
//       skills: formData.get("skills"),
//       how_heard: formData.get("how_heard"),
//       fileUrl: null, // Placeholder for file upload URL
//     };

//     // Upload file to Google Drive (optional)
//     const fileInput = document.getElementById("resume");
//     if (fileInput.files.length > 0) {
//       const file = fileInput.files[0];
//       const uploadUrl =
//         "https://script.google.com/macros/s/AKfycbx6QwOLlxtDTO_8KAxcM-BDCfQwlgmMlK9-nCuLPN8JMYUPTP9GRIcCVx85lO-Mt8vcxQ/exec"; // Replace with your upload script URL
//       const fileFormData = new FormData();
//       fileFormData.append("file", file);

//       try {
//         const fileResponse = await fetch(uploadUrl, {
//           method: "POST",
//           body: fileFormData,
//         });
//         const fileResult = await fileResponse.json();
//         data.fileUrl = fileResult.fileUrl;
//       } catch (error) {
//         console.error("File upload failed:", error);
//       }
//     }

//     // Send data to Google Sheets
//     const sheetUrl =
//       "https://script.google.com/macros/s/AKfycbxKMw61tOnxMVL8A6ZWywsyX9-FH3-Wre8NU421_fksts_YlBB8X5_SYIyCbZL1GHPcfQ/exec";
//     try {
//       const response = await fetch(sheetUrl, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       if (result.status === "success") {
//         alert("Form submitted successfully!");
//       } else {
//         alert(`Error: ${result.message}`);
//       }
//     } catch (error) {
//       console.error("Submission failed:", error);
//       alert("An error occurred. Please try again.");
//     }
//   });

// <!-- Modal Structure -->

// <div id="volunteerModal" class="modal">
//     <div class="modal-content">
//         <span class="close">&times;</span>
//         <h3>Volunteer Sign-Up Form</h3>
//         <form id="volunteerForm">
//             <label for="fullName">Full Name:</label>
//             <input type="text" id="fullName" name="fullName" required>

//             <label for="dob">Date of Birth:</label>
//             <input type="date" id="dob" name="dob" required>

//             <label for="gender">Gender:</label>
//             <select id="gender" name="gender" required>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//             </select>

//             <label for="email">Email Address:</label>
//             <input type="email" id="email" name="email" required>

//             <label for="phone">Phone Number:</label>
//             <input type="text" id="phone" name="phone" required>

//             <label for="city">City/Location:</label>
//             <input type="text" id="city" name="city" required>

//             <!-- Area of Interest (Checkboxes) -->
//             <label for="interests">Area of Interest (Select all that apply):</label>
//             <div class="checkbox-group">
//                 <label><input type="checkbox" id="education" name="interests" value="Education">
//                     Education</label>
//                 <label><input type="checkbox" id="health" name="interests" value="Health"> Health</label>
//                 <label><input type="checkbox" id="administration" name="interests" value="Administration">
//                     Administration</label>
//                 <label><input type="checkbox" id="fundraising" name="interests" value="Fundraising">
//                     Fundraising</label>
//                 <label><input type="checkbox" id="events" name="interests" value="Events"> Events</label>
//                 <label><input type="checkbox" id="others" name="interests" value="Others"> Others (Please
//                     specify)</label>
//             </div>

//             <label for="availability">Availability:</label>
//             <select id="availability" name="availability" required>
//                 <option value="weekdays">Weekdays</option>
//                 <option value="weekends">Weekends</option>
//                 <option value="both">Both</option>
//             </select>

//             <label for="location">Preferred Volunteering Location:</label>
//             <select id="location" name="location" required>
//                 <option value="girls_home">Sukhanksha Girls' Home</option>
//                 <option value="boys_home">Sukhanksha Boys' Home</option>
//                 <option value="old_age_home">Old Age Home</option>
//                 <option value="other">Other</option>
//             </select>

//             <label for="reason">Why do you want to volunteer with us?</label>
//             <textarea id="reason" name="reason" rows="4" required></textarea>

//             <label for="skills">Skills or Expertise:</label>
//             <textarea id="skills" name="skills" rows="4" required></textarea>

//             <label for="how_heard">How did you hear about us?</label>
//             <select id="how_heard" name="how_heard" required>
//                 <option value="friend">Friend/Family</option>
//                 <option value="social_media">Social Media</option>
//                 <option value="website">Website</option>
//                 <option value="other">Other</option>
//             </select>

//             <label for="resume">Upload Resume/CV (Optional):</label>
//             <input type="file" id="resume" name="resume">

//             <button type="submit">Submit</button>
//         </form>
//     </div>
// </div>

//   <script>
//   document.getElementById('volunteerForm').addEventListener('submit', function (event) {
//       event.preventDefault(); // Prevent the default form submission

//       // Initialize EmailJS with your public key
//       emailjs.init('qr3ufQ8gy66UcHh5I'); // Replace with your actual public key

//       // Send the form data to EmailJS
//       emailjs.sendForm('service_0jzkm8v', 'template_mx6dgj8', this) // 'this' refers to the form element
//           .then(function (response) {
//               // Handle success response
//               console.log('Email sent successfully!', response);
//               alert('Thank you for signing up! We will contact you soon.');
//           }, function (error) {
//               // Handle failure response
//               console.error('Failed to send email', error);
//               alert('Oops! Something went wrong. Please try again later.');
//           });
//   });
// </script>

{
  /* <script>
// Get modal and close button elements
const modal = document.getElementById('volunteerModal');
const closeBtn = document.querySelector('.close');
const volunteerForm = document.getElementById('volunteerForm');

// Variable to store the current scroll position
let scrollPosition = 0;

// Function to open the modal
function openModal() {
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop; // Store current scroll position
    modal.style.display = 'block'; // Show the modal
    document.body.classList.add('modal-open'); // Lock the scroll
    document.body.style.top = `-${scrollPosition}px`; // Offset the scroll position
}

// Function to close the modal
closeBtn.onclick = function () {
    modal.style.display = 'none'; // Hide the modal
    document.body.classList.remove('modal-open'); // Unlock the scroll
    document.body.style.top = ''; // Reset the top position
    window.scrollTo(0, scrollPosition); // Restore the scroll position
}

// Optional: Close the modal when clicking outside the modal content
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none'; // Hide the modal
        document.body.classList.remove('modal-open'); // Unlock the scroll
        document.body.style.top = ''; // Reset the top position
        window.scrollTo(0, scrollPosition); // Restore the scroll position
    }
}

// Trigger the modal opening when clicking the element with the volunteer-form class
document.querySelector('.volunteer-form').addEventListener('click', openModal);

// Form submission event (Optional: you can handle the form submission logic here)
volunteerForm.onsubmit = function (event) {
    event.preventDefault(); // Prevent actual form submission (you can add your own submit logic here)
    // alert("Thank you for signing up!");
    modal.style.display = 'none'; // Close the modal after form submission
    document.body.classList.remove('modal-open'); // Unlock the scroll
    document.body.style.top = ''; // Reset the top position
    window.scrollTo(0, scrollPosition); // Restore the scroll position
}
</script>  */
}
