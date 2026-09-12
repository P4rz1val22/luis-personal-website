// Personal projects shown in the Jukebox on the Projects page, oldest first.
//
// Add an entry and the carousel grows a matching album spine on its own.
// `repo` is optional — leave it out and the "Repo" link is hidden rather
// than rendering a dead link.
//
// `labelColor` is the record label's colour and `glyph` picks its mark from
// the set in DiscGlyph.jsx. Both are optional: a project with no glyph falls
// back to a monogram of its first letter, and one with no colour gets the
// default label colour. Marks are always white, so labelColor has to be a
// deep enough shade to carry white at 4.5:1 — the lighter palette tokens
// wash out.
export const projects = [
    {
        name: 'OpenHouse',
        labelColor: 'var(--teal-deep)',
        glyph: 'house',
        description:
            'As part of my Directed Study in Sydney, Australia. My team and I trained and deployed a machine learning model on AWS SageMaker to predict the average market price of over 14,000 rental properties in Sydney. I utilized Pandas for data cleaning and built a Python algorithm to compare actual market values with predicted prices. The model was also used to evaluate rental agencies based on their pricing tendencies, helping users identify which agencies are better suited for renters or landlords.',
        repo: 'https://github.com/CS4992-AI-ML/open-house',
    },
    {
        name: 'Personal Website',
        labelColor: 'var(--orange-shadow)',
        glyph: 'window',
        description:
            'The site you’re on right now. I designed and built it with React and Vite, hand-rolling every piece of the office — the TV, the printer, the punch clock, this jukebox — out of nested divs and CSS rather than images. All of the content lives in data files, so adding a project, a skill or a role is a one-line edit instead of a hunt through the markup. (btw, You Are Here)',
        repo: 'https://github.com/P4rz1val22/luis-personal-website',
    },
    {
        name: 'Chat App',
        labelColor: 'var(--navy)',
        glyph: 'chat',
        description:
            'A real-time chat application built with Next.js and TypeScript. Messaging runs over WebSockets via Socket.io, authentication through NextAuth, and persistence on Neon’s serverless Postgres. It was the second week of an eight-week stretch I spent deliberately building one project a week to get reps in on technologies I hadn’t used before.',
        repo: 'https://github.com/P4rz1val22/chat-app',
    },
    {
        name: 'Financial Dashboard',
        labelColor: 'var(--slate-deep)',
        glyph: 'chart',
        description:
            'A real-time stock tracking dashboard in TypeScript, React and D3.js, with searchable access across NYSE, NASDAQ, OTC and international ADRs. The interactive charts process up to 288 data points per ticker with custom tooltips and a five-minute auto-refresh, and a client-side rate limiter keeps the app inside Finnhub’s free tier. It scores 99 out of 100 on Lighthouse performance.',
        repo: 'https://github.com/P4rz1val22/financial-dashboard',
    },
    {
        name: 'ML Game Recommender',
        labelColor: 'var(--forest)',
        glyph: 'pad',
        description:
            'A hybrid recommendation engine in Python that blends four algorithms — semantic similarity through Sentence Transformers, genre matching, and TF-IDF tag analysis — with configurable weights, so you can dial how much each one counts. It sits behind a FastAPI service with caching, filtering by platform, franchise, date and quality, and Swagger documentation, and answers in under a second and a half.',
        repo: 'https://github.com/P4rz1val22/ml-game-recommender',
    },
    {
        name: 'Task Platform',
        labelColor: 'var(--red)',
        glyph: 'layers',
        description:
            'This one started as a Go monolith, became four services through the Strangler Fig pattern, then grew a Kafka event backbone. Notification email moved out of the request path into a durable consumer group, so writing a task no longer depends on mail delivery. A transactional outbox commits the task and its event together, consumers deduplicate on event ID because Kafka delivers at least once, and anything unprocessable routes to a dead-letter topic byte-for-byte intact. Covered by 171 unit tests and an automated test that kills the broker mid-flight and asserts the backlog drains on its own. It runs locally under Docker Compose — built and tested, not deployed.',
        repo: 'https://github.com/P4rz1val22/task-management-microservices',
    },
];
