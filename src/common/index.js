export const userStatus = {
    admin: 0,
    user: 1,
    // sub_user: 2,
    // upload: 5,
}

export const apiResponse = async (status, message, data, error) => {
    return {
        status,
        message,
        data: await data,
        error: Object.keys(error)?.length == 0 ? {} : error
    }
}