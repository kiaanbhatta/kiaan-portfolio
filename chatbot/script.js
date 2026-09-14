const chatBox = document.getElementById("chatBox");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");


// ======================================================
// KIAAN'S PUBLIC / PROFESSIONAL KNOWLEDGE
// ======================================================

const kiaan = {

    name: "Kiaan Bhatta",

    title: "Class 9 Student | Future Software Engineer & AI/ML Engineer",

    country: "Nepal",

    education: "Class 9",

    careerGoals: [
        "Google Software Engineer",
        "Software Engineer",
        "AI/ML Engineer",
        "Full-Stack Developer"
    ],

    currentFocus: [
        "Web Development",
        "JavaScript",
        "Programming",
        "AI Tools",
        "Git and Github"
    ],

    futureFocus: [
        "Python",
        "Artificial Intelligence",
        "Machine Learning",
        "Full-Stack Development",
        "Software Engineering"
    ],

    skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Web Design",
        "Modern UI/UX",
        "Web Development",
        "AI Tools",
        "Programming"
    ],

    interests: [
        "Artificial Intelligence",
        "Machine Learning",
        "Web Development",
        "Programming",
        "Cybersecurity",
        "Automation",
        "Technology"
    ],


    // ==================================================
    // PROJECTS
    // ==================================================

    projects: [

        {
            name: "Personal Portfolio",
            description:
                "Kiaan's personal portfolio website showcasing his skills, projects, technology journey and professional goals.",
            link: "https://kiaanbhatta.com.np"
        },

        {
            name: "Bineshwor School Website",
            description:
                "A school website project built with HTML and CSS.",
            link: "https://bineshwor.vercel.app/"
        },

        {
            name: "Quantrex Solutions",
            description:
                "A professional technology solutions website built with HTML, CSS and JavaScript, featuring responsive design, modern UI/UX and interactive elements.",
            link: "https://quantrexsolutions.vercel.app/"
        },

        {
            name: "Bhumiraj Computer Institute",
            description:
                "A website/form project created for Bhumiraj Computer Institute."
        },


        {
            name: "AI Chatbot Projects",
            description:
                "Experimental chatbot projects created while exploring Artificial Intelligence and AI-powered applications."
        }

    ],


    // ==================================================
    // QUANTREX SOLUTIONS
    // ==================================================

    quantrex: {

        name: "Quantrex Solutions",

        founder: "Kiaan Bhatta",

        role: "CEO",

        description:
            "A technology-focused initiative working around websites, web applications, AI solutions, automation and digital security.",

        services: [
            "Website Development",
            "Web Application Development",
            "AI Solutions",
            "AI Automation",
            "Facebook Security",
            "Google Security",
            "Instagram Security",
            "TikTok Security",
            "General Digital Security"
        ],

        website:
            "https://quantrexsolutions.vercel.app/"

    },


    // ==================================================
    // LEARNING JOURNEY
    // ==================================================

    learningJourney: {

        current:
            "Kiaan is currently focused on learning web development and JavaScript.",

        next:
            "His planned path includes strengthening Python and then moving deeper into Artificial Intelligence and Machine Learning.",

        longTerm:
            "His broader technical direction is Full-Stack Development combined with AI/ML, with additional interest in cybersecurity."
    },


    // ==================================================
    // CONTENT CREATION
    // ==================================================

    creator: {

        creates:
            "Kiaan shares coding projects, website builds, technology content and portfolio work on social platforms.",

        platforms: [
            "TikTok",
            "Facebook",
            "YouTube",
            "LinkedIn"
        ],

        editing:
            "CapCut",

        contentTopics: [
            "Web Development",
            "Coding Projects",
            "Portfolio Development",
            "AI Tools",
            "Technology"
        ]
    },


    // ==================================================
    // PUBLIC LINKS
    // ==================================================

    links: {

        portfolio:
            "https://kiaanbhatta.com.np",

        github:
            "https://github.com/kiaanbhatta",

        linkedin:
            "https://www.linkedin.com/in/kiaanbhatta/",

        facebook:
            "https://www.facebook.com/kiaanbhatta2",

        tiktok:
            "https://www.tiktok.com/@kiaanbhatta",

        linktree:
            "https://linktr.ee/kiaanbhatta",

        youtube:
            "https://www.youtube.com/@KiaanBhatta"

    }

};


