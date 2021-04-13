import { Request, Response } from 'express'

export default {

    index: async (req: Request, res: Response) => {
        return res.json({oi:['oi']})
    }


}