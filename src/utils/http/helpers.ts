import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Build query params from received request
 * @param req
 * @returns
 */
export const buildParamsFromQuery = (req: NextApiRequest) => {
    const params = Object.keys(req.query).reduce((params, item) => {
        params += `${item}=${req.query[item]}&`
        return params
    }, '')

    return params ? `?${params}` : ''
}

/**
 * Build a error response
 * @param error
 * @param res
 * @returns
 */
export const buildErrorObject = (error: any, res: NextApiResponse) => {
    if (error.response) {
        const { status, statusText } = error.response
        return res.status(status).json({ error: { message: statusText } })
    }

    res.status(500).json({ error: { message: error.message } })
}
