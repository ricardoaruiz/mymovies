import { NextApiRequest, NextApiResponse } from 'next'
import { gql } from 'graphql-request'

import { faunaDBClient } from 'config/fauna-graphql'
import { User } from '../types'

const mutation = gql`
    mutation UpdateUser($id: ID!, $data: UserInput!) {
        updateUser(id: $id, data: $data) {
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
    const { id } = req.query

    const { updateUser } = await faunaDBClient.request(mutation, {
        id,
        data: req.body,
    })

    if (!updateUser) {
        res.status(204).send(null)
        return
    }

    res.status(201).json(updateUser)
}
