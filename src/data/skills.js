// Skills shown on the Skills page, grouped into pegboard sections.
//
// Each group becomes a labelled cluster of hanging tags. Add a skill to a
// group's array, or add a whole new group, and the board grows to fit —
// the tags wrap, so there is no per-row count to keep in sync.
//
// Order within a group is display order; roughly strongest-first reads
// better than alphabetical, since the eye lands on the top-left tag.
export const skillGroups = [
    {
        name: 'LANGUAGES',
        skills: [
            'Go',
            'TypeScript',
            'JavaScript',
            'Python',
            'Ruby',
            'Java',
            'Swift',
            'HTML',
            'CSS',
        ],
    },
    {
        name: 'FRAMEWORKS',
        skills: [
            'React',
            'Next.js',
            'Ruby on Rails',
            'Fiber',
            'Gin',
            'FastAPI',
            'Vite',
            'Tailwind',
            'D3.js',
            'TanStack Query',
            'scikit-learn',
        ],
    },
    {
        name: 'INFRASTRUCTURE & DATA',
        skills: [
            'PostgreSQL',
            'Supabase',
            'GORM',
            'Kafka',
            'Docker',
            'AWS',
            'Terraform',
            'REST / OpenAPI',
            'Socket.io',
            'Pandas',
        ],
    },
    {
        name: 'PRACTICE',
        skills: [
            'Testing',
            'Git',
            'Agile & Scrum',
            'Code Review',
            'Jira',
            'Figma',
        ],
    },
];
