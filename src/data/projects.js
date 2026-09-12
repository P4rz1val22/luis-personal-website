// Personal projects shown in the Jukebox on the Projects page.
//
// Add an entry and the carousel grows a matching album spine on its own.
// `repo` is optional — leave it out and the "Repo" link is hidden rather
// than rendering a dead link.
export const projects = [
    {
        name: 'LiveNEU',
        description:
            'In April 2024, some of my peers and I developed LiveNEU, a website aimed at improving Northeastern University’s housing information platform. This was made as part of my work in OasisNEU. Built with HTML, CSS, JavaScript, Supabase, React, and Vite, this platform features detailed housing application information. I also initiated the development of a database to track dorm information, offering students a more streamlined and informative resource for housing.',
    },
    {
        name: 'OpenHouse',
        description:
            'As part of my Directed Study in Sydney, Australia. My team and I trained and deployed a machine learning model on AWS SageMaker to predict the average market price of over 14,000 rental properties in Sydney. I utilized Pandas for data cleaning and built a Python algorithm to compare actual market values with predicted prices. The model was also used to evaluate rental agencies based on their pricing tendencies, helping users identify which agencies are better suited for renters or landlords.',
        repo: 'https://github.com/CS4992-AI-ML/open-house',
    },
    {
        name: 'Personal Website',
        description:
            'In August 2024, I designed and developed a personal website using HTML, CSS, JavaScript, React, and Vite. I’m hoping this site serves as a hub for showcasing my personal projects and experiences even for projects to come. I also implemented interactive components with React and JavaScript, enhancing user engagement and creating a more dynamic browsing experience. (btw, You Are Here)',
        repo: 'https://github.com/P4rz1val22/luis-personal-website',
    },
];
