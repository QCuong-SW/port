const form =
document.querySelector(".login-form");

if(form){

    form.addEventListener(

        "submit",

        (e)=>{

            e.preventDefault();

            document.body

            .classList

            .add("fade-out");


            setTimeout(()=>{

                window.location.href =

                "index.html";

            },400);

        }

    );

}

const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.skills": "Skills",
        "nav.projects": "Projects&Contact",
        "hero.title": "Hi, I'm Cuong Quang",
        "hero.subtitle": "Software Engineering",
        "hero.description": "I enjoy building scalable systems, clean APIs, and modern web applications with a calm, reliable user experience.",
        "hero.badgeStudent": "Information Technology Student",
        "hero.badgeStack": "Spring Boot / PostgreSQL / Java",
        "hero.viewProjects": "View Projects",
        "hero.contactMe": "Contact Me",
        "hero.note": "Turning ideas into useful products.",
        "about.title": "About Me",
        "about.label": "Software Engineering Student",
        "about.description": "I'm an Information Technology student passionate about software engineering and backend development. I enjoy designing clean APIs, working with databases, and turning ideas into practical applications.",
        "about.careerLabel": "Career Direction",
        "about.careerValue": "Software Engineer",
        "about.universityTitle": "University",
        "about.universityValue": "University of Transport Ho Chi Minh City",
        "about.majorTitle": "Major",
        "about.majorValue": "Information Technology",
        "about.focusTitle": "Focus",
        "about.focusValue": "Backend Development",
        "experience.title": "Hackathon Experience",
        "experience.certificate": "Certificate",
        "experience.eventName": "Top 25 - Grab The Future Hackathon",
        "experience.description": "Participated in a nationwide hackathon with nearly 700 participants, collaborating to build a practical software solution under a limited timeframe.",
        "experience.eventLabel": "Event",
        "experience.eventValue": "Hackathon",
        "experience.timeLabel": "Time",
        "experience.locationLabel": "Location",
        "experience.locationValue": "Ho Chi Minh City",
        "experience.teamLabel": "Team",
        "team.title": "My Team",
        "team.nameLabel": "Team Name",
        "team.nameDescription": "A 5-member team working together through 34 continuous hours.",
        "team.photoFallback": "Team Photo",
        "team.projectLabel": "Team Project",
        "team.projectDescription": "An application that tracks and reduces carbon emissions while supporting environmental safety.",
        "skills.title": "Skills",
        "skills.html": "HTML",
        "skills.css": "CSS",
        "skills.javascript": "JavaScript",
        "skills.java": "Java",
        "skills.cpp": "C++",
        "skills.python": "Python",
        "skills.qt": "Qt Framework",
        "skills.spring": "Spring Boot",
        "skills.express": "Express",
        "skills.postgresql": "PostgreSQL",
        "skills.postman": "Postman",
        "skills.docker": "Docker",
        "projects.title": "Projects & Contact",
        "projects.githubTitle": "My Projects",
        "projects.githubDescription": "Explore my repositories and discover what I've been building with Java, Spring Boot, PostgreSQL and more.",
        "projects.githubButton": "View Github",
        "projects.contactTitle": "Let's Build Together",
        "projects.contactDescription": "Have an idea? Let's turn it into reality.",
        "projects.namePlaceholder": "Your Name",
        "projects.emailPlaceholder": "Your Email",
        "projects.messagePlaceholder": "Tell me your idea...",
        "projects.sendButton": "Send Message",
        "projects.loadingTitle": "Sending message",
        "projects.successTitle": "Message sent",
        "projects.successDescription": "Thanks for reaching out. I'll get back to you soon.",
        "contact.label": "Contact",
        "contact.title": "Let's Connect",
        "contact.gmailLabel": "Gmail",
        "contact.facebookLabel": "Facebook",
        "footer.description": "Building scalable systems."
    },
    vi: {
        "nav.home": "Trang chủ",
        "nav.about": "Giới thiệu",
        "nav.experience": "Kinh nghiệm",
        "nav.skills": "Kỹ năng",
        "nav.projects": "Dự án & Liên hệ",
        "hero.title": "Xin chào, mình là Quang Cường",
        "hero.subtitle": "Kỹ thuật phần mềm",
        "hero.description": "Mình thích xây dựng hệ thống có khả năng mở rộng, API rõ ràng và ứng dụng web hiện đại với trải nghiệm ổn định.",
        "hero.badgeStudent": "Sinh viên Công nghệ thông tin",
        "hero.badgeStack": "Spring Boot / PostgreSQL / Java",
        "hero.viewProjects": "Xem dự án",
        "hero.contactMe": "Liên hệ",
        "hero.note": "Biến ý tưởng thành sản phẩm hữu ích.",
        "about.title": "Giới thiệu",
        "about.label": "Sinh viên Kỹ thuật phần mềm",
        "about.description": "Mình là sinh viên Công nghệ thông tin yêu thích kỹ thuật phần mềm và phát triển backend. Mình thích thiết kế API rõ ràng, làm việc với cơ sở dữ liệu và biến ý tưởng thành ứng dụng thực tế.",
        "about.careerLabel": "Định hướng nghề nghiệp",
        "about.careerValue": "Kỹ sư phần mềm",
        "about.universityTitle": "Trường đại học",
        "about.universityValue": "Trường Đại học Giao thông vận tải TP.HCM",
        "about.majorTitle": "Chuyên ngành",
        "about.majorValue": "Công nghệ thông tin",
        "about.focusTitle": "Tập trung",
        "about.focusValue": "Phát triển Backend",
        "experience.title": "Kinh nghiệm Hackathon",
        "experience.certificate": "Chứng chỉ",
        "experience.eventName": "Top 25 - Grab The Future Hackathon",
        "experience.description": "Tham gia một cuộc thi hackathon quy mô toàn quốc với gần 700 người tham dự, phối hợp cùng đồng đội để xây dựng một giải pháp phần mềm thực tiễn trong thời gian giới hạn.",
        "experience.eventLabel": "Sự kiện",
        "experience.eventValue": "Hackathon",
        "experience.timeLabel": "Thời gian",
        "experience.locationLabel": "Địa điểm",
        "experience.locationValue": "Thành phố Hồ Chí Minh",
        "experience.teamLabel": "Đội",
        "team.title": "Đội của mình",
        "team.nameLabel": "Tên đội",
        "team.nameDescription": "Một đội gồm 5 thành viên cùng làm việc trong 34 giờ liên tục.",
        "team.photoFallback": "Ảnh đội",
        "team.projectLabel": "Dự án của đội",
        "team.projectDescription": "Một ứng dụng giúp thống kê và giảm phát thải carbon, đồng thời hỗ trợ bảo vệ an toàn môi trường.",
        "skills.title": "Kỹ năng",
        "skills.html": "HTML",
        "skills.css": "CSS",
        "skills.javascript": "JavaScript",
        "skills.java": "Java",
        "skills.cpp": "C++",
        "skills.python": "Python",
        "skills.qt": "Qt Framework",
        "skills.spring": "Spring Boot",
        "skills.express": "Express",
        "skills.postgresql": "PostgreSQL",
        "skills.postman": "Postman",
        "skills.docker": "Docker",
        "projects.title": "Dự án & Liên hệ",
        "projects.githubTitle": "Dự án của mình",
        "projects.githubDescription": "Khám phá các repository và những gì mình đã xây dựng với Java, Spring Boot, PostgreSQL và nhiều công nghệ khác.",
        "projects.githubButton": "Xem Github",
        "projects.contactTitle": "Cùng xây dựng ý tưởng",
        "projects.contactDescription": "Bạn có ý tưởng? Hãy biến nó thành hiện thực.",
        "projects.namePlaceholder": "Tên của bạn",
        "projects.emailPlaceholder": "Email của bạn",
        "projects.messagePlaceholder": "Chia sẻ ý tưởng của bạn...",
        "projects.sendButton": "Gửi tin nhắn",
        "projects.loadingTitle": "Đang gửi tin nhắn",
        "projects.successTitle": "Đã gửi",
        "projects.successDescription": "Cảm ơn bạn đã liên hệ. Mình sẽ phản hồi sớm.",
        "contact.label": "Liên hệ",
        "contact.title": "Kết nối với mình",
        "contact.gmailLabel": "Gmail",
        "contact.facebookLabel": "Facebook",
        "footer.description": "Xây dựng hệ thống có khả năng mở rộng."
    }
};

