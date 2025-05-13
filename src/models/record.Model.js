import prisma from "../../prisma/prisma.js";

class RecordModel {
    async findAll() {
        const records = await prisma.record.findMany()
        
        return { records };
    }

    async create(data) {
        const record = await prisma.record.create({
            data
        })

        return record
    }
}

export default new RecordModel()