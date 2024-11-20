const s = require("slugify");

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;

    if (data.name) {
      data.slug = s(data.name, { lower: true });
    }
  },

  beforeUpdate(event) {
    const { data } = event.params;

    if (data.name) {
      data.slug = s(data.name, { lower: true });
    }
  },
};
