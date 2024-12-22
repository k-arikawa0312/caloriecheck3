import { PrismaClient } from '@prisma/client';

const prisma= new PrismaClient();

const main = async ():Promise<void> => {
    await prisma.$connect();
    console.log("Connected to database");
}

export const GET = async (req:Request, res:Response) => {
    try{
        await main();
        const ingredients = await prisma.menu.findMany();
        return Response.json({messeage: "success", data: ingredients});
    }catch(e){
        console.log(e);
        return Response.json({messeage: "error"});
    }finally{
        await prisma.$disconnect();
    }
}