// ======================================================
// SAFE LINK GENERATOR
// ======================================================

function link(name, url) {

    if (!url || url === "YOUR_YOUTUBE_LINK_HERE") {

        return `<strong>${name}</strong>`;

    }

    return `
        <a
            href="${url}"
            target="_blank"
            rel="noopener noreferrer"
        >
            ${name}
        </a>
    `;
}


// ======================================================
// ALL SOCIAL LINKS
// ======================================================

function socialLinks() {

    return `
        <strong>Here are Kiaan's public profiles:</strong>

        <br><br>

        🌐 ${link("Portfolio", kiaan.links.portfolio)}
        <br><br>

        💻 ${link("GitHub", kiaan.links.github)}
        <br><br>

        💼 ${link("LinkedIn", kiaan.links.linkedin)}
        <br><br>

        📘 ${link("Facebook", kiaan.links.facebook)}
        <br><br>

        🎵 ${link("TikTok", kiaan.links.tiktok)}
        <br><br>

        🔗 ${link("Linktree", kiaan.links.linktree)}
        <br><br>

        ▶️ ${link("YouTube", kiaan.links.youtube)}
    `;
}


// ======================================================
// PROJECT LIST
// ======================================================

function projectList() {

    return `
        <strong>Some projects Kiaan has worked on:</strong>

        <br><br>

        ${kiaan.projects.map((project, index) => {

        const projectLink = project.link
            ? ` — ${link("View project", project.link)}`
            : "";

        return `
                <strong>${index + 1}. ${project.name}</strong>
                <br>
                ${project.description}
                ${projectLink}
                <br><br>
            `;

    }).join("")}
    `;
}


// ======================================================
// ANSWER ENGINE
// ======================================================

