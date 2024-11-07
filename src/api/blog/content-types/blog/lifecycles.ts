const slugify = require("slugify");

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    data.slug = "TEST";

    if (data.title) {
      data.slug = slugify(data.title, { lower: true });
    }
  },

  beforeUpdate(event) {
    const { data } = event.params;
    data.slug = "TEST";

    if (data.title) {
      data.slug = slugify(data.title, { lower: true });
    }
  },
};
