const listPictureTour = Array.from({ length: 14 }).map(
  (_, i) => `/images/Picture${i + 1}.png`
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
];
