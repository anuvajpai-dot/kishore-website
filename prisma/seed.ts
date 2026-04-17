import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const photos = [
  // Kishore portrait
  {
    title: "Kishore Portrait",
    description: "Professional portrait of Kishore",
    url: "/images/kishore/IMG_6868.JPG",
    category: "PORTRAIT",
    featured: true,
    sortOrder: 1,
  },

  // Baby / Newborn shoot
  {
    title: "Baby Shoot",
    description: "Newborn photography session",
    url: "/images/baby/DSC09240.jpeg",
    category: "NEWBORN",
    featured: true,
    sortOrder: 1,
  },
  {
    title: "Baby Shoot",
    description: "Newborn photography session",
    url: "/images/baby/DSC09249.JPG",
    category: "NEWBORN",
    featured: false,
    sortOrder: 2,
  },
  {
    title: "Baby Shoot",
    description: "Newborn photography session",
    url: "/images/baby/DSC09281.jpeg",
    category: "NEWBORN",
    featured: false,
    sortOrder: 3,
  },
  {
    title: "Baby Shoot",
    description: "Newborn photography session",
    url: "/images/baby/DSC09305.JPG",
    category: "NEWBORN",
    featured: false,
    sortOrder: 4,
  },
  {
    title: "Baby Shoot",
    description: "Newborn photography session",
    url: "/images/baby/DSC09308.jpeg",
    category: "NEWBORN",
    featured: false,
    sortOrder: 5,
  },
  {
    title: "Baby Shoot",
    description: "Newborn photography session",
    url: "/images/baby/DSC09314 2.jpeg",
    category: "NEWBORN",
    featured: false,
    sortOrder: 6,
  },
  {
    title: "Baby Shoot",
    description: "Newborn photography session",
    url: "/images/baby/DSC09330.jpeg",
    category: "NEWBORN",
    featured: false,
    sortOrder: 7,
  },
  {
    title: "Baby Shoot",
    description: "Newborn photography session",
    url: "/images/baby/DSC09332 2.jpeg",
    category: "NEWBORN",
    featured: false,
    sortOrder: 8,
  },
  {
    title: "Baby Shoot",
    description: "Newborn photography session",
    url: "/images/baby/DSC09339.jpeg",
    category: "NEWBORN",
    featured: false,
    sortOrder: 9,
  },
  {
    title: "Baby Shoot",
    description: "Newborn photography session",
    url: "/images/baby/DSC09348.JPG",
    category: "NEWBORN",
    featured: false,
    sortOrder: 10,
  },
  {
    title: "Baby Shoot",
    description: "Newborn photography session",
    url: "/images/baby/DSC09361.JPG",
    category: "NEWBORN",
    featured: false,
    sortOrder: 11,
  },
  {
    title: "Baby Shoot",
    description: "Newborn photography session",
    url: "/images/baby/DSC09395.JPG",
    category: "NEWBORN",
    featured: false,
    sortOrder: 12,
  },

  // Pregnancy shoot
  {
    title: "Pregnancy Session",
    description: "Beautiful maternity photography",
    url: "/images/pregnancy/IMG_7291.JPG",
    category: "PREGNANCY",
    featured: true,
    sortOrder: 1,
  },
  {
    title: "Pregnancy Session",
    description: "Beautiful maternity photography",
    url: "/images/pregnancy/IMG_7568.JPG",
    category: "PREGNANCY",
    featured: false,
    sortOrder: 2,
  },
  {
    title: "Pregnancy Session",
    description: "Beautiful maternity photography",
    url: "/images/pregnancy/IMG_7570.JPG",
    category: "PREGNANCY",
    featured: false,
    sortOrder: 3,
  },
  {
    title: "Pregnancy Session",
    description: "Beautiful maternity photography",
    url: "/images/pregnancy/IMG_7571.JPG",
    category: "PREGNANCY",
    featured: false,
    sortOrder: 4,
  },
];

async function main() {
  console.log("Seeding photos...");
  // Delete existing photos and re-seed cleanly
  await prisma.photo.deleteMany({});
  await prisma.photo.createMany({ data: photos });
  console.log(`Seeded ${photos.length} photos.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
