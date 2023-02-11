const data = require("../../data.json")
const { filter_data } = require("../functions/function")

const records = (req, res) => {
  return  res.json(data);
};



const managed_records = (req, res) => {
    const page = Number(req.query.page) || 1
    const itemsPerPage = 10;

    // pagination
    const skip = (page - 1) * itemsPerPage
    const limit = skip + itemsPerPage

    const previousPage = page > 1 ? page - 1 : null;
    const nextPage = limit < data.length ? page + 1 : null;

    if (limit > data.length) {
        let transformedData = {
            Ids: [],
            Open: [],
            ClosedCount: 0,
            PreviousPage: previousPage,
            NextPage: nextPage
        };
       return res.json(transformedData)
    }

    let { ids, open, closedCount } = filter_data(data, skip, limit)


    const transformedData = {
        Ids: ids,
        Open: open,
        ClosedCount: closedCount,
        PreviousPage: previousPage,
        NextPage: nextPage
    };

    return  res.json(transformedData);
}




module.exports = { records, managed_records }