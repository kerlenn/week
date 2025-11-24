import { PrismaClient } from '@prisma/client';
import path from 'path';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const dbFileName = 'dev.db'; 

const getPrismaClient = () => {
  if (process.env.NODE_ENV === 'production') {
    const filePath = path.join(process.cwd(), 'prisma', dbFileName);
    return new PrismaClient({
      datasources: {
        db: {
          url: 'file:' + filePath,
        },
      },
    });
  }

  return new PrismaClient();
};

export const prisma = globalForPrisma.prisma || getPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;