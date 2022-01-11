import { NextApiRequest, NextApiResponse } from 'next'
import { gql } from 'graphql-request'

import { faunaDBClient } from 'config/fauna-graphql'
import { User } from '../types'

const query = gql`
    query {
        allUsers {
            data {
                _id
                name
                email
            }
        }
    }
`

/**
 * List users (GET)
 * @param req
 * @param res
 */
export default async (req: NextApiRequest, res: NextApiResponse<User[]>) => {
    const { allUsers } = await faunaDBClient.request(query)

    res.status(200).json(allUsers.data)
}