function getAnswer(question) {

    const q = question
        .toLowerCase()
        .trim();


    // ----------------------------------------------
    // GREETING
    // ----------------------------------------------

    if (
        q === "hi" ||
        q === "hello" ||
        q === "hey" ||
        q.includes("good morning") ||
        q.includes("good evening")
    ) {

        return `
            Hey! 👋

            I'm <strong>Kiaan AI</strong>.

            <br><br>

            Ask me anything about Kiaan Bhatta,
            his projects, skills, learning journey,
            career goals or public profiles.
        `;
    }

    if (
        q === "gita" ||
        q === "khem" ||
        q.includes("khem") ||
        q.includes("gita")

        
    ) {

        return `
            rajmati,
            jay,
            dev,
            kamala,
            shanti,
            indra,
            godawari,
            ram,
            bishnu,
            dhani,
            narendra_modi,
            parwati
        `;
    }


    // ----------------------------------------------
    // WHO IS KIAAN
    // ----------------------------------------------

    if (
        q.includes("who is kiaan") ||
        q.includes("who is kian") ||
        q.includes("tell me about kiaan") ||
        q.includes("about kiaan")
    ) {

        return `
            <strong>Kiaan Bhatta</strong> is a Class 9 student
            from Nepal with a strong interest in technology,
            programming and Artificial Intelligence. 🚀

            <br><br>

            He is building his foundation in
            <strong>Web Development and JavaScript</strong>
            while exploring AI tools and programming.

            <br><br>

            His long-term career goals are to become a
            <strong>Software Engineer</strong> and
            <strong>AI/ML Engineer</strong>.

            <br><br>

            He also works on personal projects,
            portfolio websites and technology-focused
            projects through <strong>Quantrex Solutions</strong>.
        `;
    }


    // ----------------------------------------------
    // WHO IS KIROS
    // ----------------------------------------------

    if (
        q.includes("kiros")||
        q.includes("who is kiros") ||
        q.includes("who is kiros") ||
        q.includes("tell me about kiros") ||
        q.includes("about kiros")
    ) {

        return `
            <strong>Kiros Bhatta</strong> is Kiaan's brother

            <br><br>

            His website :-
            kirosbhatta.netlify.app

           
        `;
    }

    // ----------------------------------------------
    // Friends
    // ----------------------------------------------

    if (
        q.includes("aayush")||
        q.includes("aasish")||
        q.includes("rojin")||
        q.includes("anmol")||
        q.includes("ridam")||
        q.includes("prashant")||
        q.includes("pratik")||
        q.includes("saroj")
        
    ) {

        return `
            <strong>He</strong> is Kiaan's Friend

            <br><br>

            

           
        `;
    }


    // ----------------------------------------------
    // AGE
    // ----------------------------------------------

    if (
        q.includes("age") ||
        q.includes("how old")
    ) {

        return `
            Kiaan is <strong>15 years old</strong>.
        `;
    }

    // ----------------------------------------------
    // AGE
    // ----------------------------------------------

    if (
        q.includes("gf") ||
        q.includes("wife") ||
        q.includes("girl friend") ||
        q.includes("girlfriend")
    ) {

        return `
            <strong>your Mom</strong>.
        `;
    }



    // ----------------------------------------------
    // EDUCATION
    // ----------------------------------------------

    if (
        q.includes("class") ||
        q.includes("grade") ||
        q.includes("education") ||
        q.includes("school")
    ) {

        return `
            Kiaan is currently studying in
            <strong>Class 9</strong>.

            <br><br>

            Alongside school, he is actively learning
            programming and web development.
        `;
    }


    // ----------------------------------------------
    // GOALS
    // ----------------------------------------------

    if (
        q.includes("goal") ||
        q.includes("career") ||
        q.includes("future") ||
        q.includes("want to become")
    ) {

        return `
            Kiaan's main career goals are:

            <br><br>

            💪🏼 <strong>Google Software Engineer</strong><br>
            🎯 <strong>Software Engineer</strong><br>
            🤖 <strong>AI/ML Engineer</strong><br>
            💻 <strong>Full-Stack Developer</strong>

            <br><br>

            His broader direction is to combine
            software development with Artificial Intelligence
            and Machine Learning.
        `;
    }


    // ----------------------------------------------
    // SKILLS
    // ----------------------------------------------

    if (
        q.includes("skill") ||
        q.includes("technologies") ||
        q.includes("technology stack") ||
        q.includes("what can kiaan do")
    ) {

        return `
            Kiaan's current technical skills and learning
            areas include:

            <br><br>

            ${kiaan.skills.map(skill =>
            `• ${skill}`
        ).join("<br>")}

            <br><br>

            He is continuously expanding this list
            as he learns new technologies.
        `;
    }


    // ----------------------------------------------
    // LEARNING
    // ----------------------------------------------

    if (
        q.includes("learning") ||
        q.includes("learn") ||
        q.includes("studying programming")
    ) {

        return `
            <strong>Kiaan's current learning journey:</strong>

            <br><br>

            📚 <strong>Current focus:</strong><br>
            Web Development, JavaScript and programming.

            <br><br>

            🐍 <strong>Next:</strong><br>
            Strengthen Python.

            <br><br>

            🤖 <strong>Then:</strong><br>
            Artificial Intelligence and Machine Learning.

            <br><br>

            🚀 <strong>Long term:</strong><br>
            Full-Stack Development + AI/ML,
            with additional interest in cybersecurity.
        `;
    }


    // ----------------------------------------------
    // PROJECTS
    // ----------------------------------------------

    if (
        q.includes("project") ||
        q.includes("built") ||
        q.includes("portfolio projects")
    ) {

        return projectList();
    }


    // ----------------------------------------------
    // BINESHWOR
    // ----------------------------------------------

    if (
        q.includes("bineshwor")
    ) {

        return `
            <strong>Bineshwor School Website</strong> is one
            of Kiaan's web development projects.

            <br><br>

            It was built using
            <strong>HTML and CSS</strong>.

            <br><br>

            ${link(
            "🌐 View Bineshwor School Website",
            "https://bineshwor.vercel.app/"
        )}
        `;
    }


    // ----------------------------------------------
    // QUANTREX
    // ----------------------------------------------

    if (
        q.includes("quantrex") ||
        q.includes("company") ||
        q.includes("business")
    ) {

        return `
            <strong>Quantrex Solutions</strong> is a
            technology-focused initiative founded by
            <strong>Kiaan Bhatta</strong>.

            <br><br>

            Kiaan's role is <strong>CEO</strong>.

            <br><br>

            Its focus includes:

            <br><br>

            ${kiaan.quantexServices
                ? kiaan.quantexServices.map(x => `• ${x}`).join("<br>")
                : kiaan.quantex?.services.map(x => `• ${x}`).join("<br>")
            }

            <br><br>

            ${link(
                "🌐 Visit Quantrex Solutions",
                kiaan.quantex.website
            )}
        `;
    }


    // ----------------------------------------------
    // SOCIAL MEDIA
    // ----------------------------------------------

    if (
        q.includes("social media") ||
        q.includes("socials") ||
        q.includes("all links") ||
        q.includes("profiles") ||
        q.includes("find kiaan")
    ) {

        return socialLinks();
    }


    // ----------------------------------------------
    // GITHUB
    // ----------------------------------------------

    if (
        q.includes("github") ||
        q.includes("repositories") ||
        q.includes("repos")
    ) {

        return `
            Kiaan uses GitHub to showcase and manage
            his coding projects.

            <br><br>

            ${link(
            "💻 Visit Kiaan's GitHub",
            kiaan.links.github
        )}
        `;
    }


    // ----------------------------------------------
    // LINKEDIN
    // ----------------------------------------------

    if (q.includes("linkedin")) {

        return `
            Kiaan uses LinkedIn to build his professional
            online presence and share his technology journey.

            <br><br>

            ${link(
            "💼 Visit Kiaan's LinkedIn",
            kiaan.links.linkedin
        )}
        `;
    }


    // ----------------------------------------------
    // FACEBOOK
    // ----------------------------------------------

    if (
        q.includes("facebook") ||
        q.includes("fb")
    ) {

        return `
            You can find Kiaan on Facebook here:

            <br><br>

            ${link(
            "📘 Kiaan Bhatta on Facebook",
            kiaan.links.facebook
        )}
        `;
    }


    // ----------------------------------------------
    // TIKTOK
    // ----------------------------------------------

    if (
        q.includes("tiktok") ||
        q.includes("tik tok")
    ) {

        return `
            Kiaan shares technology and coding-related
            content on TikTok.

            <br><br>

            ${link(
            "🎵 @kiaanbhatta on TikTok",
            kiaan.links.tiktok
        )}
        `;
    }


    // ----------------------------------------------
    // YOUTUBE
    // ----------------------------------------------

    if (q.includes("youtube")) {

        return `
            Kiaan also has a YouTube presence for
            technology and project-related content.

            <br><br>

            ${link(
            "▶️ Kiaan Bhatta on YouTube",
            kiaan.links.youtube
        )}
        `;
    }


    // ----------------------------------------------
    // LINKTREE
    // ----------------------------------------------

    if (
        q.includes("linktree") ||
        q.includes("link tree")
    ) {

        return `
            You can find Kiaan's collection of public links
            on Linktree:

            <br><br>

            ${link(
            "🔗 Kiaan's Linktree",
            kiaan.links.linktree
        )}
        `;
    }


    // ----------------------------------------------
    // WEBSITE
    // ----------------------------------------------

    if (
        q.includes("website") ||
        q.includes("portfolio")
    ) {

        return `
            Kiaan's personal portfolio is available here:

            <br><br>

            ${link(
            "🌐 kiaanbhatta.com.np",
            kiaan.links.portfolio
        )}
        `;
    }


    // ----------------------------------------------
    // INTERESTS
    // ----------------------------------------------

    if (
        q.includes("interest") ||
        q.includes("likes technology") ||
        q.includes("passionate")
    ) {

        return `
            Kiaan is particularly interested in:

            <br><br>

            ${kiaan.interests.map(x =>
            `• ${x}`
        ).join("<br>")}
        `;
    }


    // ----------------------------------------------
    // CREATOR
    // ----------------------------------------------

    if (
        q.includes("content") ||
        q.includes("creator") ||
        q.includes("videos")
    ) {

        return `
            Kiaan creates and shares technology-focused
            content around his projects and learning journey.

            <br><br>

            His content areas include:

            <br><br>

            • Web Development<br>
            • Coding Projects<br>
            • Portfolio Development<br>
            • AI Tools<br>
            • Technology

            <br><br>

            He uses platforms such as
            <strong>TikTok, Facebook, YouTube and LinkedIn</strong>.
        `;
    }


    // ----------------------------------------------
    // TECHNOLOGY
    // ----------------------------------------------

    if (
        q.includes("technology") ||
        q.includes("tech")
    ) {

        return `
            Kiaan's technology interests span:

            <br><br>

            💻 Web Development<br>
            🤖 Artificial Intelligence<br>
            🧠 Machine Learning<br>
            ⚙️ Automation<br>
            🔐 Cybersecurity<br>
            🧑‍💻 Programming
        `;
    }


    // ----------------------------------------------
    // THANK YOU
    // ----------------------------------------------

    if (
        q.includes("thank") ||
        q.includes("thanks")
    ) {

        return `
            You're welcome! 😊

            <br><br>

            Feel free to ask me anything else about
            Kiaan's technology journey.
        `;
    }


    // ----------------------------------------------
    // DEFAULT
    // ----------------------------------------------

    return `
        I'm <strong>Kiaan AI</strong> 🤖.

        <br><br>

        I currently specialize in answering questions
        about Kiaan Bhatta.

        <br><br>

        Try asking:

        <br><br>

        • Who is Kiaan?<br>
        • What are his skills?<br>
        • What projects has he built?<br>
        • What is he learning?<br>
        • What are his career goals?<br>
        • What is Quantrex Solutions?<br>
        • What is Kiaan's GitHub?<br>
        • Give me his social media links
    `;
}


