import { NextApiRequest, NextApiResponse } from 'next'

import { BFFResponse } from '../types/bff'
import { BFFMovie } from './types'

import { movies } from './actions'

export default (
    req: NextApiRequest,
    res: NextApiResponse<BFFResponse<BFFMovie[]> | null>
) => {
    switch (req.method) {
        case 'GET':
            return movies('/upcoming', req, res)
        default:
            return res.status(403).send(null)
    }
}
