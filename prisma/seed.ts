import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function run() {
  const count = await prisma.bill.count();
  if (count === 0) {
    await prisma.bill.create({
      data: {
        name: 'Sample Internet Bill',
        amount: 59.99,
        dueDate: new Date(new Date().getFullYear(), new Date().getMonth(), 20)
      }
    });
    console.log('Seeded one sample bill.');
  } else {
    console.log('Bills already exist, skipping seed.');
  }
}

run()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });