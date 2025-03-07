document.addEventListener("DOMContentLoaded", function () {
    const courseList = document.getElementById("course-list");

    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming...',
            technology: ['Python'],
            completed: true
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web...',
            technology: ['HTML', 'CSS'],
            completed: true
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized...',
            technology: ['Python'],
            completed: true
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes and objects...',
            technology: ['C#'],
            completed: true
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience...',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: true
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience...',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: false
        }
    ];

    const courseContainer = document.getElementById('course-list');
    
    // Function to render courses dynamically
    function renderCourses(filteredCourses) {
        courseList.innerHTML = ""; // Clear previous content
        courseList.style.display = "grid";
        courseList.style.gap = "1rem";
        courseList.style.padding = "1rem";

        // Responsive grid layout
        const width = window.innerWidth;
        if (width > 1024) {
            courseList.style.gridTemplateColumns = "repeat(3, 1fr)"; // 3 columns
        } else if (width > 768) {
            courseList.style.gridTemplateColumns = "repeat(2, 1fr)"; // 2 columns
        } else {
            courseList.style.gridTemplateColumns = "1fr"; // 1 column for small screens
        }

        filteredCourses.forEach(course => {
            const courseCard = document.createElement("div");
            courseCard.classList.add("course-item");

            // Add a class based on completion status
            if (course.completed) {
                courseCard.classList.add("completed");
            } else {
                courseCard.classList.add("not-completed");
            }

            // Displaying more course details (subject, title, and credits)
            courseCard.innerHTML = `
                <h3>${course.subject}</h3>
            `;
            courseList.appendChild(courseCard);
        });

        // Update total credits after courses are rendered
        displayTotalCredits(filteredCourses);
    }

    // Function to filter courses
    window.filterCourses = function (category) {
        let filteredCourses = [];

        if (category === 'all') {
            filteredCourses = courses;
        } else {
            filteredCourses = courses.filter(course => course.subject === category);
        }

        renderCourses(filteredCourses); // Render filtered courses
    };

    // Function to calculate total credits
    function calculateTotalCredits(courses) {
        return courses.reduce((total, course) => total + course.credits, 0);
    }

    // Function to display total credits
    function displayTotalCredits(courses) {
        const totalCredits = calculateTotalCredits(courses);
        const creditsElement = document.getElementById('total-credits');
        creditsElement.textContent = `Total Credits: ${totalCredits}`;
    }

    // Initial render
    renderCourses(courses); // Render all courses initially

    // Update layout on window resize
    window.addEventListener("resize", () => renderCourses(courses)); // Re-render courses on resize
});
