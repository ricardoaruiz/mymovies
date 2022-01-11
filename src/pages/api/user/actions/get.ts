import { NextApiRequest, NextApiResponse } from 'next'
import { gql } from 'graphql-request'

import { faunaDBClient } from 'config/fauna-graphql'
import { User } from '../types'

const query = gql`
    query ($id: ID!) {
        findUserByID(id: $id) {
            _id
            name
            email
        }
    }
`

/**
 * Load user by ID (GET)
 * @param req
 * @param res
 */
export default async (
    req: NextApiRequest,
    res: NextApiResponse<User | null>
) => {
    const { id } = req.query

    const { findUserByID } = await faunaDBClient.request(query, { id })

    if (!findUserByID) {
        res.status(204).send(null)
        return
    }

    res.status(200).json(findUserByID)
}
