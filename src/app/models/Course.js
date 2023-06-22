const mongoose = require('mongoose');
// generate slug
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
// mongoose.set('useCreateIndex', true)

// unique
// const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, require: true },
        description: { type: String },
        image: { type: String },
        videoID: { type: String },
        level: { type: String }, // 0001-cpp-...
        slug: { type: String, slug: 'name' },
        // createdAt: {type: Date, default: Date.now},
        // updateAt: {type: Date, default: Date.now}
    },
    {
        timestamps: true,
    },
);

// add plugin
mongoose.plugin(slug);

// override all
Course.plugin(mongooseDelete, { overrideMethods: 'all' });

// course.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });
module.exports = mongoose.model('Course', Course);
