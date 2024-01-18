import { PrismaClient } from "@prisma/client";

// code of charloo
declare global {
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;





// code of random public just testing my result
// let prisma: PrismaClient;
// declare global {
//     namespace NodeJS {
//         interface Global {
//             prisma: PrismaClient;
//         }
//     }
// };

// if (process.env.NODE_ENV !== 'production') {
//     prisma = new PrismaClient();
// }
// else {
//     if (!global.prisma){
//         global.prisma = new PrismaClient
//     };
//     prisma = global.prisma;
// }

// export default prisma;
