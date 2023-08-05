import { Router } from 'express'
const routerAccounts = Router()
import z from 'zod'
let accountsData = [
    {
        id: 101,
        customerName: 'Laura Gómez',
        tableNumber: 3,
        orderItems: [
            { item: 'Hamburguesa', quantity: 2, price: 8.99 },
            { item: 'Papas fritas', quantity: 1, price: 3.5 },
        ],
        totalAmount: 21.48,
        status: 'active',
        openedAt: '2023-07-29T13:15:00',
        closedAt: null,
    },
    {
        id: 102,
        customerName: 'Carlos Rodríguez',
        tableNumber: 6,
        orderItems: [
            { item: 'Ensalada César', quantity: 1, price: 6.75 },
            { item: 'Agua mineral', quantity: 2, price: 1.75 },
        ],
        totalAmount: 10.25,
        status: 'active',
        openedAt: '2023-07-29T14:00:00',
        closedAt: null,
    },
    {
        id: 103,
        customerName: 'María Martínez',
        tableNumber: 2,
        orderItems: [
            { item: 'Pizza Pepperoni', quantity: 1, price: 12.99 },
            { item: 'Cerveza', quantity: 2, price: 3.25 },
        ],
        totalAmount: 19.49,
        status: 'close',
        openedAt: '2023-07-28T19:30:00',
        closedAt: '2023-07-28T21:00:00',
    },
    {
        id: 104,
        customerName: 'Pedro Sánchez',
        tableNumber: 4,
        orderItems: [
            { item: 'Sushi Variado', quantity: 1, price: 24.99 },
            { item: 'Té verde', quantity: 2, price: 2.5 },
        ],
        totalAmount: 30.99,
        status: 'close',
        openedAt: '2023-07-27T20:45:00',
        closedAt: '2023-07-27T22:30:00',
    },
    {
        id: 105,
        customerName: 'María Martínez',
        tableNumber: 1,
        orderItems: [
            { item: 'Pizza', quantity: 1, price: 12.99 },
            { item: 'Cerveza', quantity: 2, price: 3.25 },
        ],
        totalAmount: 19.49,
        status: 'active',
        openedAt: '2023-07-28T19:30:00',
        closedAt: null,
    },
    {
        id: 106,
        customerName: 'María Perez',
        tableNumber: 3,
        orderItems: [
            { item: 'Hamburguesa', quantity: 2, price: 8.99 },
            { item: 'Papas fritas', quantity: 1, price: 3.5 },
            { item: 'Ensalada César', quantity: 1, price: 6.75 },
            { item: 'Agua mineral', quantity: 2, price: 1.75 },
        ],
        totalAmount: 21.48,
        status: 'active',
        openedAt: '2023-07-29T13:15:00',
        closedAt: null,
    },
    {
        id: 107,
        customerName: 'Laura Gómez',
        tableNumber: 3,
        orderItems: [
            { item: 'Hamburguesa', quantity: 2, price: 8.99 },
            { item: 'Papas fritas', quantity: 1, price: 3.5 },
        ],
        totalAmount: 21.48,
        status: 'active',
        openedAt: '2023-07-29T13:15:00',
        closedAt: null,
    },
    {
        id: 108,
        customerName: 'Laura Gómez',
        tableNumber: 3,
        orderItems: [
            { item: 'Hamburguesa', quantity: 2, price: 8.99 },
            { item: 'Papas fritas', quantity: 1, price: 3.5 },
        ],
        totalAmount: 21.48,
        status: 'active',
        openedAt: '2023-07-29T13:15:00',
        closedAt: null,
    },
    {
        id: 109,
        customerName: 'Laura Gómez',
        tableNumber: 3,
        orderItems: [
            { item: 'Hamburguesa', quantity: 2, price: 8.99 },
            { item: 'Papas fritas', quantity: 1, price: 3.5 },
        ],
        totalAmount: 21.48,
        status: 'active',
        openedAt: '2023-07-29T13:15:00',
        closedAt: null,
    },
    {
        id: 110,
        customerName: 'Laura Gómez',
        tableNumber: 3,
        orderItems: [
            { item: 'Hamburguesa', quantity: 2, price: 8.99 },
            { item: 'Papas fritas', quantity: 1, price: 3.5 },
        ],
        totalAmount: 21.48,
        status: 'active',
        openedAt: '2023-07-29T13:15:00',
        closedAt: null,
    },
    {
        id: 111,
        customerName: 'Laura Gómez',
        tableNumber: 3,
        orderItems: [
            { item: 'Hamburguesa', quantity: 2, price: 8.99 },
            { item: 'Papas fritas', quantity: 1, price: 3.5 },
        ],
        totalAmount: 21.48,
        status: 'active',
        openedAt: '2023-07-29T13:15:00',
        closedAt: null,
    },
    {
        id: 112,
        customerName: 'Laura Gómez',
        tableNumber: 3,
        orderItems: [
            { item: 'Hamburguesa', quantity: 2, price: 8.99 },
            { item: 'Papas fritas', quantity: 1, price: 3.5 },
        ],
        totalAmount: 21.48,
        status: 'active',
        openedAt: '2023-07-29T13:15:00',
        closedAt: null,
    },
    {
        id: 113,
        customerName: 'Laura Gómez',
        tableNumber: 3,
        orderItems: [
            { item: 'Hamburguesa', quantity: 2, price: 8.99 },
            { item: 'Papas fritas', quantity: 1, price: 3.5 },
        ],
        totalAmount: 21.48,
        status: 'active',
        openedAt: '2023-07-29T13:15:00',
        closedAt: null,
    },
    {
        id: 114,
        customerName: 'Laura Gómez',
        tableNumber: 3,
        orderItems: [
            { item: 'Hamburguesa', quantity: 2, price: 8.99 },
            { item: 'Papas fritas', quantity: 1, price: 3.5 },
        ],
        totalAmount: 21.48,
        status: 'active',
        openedAt: '2023-07-29T13:15:00',
        closedAt: null,
    },
    {
        id: 115,
        customerName: 'Laura Cedeño',
        tableNumber: 3,
        orderItems: [
            { item: 'Hamburguesa', quantity: 2, price: 8.99 },
            { item: 'Papas fritas', quantity: 1, price: 3.5 },
        ],
        totalAmount: 21.48,
        status: 'active',
        openedAt: '2023-07-29T13:15:00',
        closedAt: null,
    }
]

