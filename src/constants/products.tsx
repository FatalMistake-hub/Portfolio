const listPictureTour = Array.from({ length: 14 }).map(
  (_, i) => `/images/Picture${i + 1}.png`
);
const listPictureQuangNgai = Array.from({ length: 4 }).map(
  (_, i) => `/images/QuangNgai${i + 1}.png`
);
const listPicturePointGame = Array.from({ length: 4 }).map(
  (_, i) => `/images/point-game${i + 1}.png`
);
export const products = [
  {
    href: "https://experience-travel.vercel.app/",
    title: "Tour Experience Booking System",
    description:
      "A system that streamlines tour management and booking, making the process fast and convenient. It provides users with easy and intuitive access while ensuring transparent and secure storage of personal information through Blockchain technology.",
    thumbnail: listPictureTour[0],
    images: listPictureTour,
    stack: [
      "Nextjs",
      "Tailwindcss",
      "Redux",
      "Tanstack Query",
      "Typescript",
      "Charka UI",
      "Solona",
    ],
    slug: "tour-experience-booking-system",
    content: (
      <>
        <h1>Tour Experience Booking System</h1>
        <p>
          The tour experience booking system is developed to offer users
          groundbreaking conveniences and create a refreshing experience. Users
          have the ability to become trip organizers and create tours based on
          their personal experiences. They can provide and manage tour
          information, including destinations, activities, itineraries, pricing,
          and more.
        </p>
        <p>
          For users looking to explore organized tours, they can search for and
          book tours from the list of available options. The system will display
          comprehensive information about these tours, including reviews from
          other users.
        </p>
        <p>
          Tour booking information will be verified and stored using Blockchain
          technology. This ensures the safety and transparency of the
          information, preventing issues related to forgery or tampering.
          Transactions and related data will be recorded on the blockchain,
          creating an immutable and tamper-proof system.
        </p>
        <p>
          Additionally, the system is integrated with ChatGPT to assist users in
          finding available tours within the system.
        </p>
      </>
    ),
  },
  {
    href: "https://unitech-morpheus-system.vercel.app/",
    title:
      "Quang Ngai County-Level Specialized Database Management Software (Morpheus)",
    description:
      "A centralized web application for managing county-level specialized databases, enabling efficient management, retrieval, and sharing of information between government departments. It integrates seamlessly with administrative systems to ensure data consistency and inheritance.",
    thumbnail: listPictureQuangNgai[0],
    images: listPictureQuangNgai,
    stack: [
      "ReactJS",
      "Ant Design",
      "Java",
      "Microservices",
      "Spring Framework",
      "PostgreSQL",
    ],
    slug: "quang-ngai-specialized-database-management",
    content: (
      <>
        <h1>
          Quang Ngai County-Level Specialized Database Management Software
          (Morpheus)
        </h1>
        <p>
          Morpheus is a web application developed to manage centralized and
          consistent county-level specialized databases. This system enables
          seamless information sharing and retrieval between government
          departments, while also integrating with administrative and
          specialized systems for data inheritance.
        </p>
        <h2>Key Features Handle:</h2>
        <ul>
          <li>
            <strong>Legacy System Migration:</strong> Upgraded legacy front-end
            projects to modern frameworks for improved performance and
            maintainability.
          </li>
          <li>
            <strong>Design Decisions:</strong> Made informed decisions on
            front-end architecture and design based on best practices and
            project requirements.
          </li>
          <li>
            <strong>Customer Requirement Analysis:</strong> Collaborated closely
            with stakeholders to gather and analyze requirements, translating
            them into actionable features and interfaces.
          </li>
          <li>
            <strong>Module Integration:</strong> Developed and integrated
            modules for administrative procedures, ensuring seamless interaction
            with specialized databases.
          </li>
          <li>
            <strong>Single Sign-On (SSO) Implementation:</strong> Enhanced
            security and user experience with SSO authentication.
          </li>
          <li>
            <strong>Dashboard Development:</strong> Built configurable
            dashboards for KPI visualization and annual planning indicators,
            enabling customizable layouts and display options.
          </li>
        </ul>
        <h2>Technologies Used:</h2>
        <ul>
          <li>Front-end: ReactJS + Ant Design</li>
          <li>Back-end: Java, Microservices, Spring Framework, PostgreSQL</li>
        </ul>
        <p>
          The system also includes reusable components, code refactoring, and
          robust maintenance to ensure long-term stability and scalability.
        </p>
      </>
    ),
  },
];
export const sideProjects = [
  {
    href: "https://point-game.vercel.app/",
    title: "Point Game",
    description:
      "An interactive web-based game where players select numbers in descending order from the maximum value to zero. Successfully completing the sequence results in a win, while any deviation leads to a loss. The game also features an auto-play mode for automated gameplay.",
    thumbnail: listPicturePointGame[0],
    images: listPicturePointGame,
    stack: ["Vite", "React", "TypeScript", "Vercel"],
    slug: "point-game",
    content: (
      <>
        <h1>Point Game</h1>
        <p>
          Point Game is an interactive web-based game that challenges players to
          select numbers in a precise descending sequence. The objective is to
          choose numbers starting from the maximum value down to zero without
          making any mistakes.
        </p>
        <h2>Gameplay Mechanics:</h2>
        <ul>
          <li>
            <strong>Number Selection:</strong> Players are presented with a
            range of numbers and must select them in descending order.
          </li>
          <li>
            <strong>Winning Condition:</strong> Successfully selecting all
            numbers in the correct order from the maximum to zero results in a
            win.
          </li>
          <li>
            <strong>Losing Condition:</strong> Selecting a number out of
            sequence or making an incorrect selection leads to a loss.
          </li>
          <li>
            <strong>Auto-Play Mode:</strong> The game includes an auto-play
            feature that allows the AI to take over gameplay, automatically
            selecting numbers in the correct sequence. This mode is useful for
            demonstration purposes or for players who prefer automated gameplay.
          </li>
        </ul>
        <h2>Key Features:</h2>
        <ul>
          <li>
            <strong>Interactive Gameplay:</strong> Engages players with a simple
            yet challenging task of sequential number selection.
          </li>
          <li>
            <strong>Responsive Design:</strong> Ensures compatibility across
            various devices and screen sizes.
          </li>
          <li>
            <strong>High Performance:</strong> Built with Vite and React for
            fast loading times and smooth interactions.
          </li>
          <li>
            <strong>Auto-Play Feature:</strong> Allows players to enable an
            AI-driven mode for automated gameplay.
          </li>
        </ul>
        <h2>Technologies Used:</h2>
        <ul>
          <li>Vite</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Vercel</li>
        </ul>
      </>
    ),
  },
];
