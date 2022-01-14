import { NextApiRequest, NextApiResponse } from 'next'

import { BFFResponse } from '../types/bff'
import { BFFMovie } from './types'

import { nowPlaying } from './actions'

export default (
    req: NextApiRequest,
    res: NextApiResponse<BFFResponse<BFFMovie[]> | null>
) => {
    switch (req.method) {
        case 'GET':
            return nowPlaying(req, res)
        default:
            return res.status(405).send(null)
    }
}
