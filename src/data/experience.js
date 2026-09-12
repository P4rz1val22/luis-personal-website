// Work experience shown on the Experience page.
//
// Each entry is a punch card in the rack plus the notes that appear on the
// board when that card is selected. To add a role, append an entry and give
// it a free `column` / `row` position in the rack; `bullets` renders one
// sticky note each.
//
// The rack is two columns of SLOTS_PER_COLUMN empty slots with the punch
// clock between them. `row` is zero-indexed from the top. Positions are
// explicit rather than auto-packed so the rack keeps its deliberate,
// slightly lopsided look as roles are added.
//
// Entries are reverse-chronological; the first is selected by default.
// Rows are staggered between the two columns so no two cards sit level
// with each other, which is what gives the rack its lopsided look.
//
// Three bullets per role is the sweet spot: Board.css styles exactly three
// note colours and rotations before it starts cycling them.
export const SLOTS_PER_COLUMN = 7;

export const experiences = [
    {
        company: 'Smartleaf',
        column: 0,
        row: 0,
        bullets: [
            'Built inline account editing in the advisor portal, replacing full-page reloads with async saves and optimistic UI updates, on a platform serving 3,500+ financial advisors.',
            'Owned three modules of a team-wide household creation redesign spanning roughly 15 tickets across 3 phases, from PRD and ticket authoring through development and pair programming.',
            'Refactored report securities-row collapsing into a two-pass rewrite backed by 5 new tests, and built a Ruby CLI that generates release notes from ticket references.',
        ],
    },
    {
        company: 'Generate',
        column: 1,
        row: 1,
        bullets: [
            'Full-stack engineer across two semester-long product teams of 8 and 10 contributors at Northeastern’s student-run product studio, building for real external clients.',
            'Special Standard: built Go and Fiber CRUD endpoints plus a Next.js and TypeScript frontend — login and signup flows, an admin dashboard, and a session ratings chart implementing a signed MVP deliverable.',
            'Inside Athletics: authored the Python seeders that matched and uploaded logos for all 365 colleges with zero failures, plus the sports table schema and the college profile page.',
        ],
    },
    {
        company: 'Verizon',
        column: 0,
        row: 2,
        bullets: [
            'Primary frontend contributor on VZbility, a customer retention dashboard built for Verizon’s AI&D team by a six-person Northeastern NExT team.',
            'Built the configurable visualization editor, letting analysts chart data, set custom date ranges, and save views back to the dashboard without exporting anything.',
            'Built the IODA outage ingestion pipeline, one of five integrated data sources, integrated AWS Comprehend for sentiment analysis, and contributed to Terraform-managed AWS infrastructure.',
        ],
    },
    {
        company: 'Biskit Media',
        column: 1,
        row: 3,
        bullets: [
            'Designed and implemented an effective user interface for a student-led start-up social media application.',
            'Engineered solutions and discussed features through rigorous planning meetings with management.',
            'Collaborated with other members of the development team in both front-end and back-end.',
        ],
    },
    {
        company: 'Silice',
        column: 0,
        row: 4,
        bullets: [
            'Conducted Quality Assurance testing for applications related to sales and business management used by large enterprises internationally.',
            'Worked with the project management team to find errors that could lead to future problems with the platform.',
            'Ensured the standardization of quality across all applications in the digital ecosystem.',
        ],
    },
    {
        company: 'UNAIDS',
        column: 1,
        row: 5,
        bullets: [
            'Pushed forward an Information Education and Communication campaign on HIV awareness for the Latin-American region in a human rights awareness campaign.',
            'Created infographics and reports and carried out translations (English-Spanish) for projects addressing the prevention of (and response to) HIV and the protection of the human rights of those living with HIV/AIDS.',
            'Reviewed the quality of materials related to the ongoing efforts against the discrimination of people living with HIV/AIDS.',
        ],
    },
];
