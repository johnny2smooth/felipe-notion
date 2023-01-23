import dotenv from "dotenv";
import { Client } from "@notionhq/client";

dotenv.config();

export const getNotion = async (database_id: string) => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const response = await notion.databases.query({
    database_id: database_id,
  });

  return {
    notion,
    response,
  };
};
