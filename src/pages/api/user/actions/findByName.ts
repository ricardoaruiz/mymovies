import { NextApiRequest, NextApiResponse } from 'next'
import { gql } from 'graphql-request'

import { faunaDBClient } from 'config/fauna-graphql'
import { User } from '../types'

const query = gql`
    query ($name: String!) {
        findUserByName(name: $name) {
            _id
            name
            email
        }
    }
`

/**
 * List users (GET)
 * @param req
 * @param res
 */
export default async (
    req: NextApiRequest,
    res: NextApiResponse<User | null>
) => {
    const { name } = req.query

    const { findUserByName } = await faunaDBClient.request(query, {
        name,
    })

    if (!findUserByName) {
        res.status(204).send(null)
        return
    }

    res.status(200).json(findUserByName)
}