const languageButton =
document.querySelector(".lang-btn");

const languageLabel =
languageButton?.querySelector("span");

const applyLanguage = (language) => {

    const dictionary =
    translations[language] || translations.en;

    document.documentElement.lang = language;

    document
    .querySelectorAll("[data-i18n]")
    .forEach((element)=>{

        const key =
        element.dataset.i18n;

        if(dictionary[key]){

            element.textContent =
            dictionary[key];

        }

    });

    document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach((element)=>{

        const key =
        element.dataset.i18nPlaceholder;

        if(dictionary[key]){

            element.setAttribute("placeholder",dictionary[key]);

        }

    });

    if(languageLabel){

        languageLabel.textContent =
        language === "en" ? "VI" : "EN";

    }

    localStorage.setItem("portfolioLanguage",language);

};

let currentLanguage =
localStorage.getItem("portfolioLanguage") || "en";

applyLanguage(currentLanguage);

if(languageButton){

    languageButton.addEventListener("click",()=>{

        currentLanguage =
        currentLanguage === "en" ? "vi" : "en";

        applyLanguage(currentLanguage);

        document.body.classList.remove("language-switching");
        languageButton.classList.remove("switching");

        requestAnimationFrame(()=>{

            document.body.classList.add("language-switching");
            languageButton.classList.add("switching");

        });

        setTimeout(()=>{

            document.body.classList.remove("language-switching");
            languageButton.classList.remove("switching");

        },430);

    });

}

