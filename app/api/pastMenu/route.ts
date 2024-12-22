import { PrismaClient } from '@prisma/client';

const prisma= new PrismaClient();

const main = async ():Promise<void> => {
    await prisma.$connect();
    console.log("Connected to database");
}

export const GET = async (req:Request, res:Response) => {
    try{
        await main();
        const pastMenu = await prisma.menu.findMany();
        return Response.json({messeage: "success", data: pastMenu});
    }catch(e){
        console.log(e);
        return Response.json({messeage: "error"});
    }finally{
        await prisma.$disconnect();
    }
}

export const POST = async (req:Request, res:Response) => {
    try{
        await main();
        const {menuTitle,amount,ateAt,timeZone, calorie,protein,fat,carbohydrate,fiber,salt} = await req.json();
        const pastMenu = await prisma.menu.create({
            data: {
                menuTitle: menuTitle,
                amount: amount,
                ateAt: ateAt,
                timeZone: timeZone,
                calories: calorie,
                protein: protein,
                fat: fat,
                carbs: carbohydrate,
                fiber: fiber,
                salt: salt
            }
        });
        return Response.json({messeage: "success", data: pastMenu});
    }catch(e){
        console.log(e);
        return Response.json({messeage: "error"});
    }finally{
        await prisma.$disconnect();
    }
}