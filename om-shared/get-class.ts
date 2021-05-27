import { Omnifocus } from "../omnifocus";
import get from "lodash.get";

export default (context: Omnifocus, selection, sender) => {
  return get(context, "flattenedTags[0].name");
};
