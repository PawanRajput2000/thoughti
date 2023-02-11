


const filter_data = (data, start, end) => {
    let ids = []
    let open = []
    let closedCount = 0
    for (let i = start; i < end; i++) {
        ids.push(data[i].id)
        if (data[i].disposition === "open") {
            open.push(data[i])
        } else {
            closedCount++
        }
    }
    return { ids, open, closedCount }
}

module.exports = { filter_data }