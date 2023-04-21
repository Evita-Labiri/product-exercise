const Product = require('../model/product.model');

exports.findAll = function(res,req) {
    Product.findAll((err, results) => {
		if (err) {
			res.json({ status: false, data: err });
		} else {
			res.json({ status: true, data: results });
		};
	})
};

exports.findOne = function (res, req) {
    const id = req.param._id;

    Product.findOne({ _id: id }, (err, results) => {
		if (err) {
			res.json({ status: false, data: err });
		} else {
			res.json({ status: true, data: results });
		};
	})
};

exports.create = function (res, req) {

    const newProduct = new Product ({
        product: req.body.product,
        cost: req.body.cost,
        description: req.body.description,
        quantity: req.body.quantity
    }) 

    newProduct.save((err, results) => {
		if (err) {
			res.json({ status: false, data: err });
		} else {
			res.json({ status: true, data: results });
		};
	})
};

exports.update = function(res, req) {
    const id = req.param._id;

    const updatedProduct = {
        product: req.body.product,
        cost: req.body.cost,
        description: req.body.description,
        quantity: req.body.quantity
    }

    Product.findOneAndUpdate({_id: id}, updatedProduct, { new: true }, (err, result) => {
		if (err) {
			res.json({ status: false, data: err });
		} else {
			res.json({ status: true, data: result });
		}
    })
};

exports.delete = function(res, req) {
    const id = req.param._id;

    Product.findOneAndDelete({ _id: id }, (err, result) => {
		if (err) {
      res.json({ status: false, data: err });
    } else {
      res.json({ status: true, data: result });
    }
	}); 
}