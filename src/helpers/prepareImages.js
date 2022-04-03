import moment from "moment";

export const prepareImages = (images = []) => {
    
    return images.map(
        (e) => ({
            ...e,
            date: moment(e.date).toDate(),
        })
    )
}