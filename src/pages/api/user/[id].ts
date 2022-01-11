import { NextApiRequest, NextApiResponse } from 'next'

import { User } from './types'
import { get, update } from './actions'

/**
 * Receive all requests and dispatch to correct function
 * @param req
 * @param res
 */
const requestHandler = (
    req: NextApiRequest,
    res: NextApiResponse<User | null>
) => {
    switch (req.method) {
        case 'PUT':
            update(req, res)
            break
        case 'GET':
            get(req, res)
            break
        default:
            res.status(405).send(null)
            break
    }
}

export default requestHandler