// ======================================================
// ADD MESSAGE
// ======================================================

function addMessage(message, sender) {

    const messageDiv = document.createElement("div");

    messageDiv.className = `message ${sender}-message`;

    if (sender === "user") {

        messageDiv.innerHTML = `
            <div class="avatar">You</div>

            <div class="bubble">
                <p>${escapeHTML(message)}</p>
            </div>
        `;

    } else {

        messageDiv.innerHTML = `
            <div class="avatar">K</div>

            <div class="bubble">

                <div class="bubble-top">
                    <strong>Kiaan AI</strong>
                    <span>now</span>
                </div>

                ${message}

            </div>
        `;
    }

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}


// ======================================================
// TYPING ANIMATION
// ======================================================

function showTyping() {

    const typing = document.createElement("div");

    typing.className = "message bot-message";

    typing.id = "typing";

    typing.innerHTML = `
        <div class="avatar">K</div>

        <div class="bubble">

            <div class="typing">
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    `;

    chatBox.appendChild(typing);

    chatBox.scrollTop = chatBox.scrollHeight;
}


function removeTyping() {

    const typing = document.getElementById("typing");

    if (typing) {
        typing.remove();
    }
}


// ======================================================
// ASK QUESTION
// ======================================================

function askQuestion(question) {

    if (!question.trim()) return;

    addMessage(question, "user");

    userInput.value = "";

    showTyping();

    setTimeout(() => {

        removeTyping();

        const answer = getAnswer(question);

        addMessage(answer, "bot");

    }, 700);

}


// ======================================================
// FORM
// ======================================================

chatForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const question = userInput.value.trim();

    if (!question) return;

    askQuestion(question);

});


// ======================================================
// SECURITY
// ======================================================

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


// ======================================================
// ENTER KEY
// ======================================================

userInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        event.preventDefault();

        chatForm.dispatchEvent(new Event("submit"));

    }

});