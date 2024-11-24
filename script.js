function submitApplication() {
    const form = document.getElementById('applicationForm');
    const formData = new FormData(form);

    let data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const fileInput = document.getElementById('upload');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onloadend = function () {
            data.upload = reader.result;
            saveApplicationData(data);
        };
        reader.readAsDataURL(file);
    } else {
        saveApplicationData(data);
    }
}

function saveApplicationData(data) {
    localStorage.setItem('applicationData', JSON.stringify(data));
    window.location.href = 'result.html';
}
