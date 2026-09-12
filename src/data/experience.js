// Work experience shown on the Work page.
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
export const SLOTS_PER_COLUMN = 7;

export const experiences = [
    {
        company: 'UNAIDS',
        column: 0,
        row: 2,
        bullets: [
            'Pushed forward an Information Education and Communication campaign on HIV awareness for the Latin-American region in a human rights awareness campaign.',
            'Created infographics and reports and carried out translations (English-Spanish) for projects addressing the prevention of (and response to) HIV and the protection of the human rights of those living with HIV/AIDS.',
            'Reviewed the quality of materials related to the ongoing efforts against the discrimination of people living with HIV/AIDS.',
        ],
    },
    {
        company: 'Silice',
        column: 1,
        row: 2,
        bullets: [
            'Conducted Quality Assurance testing for applications related to sales and business management used by large enterprises internationally.',
            'Worked with the project management team to find errors that could lead to future problems with the platform.',
            'Ensured the standardization of quality across all applications in the digital ecosystem.',
        ],
    },
    {
        company: 'Biskit Media',
        column: 1,
        row: 5,
        bullets: [
            'Designed and implemented an effective user interface for a student-led start-up social media application.',
            'Engineered solutions and discussed features through rigorous planning meetings with management.',
            'Collaborated with other members of the development team in both front-end and back-end.',
        ],
    },
];
