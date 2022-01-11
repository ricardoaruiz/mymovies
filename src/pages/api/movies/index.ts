import { NextApiRequest, NextApiResponse } from 'next'

import { BFFResponse } from '../types/bff'
import { BFFMovie } from './types'

import { discover } from './actions'

export default (
    req: NextApiRequest,
    res: NextApiResponse<BFFResponse<BFFMovie[]> | null>
) => {
    switch (req.method) {
        case 'GET':
            return discover(req, res)
        default:
            return res.status(405).send(null)
    }
}
