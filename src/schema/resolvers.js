const { writer, book, categories } = require('../db/models');

const resolvers = {
    Query: {
        hello: () => "Hei You",
        users: () => ({
                name: "Michael Stevan Lapandio",
                add: "Texas",
        }),
        writers: () => writer.findAll(),
        books: () => book.findAll(),
        categories: () => categories.findAll(),

        writerById: async (root, { id }) => {
            let payload = await writer.findByPk(id, {
                include: book,
            });
            return payload;
        },
    },
    Mutation: {
        createCategory: async(root, { categories }) => {
            let result = await categories.create({categories});
            return result;
        },
        updateCategory: async(root, { id, categories }) => {
            let updateResult = await categories.update({categories},
                {
                    where: {
                        id: id,
                    },
                });
                let resultUpdate = await categories.findByPk(id);
                return resultUpdate;
        },
        deleteCaregory: async(root, { id }) => {
            let deleteResult = await categories.findByPk(id);
            let resultDelete = await categories.destroy({
                where: {
                    id: id,
                },
            });
            return resultDelete;
        },
        createWriter: async(root, { full_name, email, photo }) => {
            let resultCreate = await writer.create({ 
                full_name,
                email,
                photo
            })
            return resultCreate;
        },
        updateWriter: async (root, { id, full_name, email, photo }) => {
			let result = await writer.update(
				{ full_name, email, photo },
				{
					where: {
						id: id,
					},
				}
			);
			let resultUpdate = await writer.findByPk(id);
			return resultUpdate;
		},
		deleteWriter: async (root, { id }) => {
			let resultDelete = await writer.findByPk(id);
			let result = await writer.destroy({
				where: {
					id: id,
				},
			});
			return resultDelete;
		},
		createBook: async (root, { writer_id, category_id, title, description, photo }) => {
			let result = await book.create({ writer_id, category_id, title, description, photo });
			return result;
		},
		updateBook: async (root, { id, writer_id, category_id, title, description, photo }) => {
			let result = await book.update(
				{ writer_id, category_id, title, description, photo },
				{
					where: {
						id: id,
					},
				}
			);
			let resultUpdate = await book.findByPk(id);
			return resultUpdate;
		},
		deleteBook: async (root, { id }) => {
			let resultDelete = await book.findByPk(id);
			let result = await book.destroy({
				where: {
					id: id,
				},
			});
			return resultDelete;
		},
    },
}

module.exports = resolvers;