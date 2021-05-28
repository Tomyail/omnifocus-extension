const get = require("lodash.get");

/** @typedef {import('../omnifocus').Omnifocus} Omnifocus */
/**
 *
 * @param {Omnifocus} context
 * @param {*} selection
 * @param {*} sender
 * @returns
 */
const getClass = (context, selection, sender) => {
  console.log("xxx");
  const x = 1;
  const a = new String();

  // return "1";
  return get(context, "flattenedTags[0].name");
};

module.exports = getClass;
