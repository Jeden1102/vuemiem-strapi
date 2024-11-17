const slugify2 = require("slugify");
module.exports = {
    beforeCreate(event) {
        const { data } = event.params;
        if (data.name) {
            data.slug = slugify2(data.name, { lower: true });
        }
    },
    beforeUpdate(event) {
        const { data } = event.params;
        if (data.name) {
            data.slug = slugify2(data.name, { lower: true });
        }
    },
};
