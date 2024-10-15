function generateResume() {
    const fullName = document.getElementById('fullName').value;
    const about = document.getElementById('about').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const contactDetails = document.getElementById('contactDetails').value;
    const personalSkills = document.getElementById('personalSkills').value;
    const professionalSkills = document.getElementById('professionalSkills').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const summary = document.getElementById('summary').value;

    const photoInput = document.getElementById('photo');
    const photoFile = photoInput.files[0];

    if (photoFile) {
        const reader = new FileReader();
        reader.onload = function () {
            const photoUrl = reader.result;
            const resumeOutput = document.getElementById('resumeOutput');
            const downloadBtn = document.getElementById('downloadBtn');

            const resumeContent = `
                <h3>${fullName}</h3>
                <h4>${about}</h4>
                <img src="${photoUrl}" alt="Photo" class='img'>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong> <br>${address}</p>
                <p><strong>Contact Details:</strong> <br>${contactDetails}</p>
                <p><strong>Personal Skills:</strong> <br>${personalSkills}</p>
                <p><strong>Professional Skills:</strong> <br>${professionalSkills}</p>
                <p><strong>Experience:</strong> <br>${experience}</p>
                <p><strong>Education:</strong> <br>${education}</p>
                <p><strong>Summary:</strong> <br>${summary}</p>
            `;

            resumeOutput.innerHTML = resumeContent;
            downloadBtn.style.display = 'block';
        };

        reader.readAsDataURL(photoFile);
    } else {
        alert("Please select a photo before generating the resume.");
    }
}

function downloadResume() {
    const resumeOutput = document.getElementById('resumeOutput');

    if (resumeOutput.innerHTML.trim() === "") {
        alert("Please generate the resume before downloading.");
        return;
    }

    const opt = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    setTimeout(() => {
        html2pdf()
            .from(resumeOutput)
            .set(opt)
            .save();
    }, 100);
}