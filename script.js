var ResumeBuilder = /** @class */ (function () {
    function ResumeBuilder() {
        this.form = document.getElementById('resumeForm');
        // Get form elements
        this.formElements = {
            name: document.getElementById('name'),
            email: document.getElementById('email'),
            phone: document.getElementById('phone'),
            education: document.getElementById('education'),
            experience: document.getElementById('experience'),
            skills: document.getElementById('skills')
        };
        // Get preview elements
        this.previewElements = {
            name: document.getElementById('previewName'),
            email: document.getElementById('previewEmail'),
            phone: document.getElementById('previewPhone'),
            education: document.getElementById('previewEducation'),
            experience: document.getElementById('previewExperience'),
            skills: document.getElementById('previewSkills')
        };
        this.initializeEventListeners();
    }
    ResumeBuilder.prototype.initializeEventListeners = function () {
        var _this = this;
        // Add live preview for each input/textarea
        Object.keys(this.formElements).forEach(function (key) {
            _this.formElements[key].addEventListener('input', function () {
                _this.updatePreview();
            });
        });
        // Handle form submission
        this.form.addEventListener('submit', function (e) {
            e.preventDefault();
            _this.updatePreview();
        });
    };
    ResumeBuilder.prototype.updatePreview = function () {
        var data = {
            name: this.formElements.name.value,
            email: this.formElements.email.value,
            phone: this.formElements.phone.value,
            education: this.formElements.education.value,
            experience: this.formElements.experience.value,
            skills: this.formElements.skills.value
        };
        // Update preview elements
        this.previewElements.name.textContent = data.name;
        this.previewElements.email.textContent = data.email;
        this.previewElements.phone.textContent = data.phone;
        this.previewElements.education.textContent = data.education;
        this.previewElements.experience.textContent = data.experience;
        this.previewElements.skills.textContent = data.skills;
    };
    return ResumeBuilder;
}());
// Initialize the resume builder when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    new ResumeBuilder();
});
