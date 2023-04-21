// https://<your-site.com>/api/revalidate?secret=<token>

//http://localhost:3000/api/revalidate?path=/&secret=8557cf625bed66320974e241af3d22d3

import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.query.secret !== process.env.MY_SECRET_TOKEN){
        return res.status(401).json({ message: 'invalid token' })
    }

    const path: string = req.query.path as string

    await res.revalidate(path)

    return res.json( { revalidated: true })
}