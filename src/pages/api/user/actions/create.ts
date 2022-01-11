import { NextApiRequest, NextApiResponse } from 'next'
import { gql } from 'graphql-request'

import { faunaDBClient } from 'config/fauna-graphql'
import { User } from '../types'

const mutation = gql`
    mutation CreateUser($data: UserInput!) {
        createUser(data: $data) {
            _id
            name
            email
        }
    }
`

/**
 * Update a user (POST)
 * @param req
 * @param res
 */
export default async (
    req: NextApiRequest,
    res: NextApiResponse<User | null>
) => {
    const { createUser } = await faunaDBClient.request(mutation, {
        data: req.body,
    })

    if (!createUser) {
        res.status(204).send(null)
        return
    }

    res.status(201).json(createUser)
}
