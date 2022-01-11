import { NextApiRequest, NextApiResponse } from 'next'

import { User } from './types'
import { create, list, findByName, findByEmail } from './actions'

/**
 * Receive all requests and dispatch to correct function
 * @param req
 * @param res
 */
const requestHandler = (
    req: NextApiRequest,
    res: NextApiResponse<User | User[] | null>
) => {
    switch (req.method) {
        case 'POST':
            create(req, res)
            break
        case 'GET':
            if (req.query.name) {
                findByName(req, res)
                break
            }
            if (req.query.email) {
                findByEmail(req, res)
                break
            }
            list(req, res)
            break
        default:
            res.status(405).send(null)
            break
    }
}

export default requestHandler
