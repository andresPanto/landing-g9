import { Client } from '@notionhq/client'
import { type CreatePageParameters } from '@notionhq/client/build/src/api-endpoints';
import {type NextApiRequest, type NextApiResponse } from 'next';

const client = new Client({
    auth: process.env.NOTION_TOKEN
})

interface FormPost {
    email: string;
}

export default async function notion(req: NextApiRequest, res: NextApiResponse) {
    try {
        
        const data: FormPost = req.body;
        const newRow: CreatePageParameters = {
            parent: {
                database_id: process.env.NOTION_DB!
            },
            properties: {
                Email: {
                    title: [
                        {
                            text: {
                                content: data.email
                            }
                        }
                    ]
                },
                Registration:{
                    date: {
                        start: new Date().toISOString(),
                    }
                    
                }
            }
        }

        await client.pages.create(newRow);
    } catch (e) {
        console.log(e);
    }
    return res.status(200).json({ status: 'success' })
}