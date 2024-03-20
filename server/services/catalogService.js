const pcParts = require('../models/PC-parts');


exports.getAll = () => pcParts.find()

exports.getOne = (id) => pcParts.findById(id)

exports.edit = (id, catalogData) => pcParts.findByIdAndUpdate(id, catalogData)

exports.create = (catalogData) => pcParts.create(catalogData)

exports.delete = (id) => pcParts.findByIdAndDelete(id);