const contactForm =
document.querySelector(".collab-form");

const messageStatus =
document.querySelector(".message-status");

if(contactForm && messageStatus){

    contactForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const submitButton =
        contactForm.querySelector(".submit-message-btn");

        contactForm.classList.add("sending");
        messageStatus.className = "message-status loading";

        if(submitButton){

            submitButton.disabled = true;

        }

        setTimeout(()=>{

            messageStatus.classList.add("done");

            setTimeout(()=>{

                messageStatus.className = "message-status success";
                contactForm.classList.remove("sending");
                contactForm.reset();

                if(submitButton){

                    submitButton.disabled = false;

                }

            },280);

        },1450);

    });

}

const modalPairs = [
    [".certificate-frame",".certificate-modal"],
    [".team-photo-frame",".team-modal"],
    [".contact-trigger",".contact-modal"]
];

const closeImageModal = (modal) => {

    if(!modal){

        return;

    }

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";

};

modalPairs.forEach(([triggerSelector,modalSelector])=>{

    const trigger =
    document.querySelector(triggerSelector);

    const modal =
    document.querySelector(modalSelector);

    const closeButton =
    modal?.querySelector(".image-modal-close");

    if(trigger && modal){

        trigger.addEventListener("click",()=>{

            modal.classList.add("show");
            modal.setAttribute("aria-hidden","false");
            document.body.style.overflow = "hidden";

        });

    }

    if(closeButton){

        closeButton.addEventListener("click",()=>{

            closeImageModal(modal);

        });

    }

    if(modal){

        modal.addEventListener("click",(e)=>{

            if(e.target === modal){

                closeImageModal(modal);

            }

        });

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        document
        .querySelectorAll(".image-modal.show")
        .forEach(closeImageModal);

    }

});
