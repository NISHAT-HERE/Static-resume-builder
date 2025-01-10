interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
    skills: string;
}

class ResumeBuilder {
    private form: HTMLFormElement;
    private formElements: {[key: string]: HTMLInputElement | HTMLTextAreaElement};
    private previewElements: {[key: string]: HTMLElement};

    constructor() {
        this.form = document.getElementById('resumeForm') as HTMLFormElement;
        
        // Get form elements
        this.formElements = {
            name: document.getElementById('name') as HTMLInputElement,
            email: document.getElementById('email') as HTMLInputElement,
            phone: document.getElementById('phone') as HTMLInputElement,
            education: document.getElementById('education') as HTMLTextAreaElement,
            experience: document.getElementById('experience') as HTMLTextAreaElement,
            skills: document.getElementById('skills') as HTMLTextAreaElement
        };

        // Get preview elements
        this.previewElements = {
            name: document.getElementById('previewName') as HTMLElement,
            email: document.getElementById('previewEmail') as HTMLElement,
            phone: document.getElementById('previewPhone') as HTMLElement,
            education: document.getElementById('previewEducation') as HTMLElement,
            experience: document.getElementById('previewExperience') as HTMLElement,
            skills: document.getElementById('previewSkills') as HTMLElement
        };

        this.initializeEventListeners();
    }

    private initializeEventListeners(): void {
        // Add live preview for each input/textarea
        Object.keys(this.formElements).forEach(key => {
            this.formElements[key].addEventListener('input', () => {
                this.updatePreview();
            });
        });

        // Handle form submission
        this.form.addEventListener('submit', (e: Event) => {
            e.preventDefault();
            this.updatePreview();
        });
    }

    private updatePreview(): void {
        const data: ResumeData = {
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
    }
}

// Initialize the resume builder when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ResumeBuilder();
});