const getAccounts = (req, res) => {
    try {
        const date = req.query.d
        const status = req.query.s
        // const vDate = z.date().safeParse(date)
        // const date = z.date({
        //     required_error: "Please select a date and time",
        //     invalid_type_error: "That's not a date!",
        // }).safeParse(req.query.d)

        // console.log({ date })
        if (status === 'active') {
            const response = accountsData.filter((account) => {
                if (date) {
                    if (account?.openedAt?.includes(date) && account?.status === status) {
                        return account
                    }
                } else {
                    if (account?.status === status) {
                        return account
                    }
                }
            })

            if (response.length === 0) {
                return res.status(404).json({
                    success: false,
                    message:
                        'No records were found for the status `active`, on the indicated date.',
                })
            }

            return res.status(200).json(response)
        } else if (status === 'close') {
            const response = accountsData.filter((account) => {
                if (date) {
                    if (account?.closedAt?.includes(date) && account?.status === status) {
                        return account
                    }
                } else {
                    if (account?.status === status) {
                        return account
                    }
                }
            })

            if (response.length === 0) {
                return res.status(404).json({
                    success: false,
                    message:
                        'No records were found for the status `closed`, on the indicated date.',
                })
            }

            return res.status(200).json(response)
        } else if (date) {

            const response = accountsData.filter((account) => {
                if (account.openedAt?.includes(date)) {
                    return account
                } else if (account.closedAt?.includes(date)) {
                    return account
                }
            })

            if (response.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'No records found for the provided date.',
                })
            }

            return res.status(200).json(response)
        }
        if (accountsData.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No records found.',
            })
        }
        return res.status(200).json(accountsData)
    } catch (error) {
        console.error('Error in getAccounts:', error)
        return res.status(500).json({
            success: false,
            message: 'An error occurred on the server.',
        })
    }
}

const postCompany = (req, res) => {
    const {
        firstName,
        lastName,
        companyName,
        CIF,
        phone,
        website,
        industry,
        founded,
        employees,
        description,
        locations,
    } = req.body

    accountsData.firstName = firstName
    accountsData.lastName = lastName
    accountsData.companyName = companyName
    accountsData.CIF = CIF
    accountsData.phone = phone
    accountsData.website = website
    accountsData.industry = industry
    accountsData.founded = founded
    accountsData.employees = employees
    accountsData.description = description
    accountsData.locations = locations
    res.status(201).json({
        success: true,
        message: 'Company data updated',
        data: accountsData,
    })
}

routerAccounts.get('/', getAccounts)
routerAccounts.post('/', postCompany)

export default routerAccounts
