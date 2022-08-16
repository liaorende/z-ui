import Checkbox from './src/checkbox.vue';
import CheckboxGroup from './src/checkbox-group.vue';
import { withInstall } from "@z-ui/utils";

const ZCheckbox = withInstall(Checkbox)
const ZCheckboxGroup = withInstall(CheckboxGroup)

export {
  ZCheckbox as Checkbox,
  ZCheckboxGroup as CheckboxGroup
};
