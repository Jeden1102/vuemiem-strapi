const slugify = require("slugify");

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;

    if (data.title) {
      data.slug = slugify(data.title, { lower: true });
    }

    if (data.lead || data.content) {
      data.reading_time = calculateReadingTime(data.lead, data.content);
    }
  },

  beforeUpdate(event) {
    const { data } = event.params;

    if (data.title) {
      data.slug = slugify(data.title, { lower: true });
    }

    if (data.lead || data.content) {
      data.reading_time = calculateReadingTime(data.lead, data.content);
    }
  },
};

function calculateReadingTime(lead = "", content = "") {
  const wordsPerMinute = 200;
  const text = `${lead} ${content}`;
  const wordCount = text.split(/\s+/).filter((word) => word).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}
