import { PrismaClient } from './generated/prisma/client';

export * from './generated/prisma/client';

const prismaClientSingleton = () => {
    return new PrismaClient({} as any); // 'any' is a temporary fix.
};

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;