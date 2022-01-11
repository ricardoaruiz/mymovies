import { NextApiRequest, NextApiResponse } from 'next'
import { gql } from 'graphql-request'

import { faunaDBClient } from 'config/fauna-graphql'
import { User } from '../types'

const query = gql`
    query ($email: String!) {
        findUserByEmail(email: $email) {
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
    const { email } = req.query

    const { findUserByEmail } = await faunaDBClient.request(query, {
        email,
    })

    res.status(200).json(findUserByEmail)
}
