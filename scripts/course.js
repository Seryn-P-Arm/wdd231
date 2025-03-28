// Course list
document.addEventListener("DOMContentLoaded", function () {
    const courseList = document.getElementById("course-list");
    const courseDetails = document.getElementById("course-details");

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
            courseCard.classList.add(course.completed ? "completed" : "not-completed");

            // Displaying more course details (subject, title, and credits)
            courseCard.innerHTML = `
                <h3>${course.subject}
            `;

            // Add click event to open course details
            courseCard.addEventListener('click', () => {
                displayCourseDetails(course);
            });

            courseList.appendChild(courseCard);
        });

        // Update total credits after courses are rendered
        displayTotalCredits(filteredCourses);
    }

    // Function to display course details in a modal
    function displayCourseDetails(course) {
        courseDetails.innerHTML = `
            <button id="closeModal">❌</button>
            <h2>${course.subject} ${course.number}</h2>
            <h3>${course.title}</h3>
            <p><strong>Credits</strong>: ${course.credits}</p>
            <p><strong>Certificate</strong>: ${course.certificate}</p>
            <p>${course.description}</p>
            <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
        `;

        courseDetails.showModal();

        // Close modal event
        document.getElementById("closeModal").addEventListener("click", () => {
            courseDetails.close();
        });
    }

    // Function to filter courses
    window.filterCourses = function (category) {
        let filteredCourses = category === 'all' ? courses : courses.filter(course => course.subject === category);
        renderCourses(filteredCourses);
    };

    // Function to calculate total credits
    function calculateTotalCredits(courses) {
        return courses.reduce((total, course) => total + course.credits, 0);
    }

    // Function to display total credits
    function displayTotalCredits(courses) {
        const totalCredits = calculateTotalCredits(courses);
        document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
    }

    // Initial render
    renderCourses(courses);

    // Update layout on window resize
    window.addEventListener("resize", () => renderCourses(courses));
});
