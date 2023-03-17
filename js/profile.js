//Profile Picture

const pictureInput = document.getElementById('picture-input');
const profileImg = document.getElementById('profile-img');
const uploadPictureBtn = document.getElementById('upload-picture-btn');

pictureInput.addEventListener('change', () => {
  if (pictureInput.files && pictureInput.files[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      profileImg.src = reader.result;
    };
    reader.readAsDataURL(pictureInput.files[0]);
  }
});

uploadPictureBtn.addEventListener('click', () => {
  pictureInput.click();
});

// Edit Profile
var nameEl = document.getElementById("name");
var emailEl = document.getElementById("email");
var phoneEl = document.getElementById("phone");
var addressEl = document.getElementById("address");
var editBtn = document.getElementById("edit-btn");
var saveBtn = document.getElementById("save-btn");
var cancelBtn = document.getElementById("cancel-btn");

editBtn.addEventListener("click", function() {
  nameEl.disabled = false;
  emailEl.disabled = false;
  phoneEl.disabled = false;
  addressEl.disabled = false;
  editBtn.style.display = "none";
  saveBtn.style.display = "inline-block";
  cancelBtn.style.display = "inline-block";
});

cancelBtn.addEventListener("click", function() {
  nameEl.disabled = true;
  emailEl.disabled = true;
  phoneEl.disabled = true;
  addressEl.disabled = true;
  editBtn.style.display = "inline-block";
  saveBtn.style.display = "none";
  cancelBtn.style.display = "none";
});

saveBtn.addEventListener("click", function() {
  nameEl.disabled = true;
  emailEl.disabled = true;
  phoneEl.disabled = true;
  addressEl.disabled = true;
  editBtn.style.display = "inline-block";
  saveBtn.style.display = "none";
  cancelBtn.style.display = "none";
});


// Edit About Me

// Selectors
const aboutMeText = document.getElementById('about-me-text');
const editAboutMeBtn = document.getElementById('edit-about-me-btn');
const saveAboutMeBtn = document.getElementById('save-about-me-btn');
const cancelAboutMeBtn = document.getElementById('cancel-about-me-btn');

// Functions
let originalAboutMeText = aboutMeText.value;

function enableAboutMeEdit() {
  originalAboutMeText = aboutMeText.value;
  aboutMeText.disabled = false;
  aboutMeText.focus();
  editAboutMeBtn.style.display = 'none';
  saveAboutMeBtn.style.display = 'inline-block';
  cancelAboutMeBtn.style.display = 'inline-block';
}

function saveAboutMeChanges() {
  aboutMeText.disabled = true;
  editAboutMeBtn.style.display = 'inline-block';
  saveAboutMeBtn.style.display = 'none';
  cancelAboutMeBtn.style.display = 'none';
}

function cancelAboutMeChanges() {
  aboutMeText.value = originalAboutMeText;
  aboutMeText.disabled = true;
  editAboutMeBtn.style.display = 'inline-block';
  saveAboutMeBtn.style.display = 'none';
  cancelAboutMeBtn.style.display = 'none';
}

// Event Listeners
window.addEventListener('load', () => {
  editAboutMeBtn.addEventListener('click', enableAboutMeEdit);
  saveAboutMeBtn.addEventListener('click', saveAboutMeChanges);
  cancelAboutMeBtn.addEventListener('click', cancelAboutMeChanges);
});

// Initial State
nameEl.disabled = true;
emailEl.disabled = true;
phoneEl.disabled = true;
addressEl.disabled = true;
saveBtn.style.display = "none";
cancelBtn.style.display = "none";

  // Send updated data to server using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/update-profile", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.send("name=" + nameEl.value + "&email=" + emailEl.value + "&phone=" + phoneEl.value + "&address=" + addressEl.value);

