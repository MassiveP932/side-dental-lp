import STAGE from "./stage.env";
import PROD from "./prod.env";
const env = import.meta.env.DEV ? STAGE : PROD;

export default {
  ...env
};
