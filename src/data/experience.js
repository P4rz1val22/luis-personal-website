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
// Three bullets per role is the sweet spot: Board.css styles exactly three
// note colours and rotations before it starts cycling them.
export const SLOTS_PER_COLUMN = 7;

export const experiences = [
    {
        company: 'Smartleaf',
        column: 0,
        row: 2,
        bullets: [
            'Built inline account editing in the advisor portal, replacing full-page reloads with async saves and optimistic UI updates, on a platform serving 3,500+ financial advisors.',
            'Owned three modules of a team-wide household creation redesign spanning roughly 15 tickets across 3 phases, from PRD and ticket authoring through development and pair programming.',
            'Refactored report securities-row collapsing into a two-pass rewrite backed by 5 new tests, and built a Ruby CLI that generates release notes from ticket references.',
        ],
    },
    {
        company: 'Generate',
        column: 1,
        row: 2,
        bullets: [
            'Full-stack engineer across two semester-long product teams of 8 and 10 contributors at Northeastern’s student-run product studio, building for real external clients.',
            'Special Standard: built Go and Fiber CRUD endpoints plus a Next.js and TypeScript frontend — login and signup flows, an admin dashboard, and a session ratings chart implementing a signed MVP deliverable.',
            'Inside Athletics: authored the Python seeders that matched and uploaded logos for all 365 colleges with zero failures, plus the sports table schema and the college profile page.',
        ],
    },
    {
        company: 'Verizon',
        column: 1,
        row: 5,
        bullets: [
            'Primary frontend contributor on VZbility, a customer retention dashboard built for Verizon’s AI&D team by a six-person Northeastern NExT team.',
            'Built the configurable visualization editor, letting analysts chart data, set custom date ranges, and save views back to the dashboard without exporting anything.',
            'Built the IODA outage ingestion pipeline, one of five integrated data sources, integrated AWS Comprehend for sentiment analysis, and contributed to Terraform-managed AWS infrastructure.',
        ],
    },
];
