import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user:string;
        phone:string;
        role: number;
    }

    interface User {
        user:string;
        phone:string;
        role: number;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        user:string;
        phone:string;
        role: number;
    }
    }